document.addEventListener("DOMContentLoaded", function() {
    // 이전 페이지로 이동
    document.getElementById("ic_close").addEventListener("click", function () {
        // 이전 페이지(로그인)으로 이동
        alert("이전 페이지로 이동합니다.");
        history.back(); 
    });
           
    // 이름 변경 API
    document.getElementById("edit_name").addEventListener("click", function () {
        alert("닉네임을 변경합니다.");

        var url = "https://vision-necktitude.shop"; // API 엔드포인트 URL

        fetch(url + "/test/log")
        .then(response => response.json())
        .then(data => {
            console.log(data); // 받아온 데이터 활용
        })
        .catch(error => console.error('Error:', error));
    });

    
});
