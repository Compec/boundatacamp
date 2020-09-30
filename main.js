window.addEventListener('load', function() {
  // Menu START
  (function() {
    var hamburger = {
      navToggle: document.querySelector('.nav-toggle'),
      nav: document.querySelector('nav'),

      doToggle: function(e) {
        // e.preventDefault();
        this.navToggle.classList.toggle('expanded');
        this.nav.classList.toggle('expanded');
      }
    };

    hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });
    hamburger.nav.addEventListener('click', function(e) { hamburger.doToggle(e); });
  }());
  // Menu END

  // SmoothScroll START
  var scroll = new SmoothScroll('[data-scroll]', {
    offset: 80
  });
  // SmoothScroll END
});

const nav = document.getElementById('nav');
const navItems = document.querySelectorAll('[data-type="navItem"]');
let isNavOpen = false;

function toggleNav() {
  if (isNavOpen) {
  
    navItems.forEach(a => a.classList.replace('fadeIn', 'fadeOut'));
    nav.classList.remove('sidenav-open');
    isNavOpen = false;
  } else {
  
    nav.classList.add('sidenav-open');
    navItems.forEach(a => a.classList.replace('fadeOut', 'fadeIn'));
    isNavOpen = true;
  }
}


window.addEventListener('click', (e) => {
  if (isNavOpen && e.target !== nav && e.target.id !== 'navToggle'&& e.target.id !== 'intoggle') {
    toggleNav();
    e.stopPropagation();
  
  }
});
