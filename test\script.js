function showPage(pageId) {
  document.querySelectorAll('.page').forEach(section => {
    section.classList.remove('active');
  });
  document.getElementById(pageId).classList.add('active');
}

document.addEventListener("DOMContentLoaded", () => {
  showPage('home');
});