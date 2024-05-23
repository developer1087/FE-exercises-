const usersURL = 'https://jsonplaceholder.typicode.com/users';
const postsURL = 'https://jsonplaceholder.typicode.com/posts';
const usersDiv = document.getElementById('users')
const postsDiv = document.getElementById('posts')
const errorDiv = document.getElementById('error')

async function fetchData(url) {
  const response = await fetch(url)
  return await response.json()
}

async function displayData() {
  try {
    const [users, posts] = await Promise.all([fetchData(usersURL),
      fetchData(postsURL)]);
      users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.classList.add('item');
        userDiv.innerHTML = `<strong>${user.name}</strong><br>${user.email}`;
        usersDiv.appendChild(userDiv);
      });
      posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('item');
        postDiv.innerHTML = `<strong>${post.title}</strong><br>${post.body}`;
        postsDiv.appendChild(postDiv);
      });
  }
  catch(err) {
    errorDiv.textContent = (`An error occurred: ${err.message}. Please try again later. `)
  }
}

displayData();