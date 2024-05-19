console.log('hi');

const form = document.getElementById('dynamicForm');

function addField() {
  const input = document.createElement('input');
  form.appendChild(input);
}

function submitForm() {
  const inputs = document.querySelectorAll('input');
  let message = '';
  let allFilled = true;
  inputs.forEach((inputField) => {
    if (!inputField.value) {
      allFilled = false;
    }
    message = message + inputField.value;
  });
  if (!allFilled) {
    alert("Filled all fields");
  } else {
    alert(message)
  }
  console.log(message);
}