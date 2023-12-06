document.addEventListener("DOMContentLoaded", function() {
    // 현재 날짜 가져오기
    let date = new Date();
    let currYear = date.getFullYear()
    let currMonth = date.getMonth();

    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
       
    console.log(months[currMonth]);
    
    const currentDate = document.querySelector('.current-date');
    currentDate.innerHTML = `${months[currMonth]} ${currYear}`;

    const daysTag = document.querySelector('.days');

    const renderCalendar = () => {
        currentDate.innerHTML = `${months[currMonth]} ${currYear}`;
    
        let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(); 
        console.log(lastDateofMonth);

        // for (let i = 1; i <= lastDateofMonth; i++) {
        //     console.log(i);
        // }

        let firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
        let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
        
        let liTag = '';
        for (let i = firstDayofMonth; i > 0; i--) {
            liTag += `<li class = "inactive">${lastDateofLastMonth - i + 1}</li>`;
        }
        
        for (let i = 1; i <= lastDateofMonth; i++) {
            let isToday = 
                i === date.getDate() &&
                currMonth === new Date().getMonth() &&
                currYear === new Date().getFullYear()
                    ? 'active'
                    : '';

            liTag += `<li class="${isToday}">${i}</li>`;
        }

        daysTag.innerHTML = liTag;
    };

    renderCalendar();

    document.getElementById("ic_left").addEventListener("click", function() {
        currMonth = currMonth - 1;
        if (currMonth < 0 || currMonth > 11) {
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear(); 
            currMonth = date.getMonth(); 
        } else {
            date = new Date();
        }

        renderCalendar();
    });

    document.getElementById("ic_right").addEventListener("click", function() {
        currMonth = currMonth + 1;

        if (currMonth < 0 || currMonth > 11) {
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear(); 
            currMonth = date.getMonth(); 
        } else {
            date = new Date();
        }
        
        renderCalendar();
    });
});

