const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

// fp = featured-projects
let fpImage = document.querySelector('.featured-projects-image');
let fpContainer = document.querySelector('.featured-projects-container');
fpContainer.addEventListener('mouseenter', ()=>{
        fpImage.style.display = "block";
    })
    
        let fp = document.querySelectorAll('.featured-projects');
    fp.forEach(function(e){
        e.addEventListener('mouseenter',()=>{
            let dataImg = e.getAttribute('data-image');
                fpImage.style.backgroundImage = `url(${dataImg})`;   
        })
    })

fpContainer.addEventListener('mouseleave',()=>{
    fpImage.style.display = "none";

})




var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@0.90": {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      "@1.30": {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      "@1.50": {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });