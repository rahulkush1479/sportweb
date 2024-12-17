$(document).ready(function () {
    var owl = $('.mainbanner');
    owl.owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        dots: true,
        dotsContainer: ".custom-dots"
    });

    $('.next-btn').on('click', function () {
        owl.trigger('next.owl');
    });

    $('.prev-btn').on('click', function () {
        owl.trigger('prev.owl');
    });
});

$('.blogsec').owlCarousel({
    loop: true,
    margin: 10,
    items: 2.5,
    center: true,
    nav: true,
    rtl: true,
    autoplay: true,
    autoplayTimeout: 500,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2.5
        }
    }
})

$('.success').owlCarousel({
    loop: true,
    margin: 10,
    items: 3.5,
    center: true,
    nav: true,
    rtl: true,
    autoplay: true,
    duration: 1,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3.5
        }
    }
})


let dest = new Date("dec 18, 2024 10:00:00").getTime();
let x = setInterval(function () {
    let now = new Date().getTime();
    let diff = dest - now;


    if (diff <= 0) {
        clearInterval(x);
        return;
    }

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    if (days < 10) {
        days = `0${days}`;
    }
    if (hours < 10) {
        hours = `0${hours}`;
    }
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }


    let countdownElements = document.getElementsByClassName("countdown-element");

    for (let i = 0; i < countdownElements.length; i++) {
        let unit = countdownElements[i].getAttribute("data-unit");
        switch (unit) {
            case "days":
                countdownElements[i].innerHTML = days;
                break;
            case "hours":
                countdownElements[i].innerHTML = hours;
                break;
            case "minutes":
                countdownElements[i].innerHTML = minutes;
                break;
            case "seconds":
                countdownElements[i].innerHTML = seconds;
                break;
            default:
                break;
        }
    }
}, 1000);



function tognav() {
    $(".hidenav").toggleClass("shownav");
    // $(".main").toggleClass("mainbg");
}