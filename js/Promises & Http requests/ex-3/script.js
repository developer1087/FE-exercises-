const usersDiv = document.getElementById('users')
const errorDiv = document.getElementById('error')

const baseURL = 'https://jsonplaceholder.typicode.com';

fetch(baseURL + '/users')
.then(response => {
  if (!response.ok) {
    throw Error('Response is not OK')
  } else {
    return response.json();
  }
})
.then(data => {
  data.forEach(user => {
    const userDiv = document.createElement("div");
    userDiv.classList.add('user')
    userDiv.innerHTML = `<h2>${user.name}</h2><p><strong>Email:
</strong>${user.email}</p>`;
usersDiv.append(userDiv);
  });
})
.catch(error => {
  errorDiv.textContent = (`An error occurred: ${error.message}. Please try again later. `)
})
