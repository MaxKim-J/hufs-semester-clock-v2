/* eslint-disable */
chrome.runtime.onInstalled.addListener(function (details) {
  if (details.reason == 'install') {
    alert(
      '외대 종강시계가 성공적으로 설치되었습니다!\n설정탭에서 학번, 이름을 설정해주세요!\n종강까지 화이팅!🔥'
    );
  } else if (details.reason == 'update') {
    var thisVersion = chrome.runtime.getManifest().version;
    console.log(
      'Updated from ' + details.previousVersion + ' to ' + thisVersion + '!'
    );
  }
});
