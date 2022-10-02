const toggleBtn = document.querySelector ('.m_navbar_btn');
const menu = document.querySelector ('.m_navbar_menu');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
});
