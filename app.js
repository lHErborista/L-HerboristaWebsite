// Nav Bar Selector
const OpenMenuBtn = document.querySelector('.hamburger');
const CloseMenuBtn = document.getElementById('closeModal');
const BackDrop = document.getElementById('backdropNav');
const MobileLinkNav = document.getElementById('mobile__nav');
const Body = document.querySelector('body');
const headerHeight = document.querySelector('.navBar').offsetHeight;
const linkMobile = document.querySelectorAll('.mobile__nav_items li a')

linkMobile.forEach(link => {
  link.addEventListener('click', function(event) {

    event.preventDefault();
    window.location.href = link.href; 

    document.addEventListener('DOMContentLoaded', function() {
        AOS.init();
        });

    close()

  });
});



// MOBILE NAV BAR 
/* Mobile Nav Bar */
function open(){
    BackDrop.style.display = 'block';
    CloseMenuBtn.style.display = 'block';
    MobileLinkNav.style.display = 'flex';
    OpenMenuBtn.style.display = 'none';
    Body.style.overflow = 'hidden';
}
function close(){
    BackDrop.style.display = 'none';
    CloseMenuBtn.style.display = 'none';
    MobileLinkNav.style.display = 'none';
    OpenMenuBtn.style.display = 'flex';
    Body.style.overflow = 'auto';
}
OpenMenuBtn.addEventListener('click', open);
CloseMenuBtn.addEventListener('click', close);


/* Mobile Nav bar for products */
const allOpenModalProductsNavbar = document.querySelectorAll('.openMicro');

allOpenModalProductsNavbar.forEach((openBtnProducts) => {

    const modalToOpen = openBtnProducts.getAttribute('refer'); 
    const modalElement = document.getElementById(modalToOpen); 
    const closeRefer = openBtnProducts.getAttribute('refer-close');
    const referCloseBtn = document.getElementById(closeRefer);

    openBtnProducts.addEventListener('click', () => {
        modalElement.style.display = 'flex';
        referCloseBtn.style.display= 'flex';    
        openBtnProducts.style.display= 'none';       
    });

    referCloseBtn.addEventListener('click',() => {
        modalElement.style.display= 'none';
        referCloseBtn.style.display= 'none';    
        openBtnProducts.style.display= 'block';       
    });
});


const hamburgerMobielProducts = document.querySelector('.hamburgerProducts');
const macroCategorieContainerMobile = document.querySelector('.macrocategoriaContainer')
const closeMacroNabar = document.querySelector('.closeModalProducts')

hamburgerMobielProducts.addEventListener('click',()=>{
    macroCategorieContainerMobile.style.display = 'block';
    hamburgerMobielProducts.style.display = 'none';
    closeMacroNabar.style.display = 'block';
})  
closeMacroNabar.addEventListener('click', ()=>{
    macroCategorieContainerMobile.style.display = 'none';
    hamburgerMobielProducts.style.display = 'block';
    closeMacroNabar.style.display = 'none';
})



/*  Whatsapp chat */
const whatsappLink = document.getElementById('whatsapp-chat');


whatsappLink.addEventListener('click', function(event) {
        event.preventDefault(); 
        event.stopPropagation(); 
        
        const whatsappLink = `https://wa.me/393914393426`;
        
        window.location.href = whatsappLink;
});








// RENDERING OFFERTE STAGIONALI

// Prodotti Consigliati Section
let datiProdottiConsigliati = {};
const ProdottiConsigliatiContainer = document.getElementById('prodotti-consigliati-list');
const ProdottiScontatiContainer = document.getElementById('prodotti-scontati-list');

function  renderProdottiConsigliati(){

    ProdottiConsigliatiContainer.innerHTML = "";  

    for(const el in datiProdottiConsigliati['prodottiConsigliati']){

        const productDiv = document.createElement("div");
        productDiv.classList.add("item-consigliato");

        productDiv.innerHTML = `
           
            <p class="tag">New</p>
            <img class="hover-img" src="${datiProdottiConsigliati['prodottiConsigliati'][el]['immagine']}" alt="">
        
            <div class="item-consigliato-description">
                <h3>${datiProdottiConsigliati['prodottiConsigliati'][el]['nome']}</h3>
                <p class="categoria">${datiProdottiConsigliati['prodottiConsigliati'][el]['categoria']}</p>
                <p>${datiProdottiConsigliati['prodottiConsigliati'][el]['descrizione']}</p>
                
            </div>
            <div id="backdropOfferte"></div>

            <div class="footerProducts">

                <button class="ordina-btn" data-whatsapp-number="393914393426" 
                            data-prefill-message="Salve, vorrei ordinare il prodotto: ${datiProdottiConsigliati['prodottiConsigliati'][el]['nome']}">
                        ordina
                </button>
                <p>${datiProdottiConsigliati['prodottiConsigliati'][el]['prezzo']} €</p>
            </div>

        `;

        ProdottiConsigliatiContainer.appendChild(productDiv);
    }
    document.querySelectorAll('.ordina-btn').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); 
            event.stopPropagation(); 
    
            const whatsappNumber = this.getAttribute('data-whatsapp-number');
            const message = this.getAttribute('data-prefill-message');
            
            const encodedMessage = encodeURIComponent(message);
            
            const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
            
            window.location.href = whatsappLink;
        });
    });
}
function  renderProdottiScontati(){

    ProdottiScontatiContainer.innerHTML = "";  

    for(const el in datiProdottiConsigliati['prodottiScontati']){

        const productDiv = document.createElement("div");
        productDiv.classList.add("item-scontato");

        productDiv.innerHTML = `
            

            <img class="hover-img" src="${datiProdottiConsigliati['prodottiScontati'][el]['immagine']}" alt="">
        
            <div class="item-consigliato-description">
                <h3>${datiProdottiConsigliati['prodottiScontati'][el]['nome']}</h3>
                <p class="categoria">${datiProdottiConsigliati['prodottiScontati'][el]['categoria']}</p>
                <p>${datiProdottiConsigliati['prodottiScontati'][el]['descrizione']}</p>
            </div>

            <div id="backdropOfferte"></div>

            <div class="footerProducts">
                <button class="ordina-btn" data-whatsapp-number="393914393426" 
                            data-prefill-message="Salve, vorrei ordinare il prodotto: ${datiProdottiConsigliati['prodottiScontati'][el]['nome']}">
                        ordina
                </button>
               
               
                <p id="prezzo-scontato">${datiProdottiConsigliati['prodottiScontati'][el]['prezzo']} €</p>
          
            </div>

        `;

        ProdottiScontatiContainer.appendChild(productDiv);
    }
    document.querySelectorAll('.ordina-btn').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); 
            event.stopPropagation(); 
    
            const whatsappNumber = this.getAttribute('data-whatsapp-number');
            const message = this.getAttribute('data-prefill-message');
            
            const encodedMessage = encodeURIComponent(message);
            
            const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
            
            window.location.href = whatsappLink;
        });
    });
}
function caricaDatiOfferteLampo() {
    fetch('./dati/offerteLampo.json') 
      .then(response => {
        if (!response.ok) {
          throw new Error('Errore nel caricamento del file JSON');
        }
        return response.json();  
      })
      .then(dati => {
        datiProdottiConsigliati = dati; 
        renderProdottiConsigliati()
        renderProdottiScontati()
      })
      .catch(error => {
        console.error('Errore:', error);  
      });
}
caricaDatiOfferteLampo()








// RENDERING PRODOTTI SECTION

// CATEGORIE
// Renderizzare i prodotti di default 
const ProdottiContainer = document.getElementById('product-list');
const paginationContainer = document.getElementById('pagination');

const screenWidth = window.innerWidth;
let productsPerPage = 0;

if (screenWidth <= 480){
    productsPerPage = 10;
}else if(screenWidth >= 960 && screenWidth <= 1900){
    productsPerPage = 15
}else if(screenWidth >= 2560){
    productsPerPage = 21;
}else{
    productsPerPage = 18;
}

let datiProdotti = {};
let currentPage = 1;
let currentCategory = '';
const categoriaAttiva = document.getElementById('categoria-attiva');



// render products for category
function setupPagination() {
    paginationContainer.innerHTML = "";  

    let prodotti = [];
    if (currentCategory === '') {
        // Usa tutti i prodotti
        prodotti = Object.values(datiProdotti).flat();
    } else {
        // Usa solo i prodotti della categoria corrente
        prodotti = datiProdotti[currentCategory] || [];
    }

    const totalPages = Math.ceil(prodotti.length / productsPerPage);
    
    const maxPagesToShow = 5;  
    let startPage, endPage;

    if (totalPages <= maxPagesToShow) {
        startPage = 1;
        endPage = totalPages;
    } else {
        if (currentPage <= 3) {
            startPage = 1;
            endPage = maxPagesToShow;
        } else if (currentPage + 2 >= totalPages) {
            startPage = totalPages - maxPagesToShow + 1;
            endPage = totalPages;
        } else {
            startPage = currentPage - 2;
            endPage = currentPage + 2;
        }
    }

    // Add "First" button and dots if needed
    if (startPage > 1) {
        createPageButton(1);
        if (startPage > 2) {
            createDots();
        }
    }

    // Create pagination buttons for the visible range
    for (let i = startPage; i <= endPage; i++) {
        createPageButton(i);
    }

    // Add "Last" button and dots if needed
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            createDots();
        }
        createPageButton(totalPages);
    }
}

function rendereCategoria() {
    ProdottiContainer.innerHTML = "";  

    let prodotti = [];
    if (currentCategory === '') {
        // Unisci tutti i prodotti da tutte le categorie
        prodotti = Object.values(datiProdotti).flat();
        categoriaAttiva.textContent = '> Tutti i prodotti';
    } else {
        // Filtra solo i prodotti della categoria corrente
        prodotti = datiProdotti[currentCategory] || [];
    }

    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = Math.min(startIndex + productsPerPage, prodotti.length);

    for (let i = startIndex; i < endIndex; i++) {
        const prodotto = prodotti[i];
        const productDiv = document.createElement("div");
        productDiv.classList.add("products");

        // Verifica se il prodotto è in sconto
        if (prodotto['sconto'] && prodotto['sconto'] > 0) { 
            productDiv.innerHTML = `
            <div class="prodotti-backdrop"></div>
            <p class="sconto-prodotto">Sconto del ${prodotto['sconto']}%</p>
            <img src="${prodotto['immagine']}" alt="">
            <div class="products-description outlet-version">
                <h3>${prodotto['nome']}</h3> 
                <p class="categoria-prodotto">${prodotto['categoria']}</p>
                <p class="prodotto-descrizione">${prodotto['descrizione']}</p>
                <div class="prezzo-container-div">
                    <div class="prezzo-container">  
                        <p class="prezzo-originale">prezzo: <span class="sbarrato">${prodotto['prezzoOriginale']}€</span></p>
                        <p class="prezzo-scontato"> ${prodotto['prezzoScontato']}€</p>
                    </div>
                    <button class="prodotto-btn" data-whatsapp-number="393914393426" 
                            data-prefill-message="Salve, vorrei ordinare il prodotto: ${prodotto['nome']}">
                        ordina
                    </button>
                </div>
            </div>
        `;
        } else {
            // Struttura standard per i prodotti non scontati
            productDiv.innerHTML = `
            <div class="prodotti-backdrop"></div>
            <img src="${prodotto['immagine']}" alt="">
            <div class="products-description">
                <h3>${prodotto['nome']}</h3>  
                <p class="categoria-prodotto">${prodotto['categoria']}</p>
                <p class="prodotto-descrizione">${prodotto['descrizione']}</p>
                <div class="prezzo-container-div">
                    <p class="prezzo">prezzo: <span class="prezzo-detail">${prodotto['prezzo']}€</span></p>
                    <button class="prodotto-btn" data-whatsapp-number="393914393426" 
                            data-prefill-message="Salve, vorrei ordinare il prodotto: ${prodotto['nome']}">
                        ordina
                    </button>
                </div>
            </div>
        `;
        }

        ProdottiContainer.appendChild(productDiv);
    }

    // Event listener per i pulsanti "ordina"
    document.querySelectorAll('.prodotto-btn').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); 
            event.stopPropagation(); 
    
            const whatsappNumber = this.getAttribute('data-whatsapp-number');
            const message = this.getAttribute('data-prefill-message');
            
            const encodedMessage = encodeURIComponent(message);
            const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
            window.location.href = whatsappLink;
        });
    });

    // Setup della paginazione
    setupPagination(); 
}


function createPageButton(page) {
    const button = document.createElement("button");
    button.textContent = page;
    if (page === currentPage) {
        button.classList.add("active");
    }
    button.addEventListener("click", () => {
        currentPage = page;  
        window.location.href='#Prodotti';
        rendereCategoria();  
    });
    paginationContainer.appendChild(button);
}
function createDots() {
    const dots = document.createElement("span");
    dots.textContent = "...";
    dots.style.margin = "0 10px";
    paginationContainer.appendChild(dots);
}
function caricaDati() {
    fetch('./dati/prodotti.json') 
      .then(response => {
        if (!response.ok) {
          throw new Error('Errore nel caricamento del file JSON');
        }
        return response.json();  
      })
      .then(dati => {
        datiProdotti = dati; 
        rendereCategoria();  
      })
      .catch(error => {
        console.error('Errore:', error);  
      });
}

// Load data on startup
caricaDati();

const tradizioneCategoria = document.getElementById('TradizioneErboristica');
const ideeCategoria = document.getElementById('Idee-regalo-ed-oggettistica'); 
const alimentazioneCategoria = document.getElementById('Alimentazione-Naturale');
const integratoriCategoria = document.getElementById('Integratori-Naturali');
const comesticiCategoria = document.getElementById('Cosmetici-e-cura-della-persona');
const outletCategoria = document.getElementById('Outlet');
const outletNavBar = document.getElementById('OutletLinkage');
const prodottiNavBar = document.getElementById('ProdottiLinkage');

tradizioneCategoria.addEventListener('click', () => {
    currentCategory = 'Tradizione erboristica';  
    currentPage = 1; 
    rendereCategoria();  
    categoriaAttiva.textContent = "> " + currentCategory;
});
ideeCategoria.addEventListener('click', () => {
    currentCategory = 'Idee regalo ed oggettistica';  
    currentPage = 1; 
    rendereCategoria();  
    categoriaAttiva.textContent = "> " + currentCategory;
});
alimentazioneCategoria.addEventListener('click', () => {
    currentCategory = 'Alimentazione naturale';  
    currentPage = 1; 
    rendereCategoria();  
    categoriaAttiva.textContent = "> " + currentCategory;
});
integratoriCategoria.addEventListener('click', () => {
    currentCategory = 'Integratori Naturali';  
    currentPage = 1; 
    rendereCategoria();  
    categoriaAttiva.textContent = "> " + currentCategory;
});
comesticiCategoria.addEventListener('click', () => {
    currentCategory = 'Cosmetici e cura della persona';  
    currentPage = 1;  
    rendereCategoria(); 
    categoriaAttiva.textContent = "> " + currentCategory;
});
outletCategoria.addEventListener('click', () => {
    currentCategory = 'Prodotti in sconto'; 
    currentPage = 1;  
    rendereCategoria(); 
    categoriaAttiva.innerHTML = "> " + currentCategory;
});
outletNavBar.addEventListener('click', () => {
    currentCategory = 'Prodotti in sconto'; 
    currentPage = 1;  
    rendereCategoria(); 
    categoriaAttiva.innerHTML = "> " + currentCategory;
});
prodottiNavBar.addEventListener('click', () => {
    currentCategory = 'Tradizione erboristica'; 
    currentPage = 1;  
    rendereCategoria(); 
    categoriaAttiva.innerHTML = "> " + currentCategory;
});



const prodottiMobileNavBar = document.getElementById('ProdottiLinkageMobile');
const oultetMobileNavBar = document.getElementById('OutletLinkageMobile');
const scopriBtn = document.getElementById('scopri'); 

oultetMobileNavBar.addEventListener('click', () => {
    currentCategory = 'Prodotti in sconto'; 
    currentPage = 1;  
    rendereCategoria(); 
    categoriaAttiva.innerHTML = "> " + currentCategory + "<span>sconti</span>";
}); 
prodottiMobileNavBar.addEventListener('click', () => {
    currentCategory = 'Tradizione erboristica'; 
    currentPage = 1;  
    rendereCategoria(); 
    categoriaAttiva.innerHTML = "> " + currentCategory;
});
scopriBtn.addEventListener('click', () => {
    currentCategory = 'Prodotti in sconto'; 
    currentPage = 1;  
    rendereCategoria(); 
    categoriaAttiva.innerHTML = "> " + currentCategory + "<span>sconti</span>";
});

const categoriaAttivaMobile = document.getElementById('categoria-attivaMobile')
const allMacro = document.querySelectorAll('.Mobile');

allMacro.forEach(element => {
    let refer = element.getAttribute('refer');

 

    element.addEventListener('click', () => {

        if (element && element.classList.contains('Mobile')) {
            macroCategorieContainerMobile.style.display = 'none';
            hamburgerMobielProducts.style.display = 'block';
            closeMacroNabar.style.display = 'none';
        }

        currentCategory = refer; 
        currentPage = 1;  
        rendereCategoria(); 
        categoriaAttivaMobile.innerHTML = "> " + currentCategory;
    })
})



// MICROCATEGORIE
const microCategorieList = document.querySelectorAll('.microCategorie');
var datiProdottiForMicroCat = {};
const listOfMacro = ['Tradizione erboristica','Idee regalo ed oggettistica', 'Alimentazione naturale','Integratori Naturali','Cosmetici e cura della persona', 'Prodotti in sconto']
let microCurrentCategory = '';
let currentMicroCatPage = 1;

let itemsPerMicroCatPage = 0;


if (screenWidth <= 480){
    itemsPerMicroCatPage = 10;
}else if(screenWidth >= 960 && screenWidth <= 1900){
    productsPerPage = 15
} else{
    itemsPerMicroCatPage = 18;
}

function renderCheck(){
    
    ProdottiContainer.innerHTML = "";
    if(screenWidth <= 960){
        categoriaAttivaMobile.textContent = "> " + microCurrentCategory;
    }else{
        categoriaAttiva.textContent = "> " + microCurrentCategory;
    }
    
    const filteredProducts = [];
    
    for (const macro of listOfMacro) {
        if (!datiProdottiForMicroCat[macro]) continue;

        for (let i = 0; i < datiProdottiForMicroCat[macro].length; i++) {
            var prodotto = datiProdottiForMicroCat[macro][i];
            if (String(prodotto['microcategoria']).trim() === String(microCurrentCategory).trim()) {
                filteredProducts.push(prodotto);
            }
        }
    }

    const startIndex = (currentMicroCatPage - 1) * itemsPerMicroCatPage;
    const endIndex = Math.min(startIndex + itemsPerMicroCatPage, filteredProducts.length);

    for (let i = startIndex; i < endIndex; i++) {
        const prodotto = filteredProducts[i];


        const productDiv = document.createElement("div");
        productDiv.classList.add("products");


        if(String(microCurrentCategory).includes('sconti')){ 
              
            productDiv.innerHTML = `
            <div class="prodotti-backdrop"></div>
            <p class="sconto-prodotto">Sconto del ${prodotto['sconto']}%</p>
            <img src="${prodotto['immagine']}" alt="">
            <div class="products-description outlet-version">
                <h3>${prodotto['nome']}</h3> 

                <p class="categoria-prodotto">${prodotto['categoria']}</p>
                <p class="prodotto-descrizione">${prodotto['descrizione']}</p>

                <div class="prezzo-container-div">

                    <div class="prezzo-container">  
                        <p class="prezzo-originale">prezzo: <span class="sbarrato">${prodotto['prezzoOriginale']}€</span></p>
                        <p class="prezzo-scontato"> ${prodotto['prezzoScontato']}€</p>
                    </div>

                    <button class="prodotto-btn" data-whatsapp-number="393914393426" 
                            data-prefill-message="Salve, vorrei ordinare il prodotto: ${prodotto['nome']}">
                        ordina
                    </button>
                </div>
            </div>
        `;
        }else{
            productDiv.innerHTML = `
            <div class="prodotti-backdrop"></div>
            <img src="${prodotto['immagine']}" alt="">
            <div class="products-description">
                <h3>${prodotto['nome']}</h3>  
                <p class="categoria-prodotto">${prodotto['categoria']}</p>
                <p class="prodotto-descrizione">${prodotto['descrizione']}</p>
                <div class="prezzo-container-div">
                    <p class="prezzo">prezzo: <span class="prezzo-detail">${prodotto['prezzo']}€</span></p>
            
                    <button class="prodotto-btn" data-whatsapp-number="393914393426" 
                            data-prefill-message="Salve, vorrei ordinare il prodotto: ${prodotto['nome']}">
                        ordina
                    </button>

                </div>
            </div>
        `;
        }

       

        ProdottiContainer.appendChild(productDiv);
    }


    document.querySelectorAll('.prodotto-btn').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); 
            event.stopPropagation(); 
    
            const whatsappNumber = this.getAttribute('data-whatsapp-number');
            const message = this.getAttribute('data-prefill-message');
            
            const encodedMessage = encodeURIComponent(message);
            
            const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
            
            window.location.href = whatsappLink;
        });
    });


    setupMicroPagination(filteredProducts.length);  
}
function setupMicroPagination(totalItems) {
    paginationContainer.innerHTML = "";

    const totalPages = Math.ceil(totalItems / itemsPerMicroCatPage);
    const maxPagesToShow = 5; 
    let startPage, endPage;

    if (totalPages <= maxPagesToShow) {
        startPage = 1;
        endPage = totalPages;
    } else {
        if (currentMicroCatPage <= 3) {
            startPage = 1;
            endPage = maxPagesToShow;
        } else if (currentMicroCatPage + 2 >= totalPages) {
            startPage = totalPages - maxPagesToShow + 1;
            endPage = totalPages;
        } else {
            startPage = currentMicroCatPage - 2;
            endPage = currentMicroCatPage + 2;
        }
    }

 
    if (startPage > 1) {
        createMicroPageButton(1);
        if (startPage > 2) {
            createMicroDots();
        }
    }

 
    for (let i = startPage; i <= endPage; i++) {
        createMicroPageButton(i);
    }


    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            createMicroDots();
        }
        createMicroPageButton(totalPages);
    }
}
function createMicroPageButton(page) {
    const button = document.createElement("button");
    button.textContent = page;
    if (page === currentMicroCatPage) {
        button.classList.add("active");
    }
    button.addEventListener("click", () => {
        currentMicroCatPage = page;  
        window.location.href='#Prodotti';
        renderCheck();  
    });
    paginationContainer.appendChild(button);
}
function createMicroDots() {
    const dots = document.createElement("span");
    dots.textContent = "...";
    dots.style.margin = "0 10px";
    paginationContainer.appendChild(dots);
}
function caricaDatiMicroCat() {
    fetch('./dati/prodotti.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Errore nel caricamento del file JSON');
        }
        return response.json();
      })
      .then(dati => {
        datiProdottiForMicroCat = dati;
        currentMicroCatPage = 1;  
        
        renderCheck();
      })
      .catch(error => {
        console.error('Errore:', error);
      });
}
microCategorieList.forEach(microCatBtn => {
    microCatBtn.addEventListener('click', function () {

        microCurrentCategory = microCatBtn.textContent;   

        caricaDatiMicroCat();

        macroCategorieContainerMobile.style.display = 'none';
        hamburgerMobielProducts.style.display = 'block';
        closeMacroNabar.style.display = 'none';
    });
});






// Show modal Micro Categorie
const modalBtns = document.querySelectorAll('.modal-btn');
let activeModalMicro = null; 
let activeModalBtn = null; 

modalBtns.forEach(modalBtn => {
    var categoria = modalBtn.getAttribute('refer');
    var categoriaBtn = modalBtn.getAttribute('refertwo');

    function openModal() {
        const modalMicro = document.getElementById(categoria);
        const modal = document.getElementById(categoriaBtn);

        if (activeModalMicro && activeModalMicro !== modalMicro) {
            activeModalMicro.classList.remove('active');
            activeModalBtn.classList.remove('active');
        }

      
        modalMicro.classList.add('active');
        modal.classList.add('active');


        activeModalMicro = modalMicro;
        activeModalBtn = modal;


        modalMicro.addEventListener('mouseleave', function() {
            modalMicro.classList.remove('active');
            modal.classList.remove('active');
            activeModalMicro = null;
            activeModalBtn = null;
        });

        const modalbtn = document.querySelectorAll(".microCategorie");
        modalbtn.forEach(btn =>{
            btn.addEventListener('click', ()=>{
                modalMicro.classList.remove('active');
                modal.classList.remove('active');
                activeModalMicro = null;
                activeModalBtn = null;

                microCurrentCategory = btn.textContent;   

                caricaDatiMicroCat();
            })
        })

    }

    modalBtn.addEventListener('mouseover', openModal);
});




const cat1Offerte = document.getElementById('Tradizione');
const cat2Offerte = document.getElementById('Idee');
const cat3Offerte = document.getElementById('Alimentazione');
const cat4Offerte = document.getElementById('Integratori');
const cat5Offerte = document.getElementById('Cosmetici');

cat1Offerte.addEventListener('click', () => {
    microCurrentCategory = 'Tradizione erboristica sconti'; 
    currentPage = 1;  
    caricaDatiMicroCat(); 
    categoriaAttiva.innerHTML = "> " + currentCategory + "<span>sconti</span>";
});
cat2Offerte.addEventListener('click', () => {
    microCurrentCategory = 'Idee regalo ed oggettistica sconti'; 
    currentPage = 1;  
    caricaDatiMicroCat();  
    categoriaAttiva.innerHTML = "> " + currentCategory + "<span>sconti</span>";
});
cat3Offerte.addEventListener('click', () => {
    microCurrentCategory = 'Integratori Naturali sconti'; 
    currentPage = 1;  
    caricaDatiMicroCat();  
    categoriaAttiva.innerHTML = "> " + currentCategory + "<span>sconti</span>";
});
cat4Offerte.addEventListener('click', () => {
    microCurrentCategory = 'Alimentazione naturale sconti'; 
    currentPage = 1;  
    caricaDatiMicroCat();  
    categoriaAttiva.innerHTML = "> " + currentCategory + "<span>sconti</span>";
});
cat5Offerte.addEventListener('click', () => {
    microCurrentCategory = 'Cosmetici e cura della persona sconti'; 
    currentPage = 1;  
    caricaDatiMicroCat();  
    categoriaAttiva.innerHTML = "> " + currentCategory + "<span>sconti</span>";
});








// SEARCH
const searchBtn = document.getElementById('search-btn')
const searchField = document.getElementById('search-field')
const searchModal = document.getElementById('search-modal');

// Get references to the alert elements
const customAlert = document.getElementById('customAlert');
const alertMessage = document.getElementById('alertMessage');
const closeAlertButton = document.getElementById('closeAlertButton');
let currentSearchPage = 1;
let itemsPerSearchPage = 0;


if (screenWidth <= 480){
    itemsPerSearchPage = 10;
}else if(screenWidth >= 960 && screenWidth <= 1900){
    productsPerPage = 15
}  else{
    itemsPerSearchPage = 18;
}

// Show Alert
function showCustomAlert(message) {
    alertMessage.textContent = message;  
    customAlert.style.display = 'flex';  
}
closeAlertButton.addEventListener('click', () => {
    customAlert.style.display = 'none';  
});

function setupSearchPagination(totalItems) {
    paginationContainer.innerHTML = ""; // Clear previous pagination buttons

    const totalPages = Math.ceil(totalItems / itemsPerSearchPage); // Calculate total pages
    const maxPagesToShow = 5; 
    let startPage, endPage;

    if (totalPages <= maxPagesToShow) {
        startPage = 1;
        endPage = totalPages;
    } else {
        if (currentSearchPage <= 3) {
            startPage = 1;
            endPage = maxPagesToShow;
        } else if (currentSearchPage + 2 >= totalPages) {
            startPage = totalPages - maxPagesToShow + 1;
            endPage = totalPages;
        } else {
            startPage = currentSearchPage - 2;
            endPage = currentSearchPage + 2;
        }
    }

    // Create "First" button
    if (startPage > 1) {
        createSearchPageButton(1);
        if (startPage > 2) {
            createSearchDots();
        }
    }

    // Create page buttons
    for (let i = startPage; i <= endPage; i++) {
        createSearchPageButton(i);
    }

    // Create "Last" button
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            createSearchDots();
        }
        createSearchPageButton(totalPages);
    }
}
function createSearchPageButton(page) {
    const button = document.createElement("button");
    button.textContent = page;
    if (page === currentSearchPage) {
        button.classList.add("active");
    }
    button.addEventListener("click", () => {
        currentSearchPage = page;  
        searchProducts(); // Re-render search results with new page
    });
    paginationContainer.appendChild(button);
}
function createSearchDots() {
    const dots = document.createElement("span");
    dots.textContent = "...";
    dots.style.margin = "0 10px";
    paginationContainer.appendChild(dots);
}
function searchProducts() {

    let searchTerm = '';
    
    const firstCheck = searchField.value.trim().toLowerCase();
    const checkSearch = searchFieldMobile.value.trim().toLowerCase();

    if (firstCheck === "") {

        if (checkSearch === "") {
            showCustomAlert("Assicurati di inserire dei caratteri.");
            return;
        }
        else{
            searchTerm = searchFieldMobile.value.trim().toLowerCase();
        }
    }else{
        searchTerm = searchField.value.trim().toLowerCase();
    }

    ProdottiContainer.innerHTML = "";
    const filteredProducts = []; 

    let found = false;
    for (const macro of listOfMacro) {
        if (!datiProdotti[macro]) continue;

        for (let i = 0; i < datiProdotti[macro].length; i++) {
            const productName = String(datiProdotti[macro][i]['nome']).trim().toLowerCase();
            if (productName.includes(searchTerm)) {
                found = true;
                filteredProducts.push(datiProdotti[macro][i]); 
            }
        }
    }

    if (!found) {
        showCustomAlert("Nessun prodotto trovato con quel nome.\n\nAssicurati di aver scritto bene il nome e di aver lasciato gli spazi tra ogni parola.");
        currentCategory = 'Tradizione erboristica';  
        currentPage = 1;
        rendereCategoria();
        categoriaAttiva.textContent = "> " + currentCategory;
        return;
    }

    // Pagination logic
    const startIndex = (currentSearchPage - 1) * itemsPerSearchPage;
    const endIndex = Math.min(startIndex + itemsPerSearchPage, filteredProducts.length);

    for (let i = startIndex; i < endIndex; i++) {
        const prodotto = filteredProducts[i];
        const productDiv = document.createElement("div");
        productDiv.classList.add("products");

        // Check if the product is in the "sconti" category
        if (String(prodotto['microcategoria']).includes('sconti')) {
            

            productDiv.innerHTML = `
                <div class="prodotti-backdrop"></div>
                <p class="sconto-prodotto">Sconto del ${prodotto['sconto']}%</p>
                <img src="${prodotto['immagine']}" alt="">
                <div class="products-description">
                    <h3>${prodotto['nome']}</h3> 
                    <p class="categoria-prodotto">${prodotto['categoria']}</p>
                    <p class="prodotto-descrizione">${prodotto['descrizione']}</p>
                    <div class="prezzo-container-div">
                        <div class="prezzo-container">
                            <p class="prezzo-originale">prezzo: <span class="sbarrato">${prodotto['prezzoOriginale']}€</span></p>
                            <p class="prezzo-scontato"> ${prodotto['prezzoScontato']}€</p>
                        </div>
                        <button class="prodotto-btn" data-whatsapp-number="393914393426" 
                                data-prefill-message="Salve, vorrei ordinare il prodotto: ${prodotto['nome']}">
                            ordina
                        </button>
                    </div>
                </div>
            `;
        } else {
            productDiv.innerHTML = `
                <div class="prodotti-backdrop"></div>
                <img src="${prodotto['immagine']}" alt="">
                <div class="products-description">
                    <h3>${prodotto['nome']}</h3>  
                    <p class="categoria-prodotto">${prodotto['categoria']}</p>
                    <p class="prodotto-descrizione">${prodotto['descrizione']}</p>
                    <div class="prezzo-container-div">
                        <p class="prezzo">prezzo: <span class="prezzo-detail">${prodotto['prezzo']}€</span></p>
                        <button class="prodotto-btn" data-whatsapp-number="393914393426" 
                                data-prefill-message="Salve, vorrei ordinare il prodotto: ${prodotto['nome']}">
                            ordina
                        </button>
                    </div>
                </div>
            `;
        }

        ProdottiContainer.appendChild(productDiv);
    }


    document.querySelectorAll('.prodotto-btn').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); 
            event.stopPropagation(); 
    
            const whatsappNumber = this.getAttribute('data-whatsapp-number');
            const message = this.getAttribute('data-prefill-message');
            
            const encodedMessage = encodeURIComponent(message);
            
            const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
            
            window.location.href = whatsappLink;
        });
    });

    setupSearchPagination(filteredProducts.length);
}
function showModal(){

    const activatedModal = document.querySelectorAll('.active');

    for (const el of activatedModal){
        el.classList.remove('active');
    }
    activeModalMicro = null;
    activeModalBtn = null;
    searchModal.style.display = 'block';

    const closeModalBtn = document.getElementById('closeModalBtn');
    closeModalBtn.addEventListener('click', function(){
        searchModal.style.display = "none";
        currentCategory = 'Tradizione erboristica';  
        currentPage = 1; 
        rendereCategoria();  
        categoriaAttiva.textContent = "> " + currentCategory;
    });

    const searchBtnModal = document.getElementById('search-btn-modal');
    searchBtnModal.addEventListener('click', () => {
        currentSearchPage = 1; 
        searchProducts();
    });
}
searchBtn.addEventListener('click', showModal)

searchField.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); 

        if (searchModal.style.display !== "block") {
            showModal();  
        }
        currentSearchPage = 1;  
        searchProducts();  
    }
});


// Search Mobile
const searchBtnMobile = document.getElementById('search-btnMobile')
const searchFieldMobile = document.getElementById('search-fieldMobile')
const searchModalMobile = document.getElementById('search-modalMobile');

function showModalMobile(){

    const hamburgerMobielProducts = document.querySelector('.hamburgerProducts');
    const macroCategorieContainerMobile = document.querySelector('.macrocategoriaContainer')
    const closeMacroNabar = document.querySelector('.closeModalProducts')

    closeMacroNabar.style.display = 'none';
    macroCategorieContainerMobile.style.display = 'none';
    hamburgerMobielProducts.style.display = 'block';
    

    const activatedModal = document.querySelectorAll('.active');

    for (const el of activatedModal){
        el.classList.remove('active');
    }
    activeModalMicro = null;
    activeModalBtn = null;
    searchModalMobile.style.display = "block";  

    const closeModalBtnMobile = document.getElementById('closeModalBtnMobile');
    closeModalBtnMobile.addEventListener('click', function(){
        
        searchModalMobile.style.display = "none";
        currentCategory = 'Tradizione erboristica';  
    
        currentPage = 1; 
        rendereCategoria();  
        categoriaAttivaMobile.textContent = "> " + currentCategory;
    });

    const searchBtnModalMobile = document.getElementById('search-btn-modalMobile');
    searchBtnModalMobile.addEventListener('click', () => {
        currentSearchPage = 1;
        searchProducts();
    });
}
searchBtnMobile.addEventListener('click', showModalMobile)

searchFieldMobile.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); 

        if (searchModalMobile.style.display !== "block") {
            showModal();  
        }
        currentSearchPage = 1;  
        searchProducts();  
    }
});




/* Footer */
const terminiModal = document.getElementById('modal-termini');
const terminiModalBtn = document.getElementById('terminiModal');
const terminiModalCloseBtn = document.getElementById('close-modal-termini');

terminiModalBtn.addEventListener('click',(event)=>{
    event.preventDefault()
    terminiModal.style.display = 'flex';
})

terminiModalCloseBtn.addEventListener('click',(event)=>{
    event.preventDefault()
    terminiModal.style.display = 'none';
})


const contattiLink = document.getElementById('contatti');

contattiLink.addEventListener('click',(event)=>{
    event.preventDefault(); 
    event.stopPropagation();
    
    const whatsappLink = `https://wa.me/393914393426`;

    window.location.href = whatsappLink;
})



const contattaciBtn = document.getElementById('contatti-btn');

contattaciBtn.addEventListener('click',(event)=>{
    event.preventDefault(); 
    event.stopPropagation();
    
    const whatsappLink = `https://wa.me/393914393426`;

    window.location.href = whatsappLink;
})





function showLoadingPopup() {
    document.getElementById("loadingOverlay").style.display = "flex";
}

function hideLoadingPopup() {
    document.getElementById("loadingOverlay").style.display = "none";
}

function initiateDownload(filename, link) {
    showLoadingPopup(); // Mostra il popup di caricamento
    setTimeout(() => { // Timeout per simulare un'attesa
        const a = document.createElement("a");
        a.href = link;
        a.download = filename;
        a.click();
        hideLoadingPopup(); // Nascondi il popup dopo il click
    }, 2000); // Timeout di 2 secondi
}

document.getElementById("downloadButtonOutlet").addEventListener("click", function() {
    initiateDownload("Catalogo-Erboristeria.pdf", "outlet.pdf");
});

document.getElementById("downloadButtonIdee").addEventListener("click", function() {
    initiateDownload("IdeeRegalo.pdf", "Oggettistica.pdf");
});

document.getElementById("downloadButtonProfumazioni").addEventListener("click", function() {
    initiateDownload("Profumazioni.pdf", "Profumazioni.pdf");
});


















