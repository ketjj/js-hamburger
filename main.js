
//mostrare / nascondere il menu principale

const hambMenu = document.querySelector('.hamburger-menu');
console.log(hambMenu);

const showHambMenu = document.querySelector('.fa-bars');
const closeHambMenu = document.querySelector('.close');


showHambMenu.addEventListener('click', function(){
  hambMenu.classList.add('active');
});

closeHambMenu.addEventListener('click', function(){
  hambMenu.classList.remove('active');
});

