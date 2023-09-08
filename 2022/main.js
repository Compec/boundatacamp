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

let tempanswerid='0x'
let tempdivid='1x'
let tempbtnid='2x'
function toggleQuestion(answerid,divid,btnid){
  const answerblock=document.getElementById(answerid);
  if(!(answerid==tempanswerid && divid==tempdivid && btnid==tempbtnid)) {
  document.getElementById(tempanswerid).classList.toggle("isOpen");
  document.getElementById(tempbtnid).classList.toggle("isOpen");
  document.getElementById(tempdivid).classList.toggle("isOpen");
  document.getElementById(divid).classList.toggle("isOpen");
  document.getElementById(btnid).classList.toggle("isOpen");
  document.getElementById(answerid).classList.toggle("isOpen");
  tempanswerid = answerid;
  tempbtnid = btnid;
  tempdivid = divid;
  }
  else if (answerid==tempanswerid && divid==tempdivid && btnid==tempbtnid){
    tempanswerid='0x'
    tempdivid='1x'
    tempbtnid='2x'
    document.getElementById(divid).classList.toggle("isOpen");
    document.getElementById(btnid).classList.toggle("isOpen");
    document.getElementById(answerid).classList.toggle("isOpen");
  }
  /* 
  if(answerblock.style.display=="block"){
    setTimeout(function(){
    answerblock.style.display="none"
    },00)
  }
  else{
    answerblock.style.display="none"
  }
  */
}