var axiosScript = document.createElement("script");
axiosScript.src = "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js";

const apiUrl = "https://vision-necktitude.shop";   // API 엔드포인트 URL
const config = {"Content-Type": "application/json"};

// 동적 기능
document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("login").addEventListener("click", function (event) {    
        event.preventDefault(); // 기본 동작 중지

        const inputID = document.getElementById("id").value;
        const inputPassword = document.getElementById("pw").value;
    
        // ID와 Password가 비어 있지 않은 경우에만 로그인 시도
        if (inputID.trim() !== "" && inputPassword.trim() !== "") {     
            // POST 요청을 보낼 데이터
            const userData = {
                id: inputID,
                password: inputPassword,
            };
            const body = JSON.stringify(userData)
            console.log(body)

            axiosScript.onload = function () {
                // Axios를 사용하여 POST 요청 보내기
                axios.post(apiUrl + "/member/login", body, {
                    headers: config,
                    withCredentials: true
                })
                .then(response => {  // 성공적으로 받아온 경우
                    const res = response.data;
                    console.log("success", res);

                    console.log(res.result);
                    localStorage.setItem("jwt", res.result.jwt);
                    
                    console.log("로그인 성공");
                    alert("로그인에 성공하였습니다");  

                    document.getElementById("id").value = null;
                    document.getElementById("pw").value = null;

                    window.location.href = "info.html";
                })
                .catch(error => {  // 에러 처리
                    console.error("fail", error.response.data);

                    document.getElementById("id").value = null;
                    document.getElementById("pw").value = null;

                    alert(error.response.data.message);
                });
            };

            document.head.appendChild(axiosScript);
        } else {
            console.log("로그인 실패")

            document.getElementById("id").value = null;
            document.getElementById("pw").value = null;

            alert("ID와 Password를 모두 입력하세요.");
        }    
    });

    document.getElementById("sign-up").addEventListener("click", function () {
        // 회원가입 페이지로 이동
        alert("회원가입 페이지로 이동합니다.");
        window.location.href = "signup.html"; // "signup.html"은 회원가입 페이지의 경로입니다
    });

    document.getElementById("find-id").addEventListener("click", function () {
        // 회원가입 페이지로 이동
        alert("아이디 찾기 페이지로 이동합니다.");
        window.location.href = "findAccount.html"; // "signup.html"은 회원가입 페이지의 경로입니다
    });
    
    document.getElementById("find-password").addEventListener("click", function () {
        // 회원가입 페이지로 이동
        alert("비밀번호 찾기 페이지로 이동합니다.");
        window.location.href = "findAccount.html"; // "signup.html"은 회원가입 페이지의 경로입니다
    });
});
