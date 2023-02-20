// Loader ==========================================
let loader = document.querySelector('#loader');

window.onload = function () {
    setTimeout(function () {
        loader.classList.add('d-none');
    }, 1500)
}

// Swiper ========================================
const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
  autoplay: true,
  delay: 5000,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


// Navbar =============================================
let navBtn = document.querySelector('.navbar-toggler');
let nav = document.querySelector('.fixedNav');
let navClose = document.querySelector('.close');

navBtn.addEventListener('click', () => {
  nav.classList.add('open');
  nav.style.zIndex = '20';
});

navClose.addEventListener('click', () => {
  nav.classList.remove('open');
  nav.style.zIndex = '-1';
})

let links = document.querySelectorAll(".nav-link");
links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove('open');
    nav.style.zIndex = '-1';
  });
});

// End Navbar ==========================================

// Animation
gsap.from(".text > *", {
  delay: 1,
  y: 50,
  opacity: 0,
  stagger: {
    each: 0.1,
    grid: "auto",
    ease: "back",
  },
});

gsap.from(".social-links > *", {
  delay: 2,
  y: 30,
  opacity: 0,
  duration: 1,
  stagger: {
    each: 0.2,
    from: "edges",
    ease: "elastic",
  },
});

gsap.from("nav .logo", {
  delay: 1,
  y: -30,
  opacity: 0,
  duration: 1,
  ease: "back",
});

gsap.from("nav button", {
  delay: 1.2,
  y: -30,
  opacity: 0,
  duration: 1,
  ease: "back",
});

gsap.from("img", {
  delay: 2,
  x: 30,
  opacity: 0,
  duration: 1,
  ease: "back",
});

