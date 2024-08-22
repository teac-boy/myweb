let menuBtn = document.querySelector('#menu-btn')
let bac = document.querySelector('.overly-back')
let form = document.querySelector('.form-back')
let menuCrose = document.querySelector('#mene-corse')
let menuCroseLogin = document.querySelector('#mene-corse-login')
let loginBtn = document.querySelector('#login-form')

loginBtn.addEventListener(
    'click',
    function () {
        if (bac.style.top == '100%' && bac.style.left == '100%') {
            bac.style.left = "-100%"
            bac.style.bottom = "-100%"
            bac.style.transition = "2"

        } else {
            bac.style.top = "-100%"
            bac.style.left = "-100%"
            form.style.top = "0%"
            form.style.left = "0%"
        }
    }
)

menuBtn.addEventListener(
    'click',
    function () {
        bac.style.top = "0"
        bac.style.left = "0"
    }
)
menuCrose.addEventListener(
    'click',
    function () {
        bac.style.top = "-100%"
        bac.style.left = "-100%"
        form.style.top = "-100%"
        form.style.left = "-100%"
    }
)
menuCroseLogin.addEventListener(
    'click',
    function () {
        form.style.top = "-100%"
        form.style.left = "-100%"

    }
)





// let demo = document.querySelectorAll('.demo')
// let mount = 0;
// let mount2 = 0;
// // let mount5 = 0;


// function hello (){
//     setInterval(
//         function () {

//             if( mount <= 50){
//                 demo.innerHTML = mount;
//                 ++mount
//                 console.log(mount)
//                }

//         },
//         1000

//     )


// }


let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${slideIndex * 100}%)`;
    });
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

// Initialize the first slide
showSlide(slideIndex);

let viewMoreBtn2 = document.querySelector('#view-more-btn');

viewMoreBtn2.addEventListener(
    'click',
    function () {
alert('comming soon more projects')
    }
)




    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
    });
