var axiosScript = document.createElement("script");
axiosScript.src = "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js";

const apiUrl = "https://vision-necktitude.shop";   // API 엔드포인트 URL

let userName;
let userId;

let axiosReady = false;

document.addEventListener("DOMContentLoaded", function() {
    // 유저 정보 반환 API
    axiosScript.onload = function () {  
        // Axios를 사용하여 POST 요청 보내기
        axios.get(apiUrl + "/member/member-page", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
            withCredentials: true,
        })
        .then(response => {  // 성공적으로 받아온 경우
            const res = response.data;
            console.log("success", res);

            userName = res.result.name;
            userId = res.result.id;

            document.getElementById("input_name").value = userName
            document.getElementById("input_id").value = userId;
        })
        .catch(error => {  // 에러 처리
            console.error("fail", error.response);
            alert(error.response);
        });

        axiosReady = true;
    }

    console.log(localStorage.getItem("jwt"));

    // 이전 페이지로 이동
    document.getElementById("ic_close").addEventListener("click", function () {
        // 이전 페이지(로그인)으로 이동
        alert("이전 페이지로 이동합니다.");
        history.back(); 
    });

    document.head.appendChild(axiosScript);
           
    // 이름 변경 API
    document.getElementById("edit_name").addEventListener("click", function () {
        // Axios 스크립트를 로드
        // var axiosScript = document.createElement("script");
        // axiosScript.src = "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js";

        // axiosScript.onload = function () {
        //     // 로드가 완료되면 axios를 사용하여 API 요청
        //     axios.get(url + "/test/log")
        //         .then(function (response) { // 성공적으로 받아온 경우
        //             console.log(response.data);
        //         })
        //         .catch(function (error) { // 에러 처리
        //             console.error('Error:', error);
        //         });
        // };
        // document.head.appendChild(axiosScript);

        const inputName = document.getElementById("input_name").value;

        if(inputName.trim() != "") {
            const name = {
                name: inputName
            };

            const body = JSON.stringify(name);
            console.log(body);

            // Axios를 사용하여 POST 요청 보내기
            if(axiosReady) {
                axios.post(apiUrl + "/member/modify/name", body, {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + localStorage.getItem("jwt")
                    },
                    withCredentials: true,
                })
                .then(response => {  // 성공적으로 받아온 경우
                    const res = response.data;
                    console.log("success", res);
    
                    console.log("이름 변경 성공");
                    alert("닉네임이 변경되었습니다");
                })
                .catch(error => {  // 에러 처리
                    console.error("fail", error.response);
                    alert(error.response.data.body.message);
    
                    document.getElementById("input_name").value = userName;
                });
    
            }
            
            document.head.appendChild(axiosScript);
        } else {
            document.getElementById("pw").value = userName;  // 가져온 값으로

            console.log("안도이");
            alert("이름을 입력하세요.");
        }
    });

    // 비밀번호 변경 API
    document.getElementById("edit_pw").addEventListener("click", function () {
        const inputPassword = document.getElementById("input_pw").value;

        if(inputPassword.trim() != "") {
            const password = {
                password: inputPassword
            };

            const body = JSON.stringify(password);
            console.log(body);

            // Axios를 사용하여 POST 요청 보내기
            if(axiosReady) {
                axios.post(apiUrl + "/member/modify/password", body, {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + localStorage.getItem("jwt")
                    },
                    withCredentials: true,
                })
                .then(response => {  // 성공적으로 받아온 경우
                    const res = response.data;
                    console.log("success", res);
    
                    console.log("비밀번호 변경 성공");
                    alert("비밀번호가 변경되었습니다");
                })
                .catch(error => {  // 에러 처리
                    console.error("fail", error.response);
                    alert(error.response.data.body.message);
    
                    document.getElementById("input_pw").value = null;
                });
            }

            document.head.appendChild(axiosScript);
        } else {
            console.log("안도이");
            alert("비밀번호를 입력하세요.");
        }
    });
});
