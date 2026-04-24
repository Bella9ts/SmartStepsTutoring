const selectors = document.querySelectorAll('.support-selector');
const panels = document.querySelectorAll('.support-panel');

selectors.forEach((selector) => {
  selector.addEventListener('click', () => {
    selectors.forEach((item) => item.classList.remove('active'));
    panels.forEach((panel) => panel.classList.remove('active'));
    selector.classList.add('active');
    document.getElementById(selector.dataset.panel).classList.add('active');
  });
});

const aimsToggle = document.getElementById('aims-toggle');
const aimsPanel = document.getElementById('aims-panel');
if (aimsToggle && aimsPanel) {
  aimsToggle.addEventListener('click', () => aimsPanel.classList.toggle('open'));
}

const navLinks = document.querySelectorAll('.nav a');
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.forEach((item) => item.classList.remove('active'));
    link.classList.add('active');
  });
});
