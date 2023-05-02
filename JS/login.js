document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  // validate user input
  var usernameOrEmail = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  if (usernameOrEmail.trim() === '') {
      document.getElementById('username-error').textContent = 'Please enter a username or email address';
      return;
  }
  document.getElementById('email-error').textContent = '';

  if (password.trim() === '') {
      document.getElementById('password-error').textContent = 'Please enter a password';
      return;
  } else if (password.length < 8) {
      document.getElementById('password-error').textContent = 'Password must be at least 8 characters long';
      return;
  }
  document.getElementById('password-error').textContent = '';

  // if input is valid
  window.location.href = 'homePage.html';
});