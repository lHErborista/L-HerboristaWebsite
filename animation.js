const containerImgCategorie = document.querySelectorAll('.categorieContainer');

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
