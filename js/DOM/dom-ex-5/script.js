let chosenColor;

function getColor() {
  chosenColor = document.getElementById('colorPicker').value;
  console.log(chosenColor);
}

function highlight(element) {
  const color = document.getElementById('colorPicker').value;
  element.style.backgroundColor = color;
}
