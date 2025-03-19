const toggleSwitch = document.getElementById('theme-toggle');

var mode = sessionStorage.getItem("theme") ?? "dark";

if (!document.body.classList.contains('dark')) {
  document.body.classList.add('dark-mode');
  
  document.body.classList.add('dark');
}

toggleSwitch.checked = mode === "dark";

if (toggleSwitch.checked) {
  if(document.body.classList.contains('light'))
      document.body.classList.remove('light')
  document.body.classList.add('dark');
  sessionStorage.setItem('theme', 'dark');
} else {
  if(document.body.classList.contains('dark'))
      document.body.classList.remove('dark')
  //document.body.classList.remove('dark-mode');
  document.body.classList.add('light');
  sessionStorage.setItem('theme', 'light');
}

toggleSwitch.addEventListener('change', () => {
  if (toggleSwitch.checked) {
    if(document.body.classList.contains('light'))
        document.body.classList.remove('light')
    document.body.classList.add('dark');
    sessionStorage.setItem('theme', 'dark');
  } else {
    if(document.body.classList.contains('dark'))
        document.body.classList.remove('dark')
    //document.body.classList.remove('dark-mode');
    document.body.classList.add('light');
    sessionStorage.setItem('theme', 'light');
  }
});