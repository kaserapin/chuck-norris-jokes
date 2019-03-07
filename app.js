const buttonMultiple = document.querySelector('#button-multiple');
const buttonSingle = document.querySelector('#button-single');

buttonMultiple.addEventListener('click', showJokes);
buttonSingle.addEventListener('click', showSingleJoke);

function showJokes(e) {
  const number = document.querySelector('#number').value;

  const xhr = new XMLHttpRequest();

  if (number === '') {
    alert('Enter a number of jokes');
  } else {
    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  }


  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      let output = '';

      if (response.type === 'success') {
        response.value.forEach(function (joke) {
          output += `<li class="list-group-item bg-dark text-white rounded-0 mb-2">${joke.joke}</li>`
        });
      } else {
        output += '<li class="list-group-item rounded-0>Something went wrong</li>';
      }
      const jokes = document.getElementById('jokes');
      jokes.innerHTML = output;
    }

  }

  xhr.send();

  e.preventDefault();
}
function showSingleJoke(e) {

  const xhr = new XMLHttpRequest();


  xhr.open('GET', 'http://api.icndb.com/jokes/random', true);


  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      let output = '';

      if (response.type === 'success') {

        output += `<li class="list-group-item bg-dark text-white rounded-0 mb-2">${response.value.joke}</li>`;
      } else {
        output += '<li class="list-group-item rounded-0>Something went wrong</li>';
      }
      const jokes = document.getElementById('jokes');
      jokes.innerHTML = output;
    }

  }

  xhr.send();

  e.preventDefault();
} 