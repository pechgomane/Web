document.addEventListener("DOMContentLoaded", function() {
    // Intersection Observer สำหรับ animation ของ car-details
    const carDetails = document.querySelectorAll('.car-details');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    carDetails.forEach(detail => {
        observer.observe(detail);
    });

     // Initialize Swiper
     const swiper = new Swiper('.mySwiper', {
        effect: 'coverflow', // ใช้เอฟเฟกต์ Coverflow
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true, // เปิดใช้งาน infinite loop
        coverflowEffect: {
            rotate: 50, // องศาการหมุน
            stretch: 0,
            depth: 100, // ความลึกของสไลด์
            modifier: 1,
            slideShadows: true, // เงาของสไลด์
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});

