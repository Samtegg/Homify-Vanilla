document.getElementById('registerForm').addEventListener('submit', function(e) {
	e.preventDefault();
	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;
	const role = document.getElementById('role').value;

	// Here you would typically send this data to your server
	console.log('Registration data:', { name, email, password, role });

	// Simulate successful registration
	alert('Registration successful! Redirecting to dashboard...');
	window.location.href = 'dashboard.html';
  });

  // Social login buttons (these would need to be connected to the respective APIs)
  document.querySelector('.google-btn').addEventListener('click', function() {
	alert('Google registration clicked. Implement Google OAuth here.');
  });

  document.querySelector('.facebook-btn').addEventListener('click', function() {
	alert('Facebook registration clicked. Implement Facebook OAuth here.');
  });