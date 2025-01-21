const colorPicker = document.getElementById('color-picker');
const fontSize = document.getElementById('font-size');

colorPicker.addEventListener('change', () => {
    updateHeadingsColor(colorPicker.value);
  });

  fontSize.addEventListener('change', () => {
    updateHeadingsSize(fontSize.value + "px");
  });

function updateHeadingsColor(color) {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    
    headings.forEach((heading) => {
      heading.style.color = color;
    });
}

function updateHeadingsSize(fontSize) {
    const headings = document.querySelectorAll('h1');

    headings.forEach((heading) => {
        heading.style.fontSize = fontSize;
      });
}