
const baseURL = 'https://jsonplaceholder.typicode.com';

fetch(baseURL + '/users')
      .then(response => {
        if (!response.ok) {
          throw Error('Response is not OK')
        } else {
          return response.json();
        }
      })
      // .then(response => response.json())
      .then(json => json.forEach(user => {
        const usersDiv = document.getElementById('users');
        const userDiv = document.createElement("div");
        userDiv.classList.add('user')
        userDiv.innerHTML = `
        <h2>${user.name}</h2>
        <p><strong>Email:</strong> ${user.email}</p>
        <div class="posts"></div>`;
        usersDiv.append(userDiv);
        fetch(baseURL + `/posts?userId=${user.id}`)
        .then(response => response.json())
        .then(data => {
          const postsContainer = userDiv.querySelector('.posts')
          postsContainer.innerHTML = `<h3>Posts:</h3>`;
          
          data.forEach(post => {
            const postDiv = document.createElement('div')
            postDiv.classList.add("post")
            postDiv.innerHTML = `<strong>${post.title}</strong>
            <br>${post.body}`;
            // title.textContent = post.title
            postsContainer.appendChild(postDiv)
          })
        })
        .catch(error => {
          const userDiv = document.querySelector('.posts')
          userDiv.innerHTML = `${error}`
        })
      }))
      .catch(error => {
        console.log(error);
      })


