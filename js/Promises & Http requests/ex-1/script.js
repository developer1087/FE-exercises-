
function triggerPromise() {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (document.getElementById('triggerRejection').checked) {
        reject("The Promise has been rejected!")
      } else {
        resolve("The Promise has been resolved!");
      }
    }, 1000);
  });

  myPromise
    .then(message => {
      const messageDiv = document.getElementById('message');
      messageDiv.textContent = message;
      messageDiv.classList.add('resolved');
      messageDiv.classList.remove('rejected');
    })
    .catch(error => {
      const messageDiv = document.getElementById('message');
      messageDiv.textContent = error;
      messageDiv.classList.add('rejected');
      messageDiv.classList.remove('resolved');
    })
}

document.getElementById('triggerPromise').addEventListener('click', triggerPromise)