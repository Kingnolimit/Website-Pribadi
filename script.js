const header = document.getElementById('header');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const themeToggle = document.getElementById('themeToggle');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
});

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  menuToggle.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.textContent = '☰';
  });
});

const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark');
  themeToggle.textContent = '☀';
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const dark = document.body.classList.contains('dark');
  themeToggle.textContent = dark ? '☀' : '☾';
  localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light');
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();
