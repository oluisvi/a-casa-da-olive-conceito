const filters=[...document.querySelectorAll('.filter')];
const cards=[...document.querySelectorAll('.experience-card')];
filters.forEach(button=>button.addEventListener('click',()=>{
  filters.forEach(item=>{const active=item===button;item.classList.toggle('is-active',active);item.setAttribute('aria-pressed',String(active));});
  const category=button.dataset.filter;
  cards.forEach(card=>{card.hidden=category!=='all'&&card.dataset.category!==category;});
}));
const menuToggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('#nav');
menuToggle.addEventListener('click',()=>{const open=menuToggle.getAttribute('aria-expanded')!=='true';menuToggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('is-open',open);});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{menuToggle.setAttribute('aria-expanded','false');nav.classList.remove('is-open');}));
