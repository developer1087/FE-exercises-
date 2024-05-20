
function clickHandler() {
  
  addEventListener("submit", (e) => {
    e.preventDefault();
  });
  
  const nickname = document.getElementById('nickname').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  alert("nickname: " + nickname + "\nEmail: " + email + "\nPassword: " +
  password);
}

