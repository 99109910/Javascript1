const bars=document.querySelector('.fa-bars');
const sidebar = document.querySelector('.sidebar');
const closing=document.querySelector('.fa-xmark');

bars.addEventListener('click',()=>{
   sidebar.classList.toggle('showSidebar');
});

closing.addEventListener('click',()=>{
   sidebar.classList.remove('showSidebar');
});