let mySwiper;
function initSwiper() {
    mySwiper = new Swiper('swiper-container', {

    })
}

function destroySwiper() {
    if(mySwiper) {
        mySwiper.destroy();
    }
}

document.addEventListener('DOMContentLoaded',function(event) {
 if (window.innerWidth <= 768) {
    destroySwiper();
 } else {
    initSwiper();
 }
});

window.addEventListener('resize', 
function(event) {
    if (window.innerWidth <= 768) {
         destroySwiper();
    } else {
        initSwiper()
    }
});