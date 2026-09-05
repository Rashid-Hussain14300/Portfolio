const header=document.querySelector('.site-header');
const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav-links');
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>20));
menuBtn?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.getElementById('year').textContent=new Date().getFullYear();
