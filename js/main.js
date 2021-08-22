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

// Loader
let loader = document.querySelector('#loader');

window.onload = function () {
    setTimeout(function () {
        loader.classList.add('hidden');
    }, 1500)
}



// Navbar =====================================
let navBtn = document.querySelector('.navbar-toggler');
let nav = document.querySelector('.offcanvas');
let navClose = document.querySelector('.close');

navBtn.addEventListener('click', () => {
  nav.classList.add('open');
});

navClose.addEventListener('click', () => {
  nav.classList.remove('open');
})

let links = document.querySelectorAll(".link");
links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove('open');
  });
});

// End Navbar ===============================

// Contact ========================================
let contactBtn = document.querySelector('#contactBtn');
let contact = document.querySelector('aside');
let overlay = document.querySelector('.overlay');
overlay.classList.add('hidden');
contactBtn.addEventListener('click', () => {
  overlay.classList.remove('hidden');
  contact.classList.add('show');
})

overlay.addEventListener('click', () => {
  overlay.classList.add('hidden');
  contact.classList.remove('show');
})

// End Contact =====================================



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

