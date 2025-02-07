// menu 
const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');
const navLinks = document.querySelectorAll('.nav-link');

btn.addEventListener('click', ()=>{
    btn.classList.toggle('open');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
});

// nav items active status
document.addEventListener('DOMContentLoaded', function() {
  // Get current page URL
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  // Remove active state from all links
  navLinks.forEach(link => {
      link.setAttribute('data-active', 'false');
      
      // Set active state for current page
      if (link.getAttribute('href') === currentPage) {
          link.setAttribute('data-active', 'true');
      }
  });
});

// navbar scroll blur
window.addEventListener("scroll", function () {
    const nav = document.getElementById("navbar");
    if (window.scrollY > 50) {
      // When scrolled, add blur background
      nav.classList.add("backdrop-blur-md", "bg-white/30");
    } else {
      // revert to the transparent background
      nav.classList.remove("backdrop-blur-md", "bg-white/30");
    }
});

// footer auto year
document.getElementById("autoyear").innerHTML = new Date().getUTCFullYear();

// dark and light mode 
const gethtml = document.documentElement,
    themeToggleBtn = document.getElementById('darkModeToggle'),
    darkModeIcon = document.getElementById('theme-toggle-dark-icon'),
    lightModeIcon = document.getElementById('theme-toggle-light-icon');
       
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkModeIcon.classList.remove('hidden');
  lightModeIcon.classList.add('hidden');
} else {
  lightModeIcon.classList.remove('hidden');
  darkModeIcon.classList.add('hidden');
}

themeToggleBtn.addEventListener('click', function() {

  // toggle icons inside button
  darkModeIcon.classList.toggle('hidden');
  lightModeIcon.classList.toggle('hidden');

  // if set via local storage previously
  if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light') {
          document.documentElement.classList.add('dark');
          localStorage.setItem('color-theme', 'dark');
      } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('color-theme', 'light');
      }

  // if NOT set via local storage previously
  } else {
      if (document.documentElement.classList.contains('dark')) {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('color-theme', 'light');
      } else {
          document.documentElement.classList.add('dark');
          localStorage.setItem('color-theme', 'dark');
      }
  }
  
});