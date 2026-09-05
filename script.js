document.getElementById('year').textContent=new Date().getFullYear();
const typingText=document.getElementById('typingText');
const roles=["Full-Stack .NET Developer — ASP.NET Core, C#, SQL Server","Oracle NetSuite Reporting Developer — SuiteScript 2.x, SuiteQL","ERP Dashboard & Professional Reporting Specialist"];
let r=0,i=0,del=false;
function typeLoop(){
  const t=roles[r];
  typingText.textContent=t.slice(0,i);
  if(!del&&i<t.length){i++;setTimeout(typeLoop,45);return}
  if(!del&&i===t.length){del=true;setTimeout(typeLoop,1300);return}
  if(del&&i>0){i--;setTimeout(typeLoop,20);return}
  del=false;r=(r+1)%roles.length;setTimeout(typeLoop,250);
}
typeLoop();

document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{
  const id=a.getAttribute('href');if(id.length>1&&document.querySelector(id)){e.preventDefault();document.querySelector(id).scrollIntoView({behavior:'smooth'});}
}));

const lightbox=document.getElementById('lightbox');
const lightboxImage=document.getElementById('lightboxImage');
const closeBtn=document.getElementById('lightboxClose');
document.querySelectorAll('.preview-btn').forEach(btn=>btn.addEventListener('click',()=>{
  lightboxImage.src=btn.dataset.image || btn.querySelector('img')?.src;
  lightbox.classList.add('open');document.body.style.overflow='hidden';
}));
function closeBox(){lightbox.classList.remove('open');document.body.style.overflow='';}
closeBtn.addEventListener('click',closeBox);
lightbox.addEventListener('click',e=>{if(e.target===lightbox)closeBox()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeBox()});
