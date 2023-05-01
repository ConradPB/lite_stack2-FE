document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // validate user input
    // ...
    // if input is valid
    window.location.href = 'homePage.html';
  });