document.getElementById('year').textContent=new Date().getFullYear();
const typing=document.getElementById('typingText');
const roles=[
  "Full-Stack .NET Developer — ASP.NET Core, C#, SQL Server",
  "Oracle NetSuite Reporting Developer — SuiteScript 2.x / 2.0 / 2.1",
  "ERP Dashboard, Telerik Grid & Professional Reporting Specialist"
];
let r=0,i=0,back=false;
function loop(){
  const t=roles[r];
  typing.textContent=t.slice(0,i);
  if(!back&&i<t.length){i++;return setTimeout(loop,42)}
  if(!back&&i===t.length){back=true;return setTimeout(loop,1200)}
  if(back&&i>0){i--;return setTimeout(loop,18)}
  back=false;r=(r+1)%roles.length;setTimeout(loop,220)
}
loop();

document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{
  const id=a.getAttribute('href');
  if(id.length>1&&document.querySelector(id)){e.preventDefault();document.querySelector(id).scrollIntoView({behavior:'smooth'})}
}));

const box=document.getElementById('lightbox'), img=document.getElementById('lightboxImage');
document.querySelectorAll('.preview').forEach(b=>b.addEventListener('click',()=>{
  img.src=b.dataset.image || b.querySelector('img')?.src;
  box.classList.add('open');document.body.style.overflow='hidden'
}));
function closeBox(){box.classList.remove('open');document.body.style.overflow=''}
document.getElementById('closeLightbox').addEventListener('click',closeBox);
box.addEventListener('click',e=>{if(e.target===box)closeBox()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeBox()});