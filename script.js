document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.reveal').forEach((el,i)=>{
    el.style.animationDelay = (0.05 + i*0.05) + 's';
  });
});
