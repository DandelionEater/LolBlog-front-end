const colorPicker = document.getElementById('color-picker');
const fontSize = document.getElementById('font-size');

let default_color = window.getComputedStyle(document.body).getPropertyValue("--text-color");

colorPicker.value = sessionStorage.getItem("color") ?? default_color;
fontSize.value = sessionStorage.getItem("font-size") ?? fontSize.value;

updateHeadingsColor(colorPicker.value);
updateHeadingsSize(fontSize.value);

colorPicker.addEventListener('change', () => {
    updateHeadingsColor(colorPicker.value);
  });

  fontSize.addEventListener('change', () => {
    updateHeadingsSize(fontSize.value);
  });

function updateHeadingsColor(color) {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    
    sessionStorage.setItem("color", color);

    headings.forEach((heading) => {
      heading.style.color = color;
    });
}

function updateHeadingsSize(fontSize) {
    const headings = document.querySelectorAll('h1');

    sessionStorage.setItem("font-size", fontSize);

    headings.forEach((heading) => {
        heading.style.fontSize = fontSize;
      });
}