document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("login").addEventListener("click", function () {    
        event.preventDefault(); // 기본 동작 중지

        const inputID = document.getElementById("ID").value;
        const inputPassword = document.getElementById("PW").value;
    
        // ID와 Password가 비어 있지 않은 경우에만 로그인 시도
        if (inputID.trim() !== "" && inputPassword.trim() !== "") {            
            console.log("로그인 성공~");
            alert("로그인 성공!");            
            window.location.href = "info.html"; // "signup.html"은 회원가입 페이지의 경로입니다
        } else {
            alert("ID와 Password를 모두 입력하세요.");
            console.log("로그인 실패~")
    
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
