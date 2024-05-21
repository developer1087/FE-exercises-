const usersURL = 'https://jsonplaceholder.typicode.com/users';

const loadingIndicator = document.getElementById('loading-indicator');
loadingIndicator.style.display = 'block';
fetch(usersURL)
.then(response => response.json()
)
.then(users => {
  setTimeout(() => {
  const usersDiv = document.getElementById('users')
  users.forEach(user => {
    const userDiv = document.createElement('div');
    userDiv.classList.add('item');
    userDiv.innerHTML = `<strong>${user.name}</strong><br>${user.email}`;
    usersDiv.appendChild(userDiv);
  })
    loadingIndicator.style.display = 'none'
  }, 2000)})
  .catch(error => {
    loadingIndicator.textContent = `An error: ${error}`
  })