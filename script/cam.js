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