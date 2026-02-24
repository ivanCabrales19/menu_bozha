const btnEnglish = document.getElementById('btn-english');
const btnSpanish = document.getElementById('btn-spanish');

const contentSpanish = document.querySelector('.content-spanish');
const contentEnglish = document.querySelector('.content-english');

function setLanguage(lang){
  localStorage.setItem('lang', lang);
}

btnEnglish.addEventListener('click', () => {
  contentSpanish.classList.remove('active');
  contentEnglish.classList.add('active');
  setLanguage('en');
});

btnSpanish.addEventListener('click', () => {
  contentEnglish.classList.remove('active');
  contentSpanish.classList.add('active');
  setLanguage('es');
});

window.addEventListener('DOMContentLoaded', ()=>{
  const lang = localStorage.getItem('lang');
  if(lang == 'en'){
    contentSpanish.classList.remove('active');
    contentEnglish.classList.add('active');
  }
})