const baseURL = 'https://jsonplaceholder.typicode.com';
const usersDiv = document.getElementById('users')


async function fetchUsers() {
  const response = await fetch(baseURL + '/users')
  return await response.json();
}
async function fetchPosts(userId) {
  const response = await fetch(`${baseURL}/posts?userId=${userId}`)
  return await response.json();
}

async function displayUserAndPosts(userId) {
  try {
    // if (!response.ok) {
    //   throw new Error('Response is not Ok')
    // }
    let users = await fetchUsers()
    for (const user of users) {
      const userDiv = document.createElement("div");
      userDiv.innerHTML = `<h2>${user.name}</h2><p><strong>Email:
      </strong>${user.email}</p>`;
      userDiv.classList.add('user')
      usersDiv.appendChild(userDiv);
      try {
        // if (!response.ok) {
        //   throw new Error('Response is not Ok')
        // }
        let posts = await fetchPosts(userId)
        for (const post of posts) {
          const postDiv = document.createElement("div");
          postDiv.innerHTML = `<h2>${post.title}</h2><p><strong>Email:
          </strong>${post.body}</p>`;
          postDiv.classList.add('post')
          userDiv.appendChild(postDiv);
          
        }
      }
      catch(err) {
        postDiv.textContent = (`An error occurred: ${err.message}. Please try again later. `)
      }
    }
  }
  catch(err) {
    usersDiv.textContent = (`An error occurred: ${err.message}. Please try again later. `)
  }
}

displayUserAndPosts(1)