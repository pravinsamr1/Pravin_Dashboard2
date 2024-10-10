const menubtn = document.querySelector('#menu-btn');
const sideMenu = document.querySelector('aside');
const closeBtn = document.querySelector('#close-btn');
const themeToggle = document.querySelector('.theme-toggle')

menubtn.addEventListener('click', ()=>{
    sideMenu.style.display = 'block';
})
closeBtn.addEventListener('click',()=>{
    sideMenu.style.display = 'none';
})
themeToggle.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-theme-variables');
})

console.log("Hello")