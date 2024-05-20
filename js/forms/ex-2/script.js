const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;


const showError = (inputID, errMsg) => {
  document.getElementById(inputID + 'Error').textContent = errMsg;
  document.getElementById(inputID).classList.add('error');
}

document.querySelector('#userForm').addEventListener('submit', e => {
  e.preventDefault();
  let isValid = true;

  if (e.target.username.value.length < 3) {
    showError('username', "Username must be at least 3 characters.");
    isValid = false;
  }

  if (!e.target.email.value.match(emailRegex)) {
    showError('email', "Email is not valid.");
    isValid = false;
  }

  if (!passRegex.test(e.target.password.value)) {
    showError('password', "Password must contain at least 8 characters, contain lower and upper case letters, numbers and special characters.");
    isValid = false;
  }

  if (isValid) {
    alert("Submitted successfully!")
  }
  const arr = Array.from(document.querySelectorAll('input'))
  
  
})

