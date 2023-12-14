window.addEventListener('DOMContentLoaded', event => {
    const eye = document.getElementById("title-eye");
    const neck = document.getElementById("title-neck");

    eye.style.color = "#06814D";

    const mySwiper = new Swiper(".swiper", {
        direction: "horizontal",
        loop: false,
        autoplay: false,
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        moushwheel: true
    });

    mySwiper.on("transitionEnd", function() {
        console.log(mySwiper.realIndex)
        if(mySwiper.realIndex == 0) {
            eye.style.color = "#06814D";
            neck.style.color = "#333333";
        } else {
            eye.style.color = "#333333";
            neck.style.color = "#06814D";
        }
    })

    eye.addEventListener("click", function () {
        eye.style.color = "#06814D";
        neck.style.color = "#333333";    });

    neck.addEventListener("click", function () {
        eye.style.color = "#333333";
        neck.style.color = "#06814D";
    });
});