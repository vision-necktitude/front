var axiosScript = document.createElement("script");
axiosScript.src = "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js";

const apiUrl = "https://vision-necktitude.shop";   // API 엔드포인트 URL

let axiosReady = false;

document.addEventListener("DOMContentLoaded", function() {
    axiosScript.onload = function () {
        axiosReady = true;
    }

    // 회원가입 API
    document.getElementById("signup").addEventListener("click", function (event) {    
        event.preventDefault(); // 기본 동작 중지

        const inputName = document.getElementById("input-name").value;
        const inputId = document.getElementById("input-id").value;
        const inputPassword = document.getElementById("input-pw").value;
        const inputDate = document.getElementById("input-date").value;
        let inputGender = document.getElementById("input-gender").value;
    
        // 모든 정보가 비어있지 않아야 회원가입이 가능
        if(inputName.trim() == "" || inputId.trim() == "" || inputPassword.trim() == ""
            || inputDate.trim() == "" || inputGender.trim() == "") {
                alert("필수 항목을 모두 입력해야합니다");
                return;
            }

        if(!document.getElementById("privacy").checked || !document.getElementById("push").checked) {
            alert("필수 동의 항목에 모두 체크해야합니다");
            return;
        }

        inputGender = (inputGender == "남") ? "male" : "female";

        const user = {
            name: inputName,
            sex: inputGender,
            birthday: inputDate,
            id: inputId,
            password: inputPassword
        };

        const body = JSON.stringify(user);
        console.log(body);

        if(axiosReady) {
            console.log(body);

            axios.post(apiUrl + "/member/signup", body, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true,
            })
            .then(response => {  // 성공적으로 받아온 경우
                const res = response.data;
                console.log("success", res);

                console.log("회원가입 성공");
                alert("회원가입되었습니다!");

                history.back(); 
            })
            .catch(error => {  // 에러 처리
                console.error("fail", error.response);
                alert(error.response.data.message);
            })
            .finally(() => {
                document.getElementById("input-name").value = null;
                document.getElementById("input-id").value = null;
                document.getElementById("input-pw").value = null;
                document.getElementById("input-date").value = null;
                document.getElementById("input-gender").value = null;
            });
        };

        document.head.appendChild(axiosScript);
    });

    document.getElementById("ic_close").addEventListener("click", function () {
        // 이전 페이지(로그인)으로 이동
        alert("이전 페이지로 이동합니다.");
        history.back(); 
    });
});
