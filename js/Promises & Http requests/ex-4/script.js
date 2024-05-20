const usersURL = 'https://jsonplaceholder.typicode.com/users';
const postsURL = 'https://jsonplaceholder.typicode.com/posts';

const usersPromise = fetch(usersURL)
.then(response => {
  return response.json();
})
const postsPromise = fetch(postsURL)
.then(response => {
  return response.json();
})
Promise.all([usersPromise, postsPromise])
 .then(([users, posts]) => {
  const usersDiv = document.getElementById('users')
  users.forEach(user => {
    const userDiv = document.createElement('div');
    userDiv.classList.add('item');
    userDiv.innerHTML = `<strong>${user.name}</strong><br>${user.email}`;
    usersDiv.appendChild(userDiv);
  });
  const postsDiv = document.getElementById('posts')
  posts.forEach(post => {
    const postDiv = document.createElement('div');
    postDiv.classList.add('item');
    postDiv.innerHTML = `<strong>${post.title}</strong><br>${post.body}`;
    postsDiv.appendChild(postDiv);
  });
 })
.catch(error => {
  const errorDiv = document.getElementById('error');
  errorDiv.textContent = `An error: ${error}`
})