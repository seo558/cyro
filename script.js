function showSection(sectionId) {
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => {
    section.classList.remove('visible');
    section.classList.add('hidden');
  });

  const selected = document.getElementById(sectionId);
  selected.classList.remove('hidden');
  selected.classList.add('visible');
}
