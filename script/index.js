const main_s = new Swiper(".main-slide",{
    /* autoplay: {delay:3000}, */
    loop:true,
    navigation:{
        nextEl: ".arrr .swiper-button-next",
        prevEl: ".arrr .swiper-button-prev",
    },
})
const product_s = new Swiper(".product-slide",{
    slidesPerView:3,
    spaceBetween:44,
    /* navigation:{
        nextEl: ".product-slide .swiper-button-next",
        prevEl: ".product-slide .swiper-butto-prev",
    }, */
})