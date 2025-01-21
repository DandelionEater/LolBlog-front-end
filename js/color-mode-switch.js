const toggleSwitch = document.getElementById('theme-toggle');

if (!document.body.classList.contains('dark')) {
  document.body.classList.add('dark-mode');
  
  document.body.classList.add('dark');
  toggleSwitch.checked = true;
}

toggleSwitch.addEventListener('change', () => {
  if (toggleSwitch.checked) {
    if(document.body.classList.contains('light'))
        document.body.classList.remove('light')
    document.body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    if(document.body.classList.contains('dark'))
        document.body.classList.remove('dark')
    //document.body.classList.remove('dark-mode');
    document.body.classList.add('light');
    localStorage.setItem('theme', 'light');
  }
});