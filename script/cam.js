const video = document.getElementById("video");

const startButton = document.getElementById("카메라 켜기");
const stopButton = document.getElementById("카메라 끄기");

startButton.addEventListener("click", () => {
  // 웹캠을 시작합니다.
  navigator.mediaDevices.getUserMedia({
    video: true
  }).then((stream) => {
    video.srcObject = stream;
  });
});

stopButton.addEventListener("click", () => {
  // 웹캠을 중지합니다.
  video.srcObject.getTracks().forEach((track) => track.stop());
});