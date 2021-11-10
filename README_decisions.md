# 외대 종강시계 고민했던 부분들

## `Chrome.storage` vs `localStorage` - chrome.storage
- 학번, 이름, 종강시간 정보, 커스텀 배경화면 등은 브라우저의 스토리지를 이용하여 저장하고, 서비스하고 있다.

### Chrome.Storage
- 따로 익스텐션을 설치하지 않는 이상 유저가 접근할 수 없다 
- 데이터를 객체로 저장할 수 있다.
- API가 전반적으로 localStorage보다 다채롭고 유용하다.
    - getItem 인자로 객체를 사용할 수도 있다.
    - 쓸 일은 아마 없을 것 같지만 스토리지의 데이터가 변할때 이벤트 핸들러를 달아줄 수도 있다.
- 읽고 쓰는 것이 경우 비동기로 처리되기 때문에 로컬스토리지처럼 로직을 블락하지 않고, 더 빠르다고 한다.

### localStorage
- 문자열로만 저장 가능
- 유저가 개발자도구로 접근 가능
- Redux Persist 같은 라이브러리를 사용할 수 있다. chrome.storage용으로 나온 Redux Persist 라이브러리가 없지는 않은데 스타수도 적고 사람들이 많이 쓰는 라이브러리같지 않아서 도입할 수 없을 것 같다.
- Cypress같은 E2E 테스트를 적용할 때 chrome.storage를 사용할 수 없어 웹으로 빌드한다음에 로컬스토리지를 사용하는, 기본적인 웹사이트의 형식으로 테스트가 가능하다

### 결론

Chrome.Storage를 사용한다.

- API의 사용성이 더 좋고, 객체로 데이터를 저장할 수 있어 개발이 더 편해질 것이다.
- 현재 배경화면을 base64로 인코딩하여 스토리지에 넣고 서빙하고 있어 1MB가 넘는 데이터를 스토리지에 저장해야 하는 일도 있다. 더 빠른 쪽을 선택하는게 좋지 않을까 싶다.
- 뒤에서도 또 설명할거 같긴 한데 E2E테스트를 도입하지 않고 Storybook을 적극적으로 이용할 것 같다.


## webpack vs rollup - webpack
- 일단 fully configurable한 프로젝트를 위해서 번들링하는 보일러 플레이트부터 만들 예정이었다.
- 롤업이 트리 쉐이킹에 유리하고(ESM 번들링), 번들 크기가 웹팩보다 더 적은 편이라고 알고 있어서 롤업으로 리액트 + 크롬 익스텐션 보일러 플레이트를 세팅해 먼저 만들어보고, 후에 웹팩으로도 만들어봐서 사용성이나 프로젝트 확장 가능성 등을 비교해보고자 했다.
- 롤업 코드는 이렇게 생겼다.
```js
import livereload from 'rollup-plugin-livereload';
import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import copy from 'rollup-plugin-copy';
import typescript from '@rollup/plugin-typescript';
import svgr from '@svgr/rollup';
import url from 'rollup-plugin-url';
import { visualizer } from 'rollup-plugin-visualizer';
import { terser } from 'rollup-plugin-terser';
import fs from 'fs';
import constants from './constants';

fs.rmdirSync('dist', { recursive: true });

const PRODUCTION = process.env.NODE_ENV === 'production';
const constantKey = process.env.NODE_ENV === 'production' ? 'prod' : 'dev';

const reactBundleConfig = {
  input: {
    bundle: 'src/index.ts',
  },
  output: {
    dir: 'dist/js',
    format: 'es',
    entryFileNames: '[name].js',
    sourcemap: false,
    manualChunks: {
      framework: ['react', 'react-dom', 'styled-components'],
    },
  },
  preserveEntrySignatures: false,
  plugins: [
    typescript({
      tsconfig: 'tsconfig.json',
    }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
      presets: ['@babel/preset-react'],
    }),
    nodeResolve({
      extensions: ['.js', '.mjs', '.jsx'],
    }),
    replace({
      values: {
        'process.env.NODE_ENV': PRODUCTION ? "'production'" : "'development'",
        ...constants[constantKey],
      },
      preventAssignment: true,
    }),
    url(),
    svgr(),
    commonjs(),
    terser(),
  ],
};

const chromeExtensionBundleConfig = {
  input: {
    background: 'src/assets/background.js',
  },
  output: {
    dir: 'dist',
    format: 'es',
    entryFileNames: '[name].js',
    sourcemap: false,
  },
  preserveEntrySignatures: false,
  plugins: [
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
    }),
    nodeResolve({
      extensions: ['.js'],
    }),
    replace({
      values: {
        'process.env.NODE_ENV': PRODUCTION ? "'production'" : "'development'",
        ...constants[constantKey],
      },
      preventAssignment: true,
    }),
    copy({
      targets: [
        { src: 'src/assets/manifest.json', dest: 'dist' },
        { src: 'src/assets/icons', dest: 'dist' },
        { src: 'src/assets/index.html', dest: 'dist' },
      ],
    }),
    commonjs(),
    terser(),
  ],
};

if (!PRODUCTION) {
  reactBundleConfig.output.sourcemap = 'inline';
  reactBundleConfig.plugins = reactBundleConfig.plugins.concat([
    livereload({ watch: 'dist', verbose: true }),
    visualizer(),
  ]);
}

export default [reactBundleConfig, chromeExtensionBundleConfig];
```

### 결론

사용성과 편리성 면에서 웹팩이랑 많은 차이가 나서, 결국 웹팩을 쓰기로 했다. 모든걸 다 테스트해본건 아니지만 일단 느낀 느낌은 이럼.

- 전체적으로 롤업은 웹개발을 위한 편의 기능이 웹팩보다 부족하다.
- **HTML에 JS 주입해서 결과물 만드는게 불편** : 롤업에 관련 플러그인이 있지만, 모든 번들 결과물을 HTML에 붙이는 것만 가능하고 템플릿 적용이 어렵다. 크롬 익스텐션에는 background.js라는 앱의 일부는 아니지만 크롬 익스텐션 백그라운드에서 돌아가는 코드 번들이 있는데, 이 번들은 HTML에 들어가면 안 되었다.  번들 결과물들을 순회하여 background.js만 빼놓고 HTML에 삽입하거나 하는 로직은 가능하지만 너무 복잡한 것 같음
- **SplitChunks 옵션만한게 없음** : 롤업에도 manualChunks라고 번들링 결과물을 나눠주는 기능이 있기는 한데 SplitChunks옵션보다 추상화 단계가 낮은 느낌이 있다. 함수와 모듈에 대한 메타 정보를 토대로 내 입맛에 맞게 번들 스플리팅을 할 수 있을듯 싶었음. 공통 모듈을 빼주는 기능을 코드로 구현할 수 있겠지만 Webpack을 사용하면 간단하게 몇가지 옵션만으로 가능해서 굳이 manualChunks를 커스텀하는데 리소스를 써야 할까 싶었다.
- Bundle Analyzer : 번들 아날라이저가 웹팩 쪽이 더 보기가 편했음

## Code Splitting Strategy
- 내가 만드려는 번들의 목표 : 프레임워크, 가장 최초로 불러와지는 메인 번들 하나, 탭 코드 스플리팅(2개), 모드 변경 코드 스플리팅(1개)
- 코드 스플리팅하면 여러개의 번들이 만들어질텐데, 이때 splitchunks 옵션이 없으면 동적 임포트된 번들들은 각각 같은 라이브러리를 포함하고 있을 수 있음!
- 코드 스플리팅된 여러개의 번들 중 공통 번들은 다른 번들로 분리하여 한번만 가져올 수 있도록 하면 될 것 같다.
- 이렇게 생각을 해보니, 정말 앱의 속성에 따라 번들링 전략은 많이 달라질수도 있겠다.. 하늘 아래 같은 웹팩 세팅이 있을까 하는 생각도 들었다.

## 전역 상태 관리 도입? - 도입, Recoil
React Query를 사용하기도 하고, 앱에 계속 유지되어야 하는 정보는 크롬 storage에 바로 접근해서 정보를 가져오면 되겠다 싶어서 전역 상태 관리가 필요 없을거라고 생각해서 원래 안쓰려고 했었다. 그런데 크롬 스토리지에 있는 것들을 앱의 영역으로 가져오는게 장점이 있는 영역들이 좀 있다..

### 예상되는 장점
- 앱을 좀 더 testable하게 만들 수 있을 것이라 생각이 들었다
    - storybook 스냅샷 테스트를 하고 싶을 경우 상이한 Store 상태를 제공하고 그것에 따라 다른 뷰를 스토리로 작성할 수 있게 된다
    - 크롬 스토리지에 바로 접근하는 방식으로 개발 환경 위에서 테스팅을 하게 되면 크롬 스토리지의 현재 상태에 따라 테스트 결과가 영향이 미칠 수 밖에 없으므로 분리된 환경에서 테스트할 수 없어진다. 전역 상태 Store가 있으면 상이한 Store 상태를 제공해서 아예 테스트 코드가 크롬 스토리지에 접근할 수 없도록 격리할 수 있다. => 이게 가장 메인한 이유인듯 싶다
    - 만약에 E2E 테스트를 한다면 환경이 내 브라우저와 완전히 독립된 공간이라면 이런 문제를 해결할 수 있을 듯 하다.  그치만…
        - Cypress를 도입하기 위해서는 크롬 익스텐션 디버깅 환경이 아니라 웹 디버깅 환경이 필요하다. URL로 접속할 수 없기 때문
        - 웹으로 빌드하면 Chrome.storage를 사용할 수 없기 때문에 로컬스토리지를 쓰거나 해야한다.
- 앱의 온갖 부분에서 스토리지에 접근할 필요가 없이, 중앙 집중적 스토어에 한번 넣어두고 사용하는게 앱의 제어 관점에서는 더 자연스럽고, 앱과 브라우저의 경계를 확실히 분리하는 방법이 된다.
    - 앱의 온갖 부분에서 스토리지에 접근하여 값을 가져와 렌더링할 경우 각 컴포넌트의 state값에 넣어두고 렌더링 흐름에 편입시킬탠데, 이때 다른 곳에서 store 값이 바뀌었을 때도 국지적인 컴포넌트의 상태값으로 이전 스토어 값을 그대로 가지고 있을 가능성도 충분히 존재하기 때문에 동기화 이슈가 생긴다.
    - 지금 당장의 UI에는 문제가 없을수는 있는데, 앞으로 스토리지의 데이터를 동시에, 여러 곳에서 사용할 가능성을 배제할 수 없다.

### 우려스러운 점
- 배경화면 기능을… 이미지를 Base64로 인코딩해서 스토리지에 넣고 사용하고 있기 때문에… 앱의 Store에 3메가 짜리 문자열이 떡하니 앱에 들어가있는건 너무 메모리의 낭비가 아닌가 생각이 든다.=> 근데 이게 실질적으로 앱의 퍼포먼스에 영향을 미치는것이 아니라면 괜찮지 않을까? 하는 생각이 안 드는건 아니다. 
- 스토어를 만들어놓는다고는 하지만 프로퍼티나 속성을 많이 안쓸거라 번들이 쓸데없이 커질거같다. 앱 전체로 보면 가성비가 떨어지는 것이 아닌가.. React Query를 이미 쓰고있기 때문에 더 그런 생각이 든다.
- 근데 이 두 지점의 경우, 실질적으로 앱의 성능에 가시적인 영향을 미치지 않는다면 어느정도는 가능한 정도이다. 현재 V1이 쓰는 메모리가 11Mb 정도인데, 여기에서 2-3메가정도 더쓴다고 해서 큰 차이가 나는지는 잘 모르겠다는 것이다.

### 고려해본 상태관리 도구
- Redux : 테스트가 쉽고 Storybook 작성이 쉽다는 장점이 있으나 크롬 스토리지에 접근하는 동작이 비동기인데, 비동기 로직을 액션 안에 작성할 수 없고, 스토어에서 처리할 로직이 프로퍼티가 많거나, 복잡하지도 않은데 Saga나 thunk를 쓰는게 비효율적인거 같음 => 탈락!
- MobX : 앱에서 class를 꽤 활용할 것이라 class를 이용한 문법이 마음에 들고, 비동기 액션 작성이 다른 동기 액션과 비교했을때 약간 예외적이긴 하지만 다른 라이브러리 없이 작성할 수 있으며, Redux처럼 Store를 Provider 컴포넌트로  제공하여 테스트를 쉽게 해볼 수 있다. 번들이 가장 크다(100kb)는 점이 약간 찝찝함 
- **Recoil** : 독스에 스토리지 관련 예제가 있는데, 스토리지에 있는 값을 초기에 스토어에 올려놓는데는 가장 간편하며 effect의 onSet으로 쉽고 우아하게(!)스토리지와 인터랙션을 할 수 있다. 
  컴포넌트에서 따로 액션을 호출할 필요 없다는 점이 매력적. 다만 Redux나 Mobx와는 다르게 atom을 import해서 쓰는 꼴이라 storybook을 작성하기가 살짝 까다로워질 것 같다. atom을 상위 컴포넌트에서 받는 prop 인터페이스를 설계해야한다. 래퍼, HOC가 필요하다.
    - UNSTABLE한 기능이 찝찝한 면이 있기도 한데, 의존성 업데이트는 필요할 때 수행하고 리팩토링하면 되므로 Recoil을 사용하는 거 자체가 유저 경험에 큰 영향을 미치지는 않을 듯 하다.

### 결론
사실 어떤 선택이든 장단과 trade-off가 있는 것 같다.  프로젝트에서는 Recoil을 사용할 것이다. Recoil을 사용하면 Storage와의 연동 로직을 깔끔하고 우아하게 작성할 수 있는데 그 점이 주요했다.

Storybook을 사용하기가 까다롭다는 단점같은 경우는 다음과 같은 방법으로 극복한다. Storybook을 사용할 때를 대비해 프로덕트에는 RecoilWrapper 래퍼 컴포넌트를 사용해 지정한 atom을 전달하고, 스토리를 작성할때는 래퍼 없이 atom을 생성해 집어넣는 방법으로 작성한다.

## 4. 테스트 전략 - Jest(유닛, 통합 테스팅), Storybook(UI 테스팅)
뷰를 이루는 모듈들의 동작이 완벽하면 뷰도 완벽할 것이다! 아마도..?

### 테스트 규칙
- 라이브러리의 동작을 테스팅하지 않는다(React가 이벤트를 잘 발생시키나? Prop이 잘 들어갔나? 같은거. 라이브러리를 못 믿었다면 애초에 쓰지 말아야 한다. 그리고 well-known 라이브러리들은 라이브러리단에서 이미 테스트 검증이 끝났을 것이다.)
- 컴포넌트 내부를, UI와 의존성이 높은 방식으로 테스팅하지 않는다 : UI에 의존하는 테스트를 만들면, 쉽게 깨지는 테스트가 되고 유지보수 비용도 상승한다. TestLibary나 Enzyme등을 통해 UI를 렌더링해 테스팅하지 않고, Storybook을 사용해 정확한 UI가 렌더링되는지 판단한다.

### 테스트 종류
- 유닛 테스트와 TDD : Data가공 관련 로직들, 종단 관심사를 포함하고 있는 Utils 로직들은 컴포넌트와 분리하여 클래스, 메소드, 속성 등으로 만들고 유닛 테스트를 한다. 유닛 테스트들은 기능 개발 이전에 먼저 테스트케이스를 작성하고 테스트를 충족시키며 개발을 하는 TDD 방법론을 따른다.
- 통합 테스트 : 인터페이스 설계로 통합 테스트를 대신한다. 유닛 테스트가 필요한 부분들을 합쳐, 컴포넌트에 추상화 높은 기능으로 제공할 수 있는 인터페이스를 만들고, 이 클래스를 테스트해보는 것이 곧 통합테스트를 대신할 것이다.
- Storybook을 이용한 UI 테스트 :
    - Fundamental : 앱의 기본 단위가 되는 가장 작은 크기의 컴포넌트들을 addon knobs를 통해 쉽게 테스트 가능하게 스토리를 작성한다.
    - User Interaction : 유저 인터렉션에 따라 페이지에서 뷰가 달라지는 부분들에 대해서만 페이지 스토리를 작성한다. - 근데 이거는 함 해봐야 잘 되는지 어쩌는지 판단이 가능할듯
- 스토리북은 따로 배포해두고, 포트폴리오의 한 부분으로 같이 가져간다.