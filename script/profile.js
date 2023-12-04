document.addEventListener("DOMContentLoaded", function() {
    const log = require('electron-log')

    // 이전 페이지로 이동
    document.getElementById("ic_close").addEventListener("click", function () {
        // 이전 페이지(로그인)으로 이동
        alert("이전 페이지로 이동합니다.");
        history.back(); 
    });
           
    // 이름 변경 API
    document.getElementById("edit_name").addEventListener("click", function () {
        alert("닉네임을 변경합니다.");
        log.info('log test');

        var url = "https://vision-necktitude.shop"; // API 엔드포인트 URL

        // fetch(url + "/test/log")
        // .then(response => response.json())
        // .then(data => {
        //     console.log(data); // 받아온 데이터 활용
        // })
        // .catch(error => console.error('Error:', error));

        // Axios 스크립트를 로드
        var axiosScript = document.createElement("script");
        axiosScript.src = "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js";

        axiosScript.onload = function () {
            // 로드가 완료되면 axios를 사용하여 API 요청
            axios.get(url + "/test/log")
                .then(function (response) { // 성공적으로 받아온 경우
                    console.log(response.data);
                })
                .catch(function (error) { // 에러 처리
                    console.error('Error:', error);
                });
        };
        document.head.appendChild(axiosScript);
    });
});
