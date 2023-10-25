document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.getElementById('navLinks');
  const burgerIcon = document.querySelector('.fa-bars');
  const closeIcon = document.querySelector('.fa-times');

  function showMenu() {
    navLinks.style.right = '0';
    burgerIcon.style.display = 'none';
    closeIcon.style.display = 'block';
  }

  function hideMenu() {
    navLinks.style.right = '-200px';
    burgerIcon.style.display = 'block';
    closeIcon.style.display = 'none';
  }

  burgerIcon.addEventListener('click', showMenu);
  closeIcon.addEventListener('click', hideMenu);

  document.querySelectorAll('.nav-links ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      window.scrollTo({
        top: targetElement.offsetTop - 50,
        behavior: 'smooth'
      });

      hideMenu();
    });
  });

  const backToTopBtn = document.getElementById('backToTopBtn');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
