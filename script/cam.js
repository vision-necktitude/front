var time = 0;
var count = 0;

document.addEventListener("DOMContentLoaded", function() {
    // fastAPI 실행 코드
    setTimeout(() => {
        console.log("2초가 지났습니다.");

        const path = require('path');
        const {shell} = require('electron');
        const batFilePath = path.join(__dirname, '..', 'vision-necktitude-ai', 'env_setting.bat');

        console.log(batFilePath)
        shell.openPath(batFilePath);
    }, 2000);

    document.getElementById("start").addEventListener("click", () => {
        document.getElementById("guideline").style.visibility = "visible";

        clearInterval(time); // 타이머 초기화
        time = setInterval(timer, 1000);

        var url = "http://localhost:8000/init";
        console.log(url);

        fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('API 오류!');
            }
            return response.json();
        })
        .catch(error => {
            console.log('There was a problem with the fetch operation:', error);
        });
    });

    document.getElementById("stop").addEventListener("click", () => {
        var url = "http://localhost:8000/end";
        console.log(url);

        fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('API 오류!');
            }
            return response.json();
        })
        .catch(error => {
            console.log('There was a problem with the fetch operation:', error);
        });
    });
});

function timer() {
    count++; // 타이머 선택 숫자에서 -1씩 감산함(갱신되기 때문)
    console.log("count", count);
    
    document.getElementById("guideline-progress").value = count;
    
    if(count == 6) { 
        clearInterval(time);	// 시간 초기화
        console.log("시간이 완료되었습니다.");

        document.getElementById("guideline").style.visibility = "hidden";

        count = 0;
        document.getElementById("guideline-progress").value = count;
    }
}