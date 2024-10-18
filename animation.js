const containerImgCategorie = document.querySelectorAll('.categorieContainer');

document.addEventListener('DOMContentLoaded', function() {
    AOS.init();
});

window.addEventListener('scroll', () => {
    AOS.refresh(); // Recalculates AOS positions and ensures animations run
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






const sectionOfferte = document.getElementById('Offerte');

const allH3Offerte = document.querySelectorAll('h3');

allH3Offerte.forEach(el => { // Corrected the arrow function
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(el, {
        scrollTrigger: {
          trigger: sectionOfferte, // Trigger when the 'Offerte' section comes into view
          start: "top 80%",        // Adjust where the animation starts (relative to viewport)
        },
        duration: 2,           
        opacity: 0,         
        y: 200,                
        ease: "power2.out",    
    });
});

const allH2Offerte = document.querySelectorAll('h2');

allH2Offerte.forEach(el => { // Corrected the arrow function
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(el, {
        scrollTrigger: {
          trigger: sectionOfferte, // Trigger when the 'Offerte' section comes into view
          start: "top 80%",        // Adjust where the animation starts (relative to viewport)
        },
        duration: 2,           
        opacity: 0,         
        y: 200,                
        ease: "power2.out",    
    });
});
