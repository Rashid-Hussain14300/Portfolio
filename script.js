// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    const href = this.getAttribute('href');
    if(href.length>1 && document.querySelector(href)){
      e.preventDefault();
      document.querySelector(href).scrollIntoView({behavior:'smooth'});
      // collapse navbar on small screens
      const nav = document.querySelector('.navbar-collapse');
      if(nav && nav.classList.contains('show')) new bootstrap.Collapse(nav).hide();
    }
  })
});

// Project modal: open carousel with images supplied in data-images attribute
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.view-project');
  if(!btn) return;
  const title = btn.dataset.title || 'Project';
  const raw = btn.getAttribute('data-images') || '[]';
  let images = [];
  try { images = JSON.parse(raw); } catch(err){ images = []; }

  const modal = new bootstrap.Modal(document.getElementById('projectModal'));
  const titleEl = document.getElementById('projectModalTitle');
  const inner = document.getElementById('projectCarouselInnerItems');
  const desc = document.getElementById('projectImageDesc');

  titleEl.textContent = title;
  inner.innerHTML = '';
  desc.textContent = '';

  images.forEach((it, idx) => {
    const active = idx===0 ? ' active' : '';
    const item = document.createElement('div');
    item.className = 'carousel-item'+active;
    item.innerHTML = `<img src="${it.src}" class="d-block w-100" alt="${it.desc||''}" style="max-height:600px;object-fit:contain">`;
    inner.appendChild(item);
  });

  if(images.length > 0) {
    // show first description
    desc.textContent = images[0].desc || '';
    // hook to update description on slide
    const carousel = document.getElementById('projectCarouselInner');
    // ensure carousel inner id present; if not, we created one above by id usage
    // Use bootstrap's events:
    const carouselEl = document.querySelector('#projectCarouselInner .carousel');
    // Instead attach event on inner container via bootstrap carousel instance after shown
    setTimeout(()=> {
      const carouselInstance = bootstrap.Carousel.getOrCreateInstance(document.querySelector('#projectCarouselInner'));
      document.querySelector('#projectCarouselInner').addEventListener('slid.bs.carousel', function(ev){
        const activeIdx = ev.to;
        desc.textContent = (images[activeIdx] && images[activeIdx].desc) ? images[activeIdx].desc : '';
      });
    }, 200);
  }

  modal.show();
});

// small helper: pause skill-track on hover (already in CSS) - keep JS minimal

// set year in footer
document.addEventListener('DOMContentLoaded', ()=> {
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();
});
 // Intro Fade-In and Typing
  const introText = document.getElementById("intro-text");
  const introSub = document.getElementById("intro-subtext");
  const introOverlay = document.getElementById("intro-overlay");

  // Fade in main heading
  introText.style.transition = "opacity 0.5s";
  introText.style.opacity = 1;

  // Typing effect for subtext
  const subText = "VB.NET & ASP.NET Core Developer | Software Engineer";
  let j = 0;
  setTimeout(() => {
    introSub.style.transition = "opacity 0.5s";
    introSub.style.opacity = 1;

    function typeIntro() {
      if(j < subText.length){
        introSub.textContent += subText.charAt(j);
        j++;
        setTimeout(typeIntro, 30);
      } else {
        // After typing, hide overlay
        setTimeout(() => { introOverlay.style.display = "none"; }, 500);
      }
    }
    typeIntro();
  }, 500);
