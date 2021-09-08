// Select All Link
const allLinks = document.querySelectorAll(".nav-item a");
allLinks.forEach(link => {

    link.addEventListener("click", (e) => {
        document.querySelector(".contact").scrollIntoView({
            behavior: 'smooth'
        });
    });
});


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:4,

    autoplay: true,
    autoplaySpeed:1000,
    dotsSpeed:1000,

    nav:false,
    navSpeed:1000,

    center: true,
    autoWidth:false,

    responsiveClass:true,
    responsive:{
        320:{
            items:1
        },
        480:{
            items:1
        },
        640:{
            items:3
        },
        768:{
            items:3
        },
        1024:{
            items:4
        },
        1280:{
            items:5
        }
    }
})
