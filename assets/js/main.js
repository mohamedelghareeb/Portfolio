 // Auto-close mobile menu after clicking a link
  document.querySelectorAll('.navbar .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const menu = document.getElementById('menu');
      const bsCollapse = bootstrap.Collapse.getInstance(menu);
      if (window.innerWidth < 992 && bsCollapse) bsCollapse.hide();
    });
  });

  // Smooth active state fallback for nav links on scroll
  const sections = [...document.querySelectorAll('section, header')];
  const navLinks = [...document.querySelectorAll('.nav-link')];
  const setActive = () => {
    const scrollPos = window.scrollY + 120;
    let current = 'home';
    sections.forEach(sec => {
      if (sec.offsetTop <= scrollPos) current = sec.id;
    });
    navLinks.forEach(a => {
      const target = a.getAttribute('href').replace('#', '');
      a.classList.toggle('active', target === current);
    });
  };
  window.addEventListener('scroll', setActive);
  window.addEventListener('load', setActive);