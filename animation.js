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





document.addEventListener("DOMContentLoaded", function() {
    const paragrafiRecensioni = document.querySelectorAll(".recensione-testo");

    function limitaCaratteri() {
        paragrafiRecensioni.forEach((testoRecensione) => {
            const testoCompleto = testoRecensione.textContent;
            let maxCaratteri;

            if (window.innerWidth <= 576) {
                const primoTitoloRecensione = document.getElementById('prima-recensione')
                const secondoTitoloRecensione = document.getElementById('seconda-recensione')
                const terzoTitoloRecensione = document.getElementById('terza-recensione')

                primoTitoloRecensione.textContent = 'Desiree G.';
                secondoTitoloRecensione.textContent = 'Emanuela Di T.';
                terzoTitoloRecensione.textContent = 'Michele M.';

                maxCaratteri = 100;  
            } else if (window.innerWidth <= 768) {
                maxCaratteri = 120; 
            } else {
                maxCaratteri = testoCompleto.length; 
            }

            if (testoCompleto.length > maxCaratteri) {
                testoRecensione.textContent = testoCompleto.slice(0, maxCaratteri) + "...";
            } else {
                testoRecensione.textContent = testoCompleto;
            }
        });
    }

    limitaCaratteri();
    window.addEventListener("resize", limitaCaratteri);
});







