const usersURL = 'https://jsonplaceholder.typicode.com/users';
const usersDiv = document.getElementById('users')
const loadingIndicator = document.getElementById('loading-indicator');

async function fetchUsers() {
  loadingIndicator.style.display = 'block';
  try {
    const response = await fetch(usersURL)
    const users = await response.json();
    users.forEach(user => {
      const userDiv = document.createElement('div');
      userDiv.classList.add('item');
      userDiv.innerHTML = `<strong>${user.name}</strong><br>${user.email}`;
      usersDiv.appendChild(userDiv);
    })
  }
  catch(err) {
    usersDiv.textContent = (`An error occurred: ${err.message}. Please try again later. `)
  }
  finally {
    loadingIndicator.style.display = 'none';
  }
  }

fetchUsers();