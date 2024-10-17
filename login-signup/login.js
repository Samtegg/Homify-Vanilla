document.getElementById('signinForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Here you would typically send this data to your server for authentication
  console.log('Sign in data:', { email, password });

  // Simulate successful sign in
  alert('Sign in successful! Redirecting to dashboard...');
  window.location.href = 'dashboard.html';
});

document.getElementById('forgotPassword').addEventListener('click', function(e) {
  e.preventDefault();
  const email = prompt("Please enter your email address:");
  if (email) {
    // Here you would typically send a password reset email
    alert(`Password reset link sent to ${email}`);
  }
});