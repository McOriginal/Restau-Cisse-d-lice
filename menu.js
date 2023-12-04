let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');


menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}


// Barre de recherche fermer
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}


document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#searsh-form').classList.toggle('active');
}


document.querySelector('#close').onclick = () =>{
    document.querySelector('#searsh-form').classList.remove('active');
}

// Fin de Barre de recherche fermer


// Barre de navigation 

$(document).on('click', 'a', function(){
    $(this).addClass('active').siblings().removeClass('active')
}
)




// Fin de Barre de navigation 





// ----------------------------------------------------------
// Swipper slider Menu
let images = document.getElementsByClassName('images');

let etape= 0;

let nbr_img =images.length;


function enleverActiveImages() {
    for(let i= 0; i <nbr_img; i++) {
        images[i].classList.remove('active');
    }
}



// suivant.addEventListener('click', function(){
//     etape++;
//     if(etape>= nbr_img){
//         etape=0;
//     }
//     enleverActiveImages();
//     images[etape].classList.add('active');
// })

// precedent.addEventListener('click', function(){
//     etape--;
//     if(etape<= nbr_img){
//         etape=0;
//     }
//     enleverActiveImages();
//     images[etape].classList.add('active');
// })

setInterval(function() {
    etape++;
    if(etape>= nbr_img){
        etape=0;
    }
    enleverActiveImages();
    images[etape].classList.add('active');
}, 4000)





