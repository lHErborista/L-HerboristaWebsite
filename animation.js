const containerImgCategorie = document.querySelectorAll('.categorieContainer');

document.addEventListener('DOMContentLoaded', function() {
    AOS.init();
});

window.addEventListener('scroll', () => {
    AOS.refresh(); 
});
  
containerImgCategorie.forEach(element =>{
    const Img = element.querySelector('img');
    const Btn = element.querySelector('button');

    Btn.addEventListener('mouseover', ()=>{
        Img.style.transform = 'scale(1.1)'; 
    })

    Btn.addEventListener('mouseout', () => {
        Img.style.transform = 'scale(1)'; 
    });

})



const allh2 = document.querySelectorAll('h2');
const allh3 = document.querySelectorAll('h3');


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fade-in 1s forwards';
        }
    });
}, {
    threshold: 0.1 
});

allh2.forEach(h2 => {
    observer.observe(h2);
});

allh3.forEach(h3 => {
    observer.observe(h3);
});