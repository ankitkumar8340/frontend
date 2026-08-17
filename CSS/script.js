const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const menuOverlay = document.getElementById('menuOverlay');
const container = document.querySelector('.container');

openBtn.addEventListener('click', () => {
    menuOverlay.classList.add('active');
    container.classList.add('menu-open');
})

closeBtn.addEventListener('click', ()=>{
    menuOverlay.classList.remove('active');
    container.classList.remove('menu-open');
})


