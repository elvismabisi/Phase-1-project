document.addEventListener('DOMContentLoaded', function() {
    // Handle login form submission
    const loginForm = document.querySelector('#loginForm');
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const username = loginForm.querySelector('input[name="username"]').value;
      const password = loginForm.querySelector('input[name="password"]').value;
      // Validate username and password
      if (username === 'admin' && password === 'password') {
        // Show success message
        document.querySelector('#login-success-msg').innerText = 'Login successful';
        document.querySelector('#login-success-msg-holder').style.display = 'block';
        // Hide error message
        document.querySelector('#login-error-msg-holder').style.display = 'none';
      } else {
        // Show error message
        document.querySelector('#login-error-msg').innerText = 'Invalid username or password';
        document.querySelector('#login-error-msg-holder').style.display = 'block';
        // Hide success message
        document.querySelector('#login-success-msg-holder').style.display = 'none';
      }
    });
})