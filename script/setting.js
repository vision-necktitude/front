window.addEventListener('DOMContentLoaded', event => {
    const eyeToggle = document.getElementById("eye-toggle");
    const neckToggle = document.getElementById("neck-toggle");
    const infoToggle = document.getElementById("info-toggle");

    let eye = eyeToggle.src == "icon/toggle_on.png" ? true : false;
    let neck = neckToggle.src == "icon/toggle_on.png" ? true : false;
    let info = infoToggle.src == "icon/toggle_on.png" ? true : false;


    // 눈깜빡임 감지 여부 설정
    eyeToggle.addEventListener("click", function () {
        if(eye) {
            eyeToggle.src = "icon/toggle_off.png";
            eye = false;
        } else {
            eyeToggle.src = "icon/toggle_on.png";
            eye = true;
        }
    });

    // 눈깜빡임 감지 여부 설정
    neckToggle.addEventListener("click", function () {
        if(neck) {
            neckToggle.src = "icon/toggle_off.png";
            neck = false;
        } else {
            neckToggle.src = "icon/toggle_on.png";    
            neck = true;
        }
    });

    // 눈깜빡임 감지 여부 설정
    infoToggle.addEventListener("click", function () {
        if(info) {
            infoToggle.src = "icon/toggle_off.png";
            info = false;
        } else {
            infoToggle.src = "icon/toggle_on.png";
            info = true;
        }
    });

    // 프로필 페이지로 이동
    document.getElementById("else-profile").addEventListener("click", function () {
        alert("프로필 페이지로 이동합니다");
        window.location.href = "profile.html";
    });

    // 이용약관 페이지로 이동
    document.getElementById("else-text").addEventListener("click", function () {
        window.location.href = "profile.html";  // 임시
    });

    // 개인정보 처리방침 페이지로 이동
    document.getElementById("else-security").addEventListener("click", function () {
        window.location.href = "profile.html";  // 임시
    });

    // 로그아웃
    document.getElementById("else-logout").addEventListener("click", function () {
        alert("로그아웃을 진행합니다");
        localStorage.removeItem("jwt");  // jwt 삭제 후
        window.location.href = "index.html";   // 로그인 페이지로 돌아감
    });

    // 회원 탈퇴
    document.getElementById("else-resign").addEventListener("click", function () {
        alert("회원 탈퇴를 진행합니다");

        // 추후 회원탈퇴 API 연동 진행

        window.location.href = "index.html";  // 회원탈퇴 후 로그인 페이지로 이동
    });
});