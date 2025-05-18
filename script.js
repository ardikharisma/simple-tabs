const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active state from all
    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));

    // Add to clicked tab and corresponding content
    tab.classList.add('active');
    const tabNumber = tab.getAttribute('data-tab');
    document.getElementById(`tab-${tabNumber}`).classList.add('active');
  });
});
