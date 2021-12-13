# 외대 종강시계 V2

12월까지 천천히 해보자구

## 고민들 정리

앱을 만들면서 한 고민들은 [여기에](./README_decisions.md) 정리합니다.

## TODO

### 개발 전 작업

- [x] figma로 디자인하기

### 크롬 익스텐션 보일러플레이트 세팅 작업

- [x] Rollup으로 세팅해보기
- [x] Webpack으로 세팅해보기 => 웹팩으로 간다!
- [x] typescript(tsc)
- [x] eslint, prettier

### 백엔드 작업(firebase)

- [x] REST API로 전환
- [x] 크롤러 정상 작동하도록 손보기(날씨)

### 기능 개발 전 세팅 작업

- [x] 디렉토리 구조 잡기
- [x] Chrome Storage 접근 함수 만들기(일단 대충 만들기)
- [x] Firebase API 엔드포인트로 axios 요청 함수 만들기
- [x] React Query 세팅하고 커스텀 훅 만들기
- [x] Suspense+ErrorBoundary 추상화 컴포넌트 만들기
- [x] Sentry 연동해서 에러 모니터링 세팅 - 추후 Error 처리법 좀 더 연구하기
- [x] Recoil 세팅과 chrome.storage와의 Interaction 구현
- [x] Storybook 세팅
- [x] Jest로 테스트 세팅
- [x] CSS 변수, emotion 전역 세팅(폰트, 텍스트, 마진, 패딩, 색깔)
- [x] fundamental 컴포넌트들과 story만들기
  - [x] Index
  - [x] LinkText
  - [x] HeadingText
  - [x] Index
  - [x] Index
  - [x] Index
  - [x] Index
  - [x] Index
  - [x] Index
  - [x] Index
  - [x] Index
  - [x] Index
  - [x] TextArea

### 기능 개발 작업

데이터 다루는 모듈 만들기 -> 테스트코드 작성 -> 기능개발

- [ ] 레이아웃 잡기, 설정란 기능, 개발자 소개
- [ ] 배경화면, 배경화면 바꾸기
- [ ] 시계 기능, 학번이름 바꾸기
- [ ] 날짜 기능(입학일로부터, 종강일)
- [ ] 즐겨찾기 기능
- [ ] 탭기능 - 학사공지
- [ ] 탭기능 - 오늘 뭐먹지
- [ ] 탭기능 - 타이머
- [ ] 탭기능 - 날씨
- [ ] 탭기능 - 코로나 현황
