const usersDiv = document.getElementById('users')
const errorDiv = document.getElementById('error')
const baseURL = 'https://jsonplaceholder.typicode.com';

async function fetchUsers() {
  try {
    const response = await fetch(baseURL + '/users')
    if (!response.ok) {
      throw new Error('Response not OK')
    }
    const users = await response.json()
    users.forEach(user => {
      const userDiv = document.createElement("div");
      userDiv.classList.add('user')
      userDiv.innerHTML = `<h2>${user.name}</h2><p><strong>Email:
      </strong>${user.email}</p>`;
      usersDiv.append(userDiv);
      errorDiv.classList.add('hide')

    });
  }
  catch(err) {
    errorDiv.textContent = (`An error occurred: ${err.message}. Please try again later. `)
  }
}

fetchUsers()