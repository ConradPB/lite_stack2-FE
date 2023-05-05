window.addEventListener('load', function() {
    var registrationForm = document.getElementById('registration-form');
    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        var username = document.getElementById('username').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        if (username.trim() === '') {
            document.getElementById('username-error').textContent = 'Please enter a username';
            return; 
        }
        document.getElementById('username-error').textContent = '';

        if (email.trim() === '') {
            document.getElementById('email-error').textContent = 'Please enter an email address';
            return; 
        }
        document.getElementById('email-error').textContent = '';

        if (password.trim() === '') {
            document.getElementById('password-error').textContent = 'Please enter a password';
            return; 
        }
        document.getElementById('password-error').textContent = '';

        // Redirect to login page after successful registration
        window.location.href = 'login.html';
    });
});