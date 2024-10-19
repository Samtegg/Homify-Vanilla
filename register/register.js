document.addEventListener('DOMContentLoaded', function() {
	const signinForm = document.getElementById('signinForm');
	const forgotPasswordLink = document.getElementById('forgotPassword');
	const googleBtn = document.querySelector('.google-btn');
	const facebookBtn = document.querySelector('.facebook-btn');
  
	signinForm.addEventListener('submit', function(e) {
	  e.preventDefault();
	  const email = document.getElementById('email').value;
	  const password = document.getElementById('password').value;
  
	  // Here you would typically send this data to the server for authentication
	  console.log('Sign in data:', { email, password });
  
	  // Simulate successful sign in
	  alert('Sign in successful! Redirecting to dashboard...');
	  window.location.href = 'dashboard.html';
	});
  
	forgotPasswordLink.addEventListener('click', function(e) {
	  e.preventDefault();
	  const email = prompt("Please enter your email address:");
	  if (email) {
		// Here you would typically send a password reset email
		alert(`Password reset link sent to ${email}`);
	  }
	});
  
	googleBtn.addEventListener('click', function() {
	  // Implement Google Sign-In logic here
	  console.log('Google Sign-In clicked');
	  alert('Google Sign-In functionality to be implemented');
	});
  
	facebookBtn.addEventListener('click', function() {
	  // Implement Facebook Sign-In logic here
	  console.log('Facebook Sign-In clicked');
	  alert('Facebook Sign-In functionality to be implemented');
	});
  });