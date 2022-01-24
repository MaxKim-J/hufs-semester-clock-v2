# 외대 종강시계 V2

![GitHub last commit (branch)](https://img.shields.io/github/last-commit/MaxKim-J/hufs-semester-clock-v2/master) ![Chrome Web Store](https://img.shields.io/chrome-web-store/users/jadlpknbgnmmelikpcaogikohieafaem?hl=ko) ![Chrome Web Store](https://img.shields.io/chrome-web-store/v/jadlpknbgnmmelikpcaogikohieafaem)  
![Coverage-lines](./coverage/badge-lines.svg) ![Coverage-statement](./coverage/badge-statements.svg)
![Coverage-functions](./coverage/badge-functions.svg)

> **HUFS Semester Clock V2**  
외대생을 위한, 종강까지 얼마나 남았는지 보여주는 크롬 익스텐션

![첫번째](./img1.png)![두번째](./img2.png)

- 🧩 [크롬 웹 스토어](https://chrome.google.com/webstore/detail/%EC%99%B8%EB%8C%80-%EC%A2%85%EA%B0%95%EC%8B%9C%EA%B3%84/jadlpknbgnmmelikpcaogikohieafaem?hl=ko)
- 🧩 [웨일 웹 스토어](https://store.whale.naver.com/detail/mckjnmgioalpnggjipjkmadnandhomei)

## ✅ 주요 기능

- 새로운 탭을 생성하면 크롬의 디폴트 배경화면 대신, 익스텐션이 제공하는 배경 이미지와 기능이 제공됩니다.
- 학기 중에는 종강까지 남은 시간을 보여줍니다.
- 방학 중에는 계절학기 종강까지 or 다음학기 개강까지 남은 시간을 보여줍니다.
- 학번과 이름을 입력하면 시간에 따른 랜덤 멘트와 입학한 날짜로부터 얼마나 지났는지 볼 수 있습니다.
- 배경화면을 유저가 업로드한 파일을 통해 커스텀 가능합니다.
- 학사 공지 조회와 이문동 날씨 조회, 사용자 커스텀 북마크, 코로나 현황, 오늘 뭐먹지 등 시계 외의 여러 유용한 부가 기능을 사용하실 수 있습니다.

## v2.0.0에서의 개선점

### 기능적 관점

- 최소한의 인터랙션으로 모든 부가기능을 쉽게 사용할 수 있는 새로운 디자인, UX 적용
- 각 기능들에 대해 새로운 디자인 적용
- 타이머, 커스텀 북마크 추가, 개발자에게 피드백 보내기 기능 새로 구현
- 애니메이션, 스켈레톤 UI 추가하여 사용자 반응성 향상
### 기술적 관점

- Vue+Javascript로 구현되었던 V1 코드를 React+Typescript로 리라이팅
- 기존에 Firebase SDK에 직접 의존하는 쿼리를 REST API로 대체하고 Firebase SDK를 번들에서 제거
- Suspense for Data Fetching, React Query, Error Boundary를 이용한 선언적 비동기 구현
- 스크린 리더 디버깅을 병행하며, 웹표준과 웹 접근성을 준수한 마크업 작성
- Jest, react-testing-library 이용한 68개의 유닛, 통합 테스트 코드 작성
- Webpack 크롬 익스텐션 보일러 플레이트 직접 처음부터 구현
- 코드 스플리팅을 이용한 번들 크기 축소
- 앱 전체 번들 크기 축소(290KiB -> 180KiB, 기능은 더 많아졌는데 번들은 더 작아짐)
- Manifest 3로 업데이트

## 앞으로

- preact 도입 고려하기 : 더 작은 React 라이브러리로 대체해 번들 크기 더 효율화
- 웨일 스토어는 manifest v3 아직 지원 안함 : 빌드를 두 번 하지 않고 번들을 따로 2개 만드는 빌드 환경 구축
- 테스트 환경 및 빌드 속도 개선
- 모니터링 환경 만들기 : 피드백, firebase functions 함수 호출 모니터링 환경 만들기
- 기능 추가 : 위젯 위치 커스텀, 새로운 위젯 계속해서 추가

## 버전

- [릴리즈 노트](https://github.com/MaxKim-J/hufs-semester-clock-v2/releases)
- [v1.x.x 릴리즈 노트](https://github.com/MaxKim-J/HUFS-Semester-Clock-Extension/releases)
