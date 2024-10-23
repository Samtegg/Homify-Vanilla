const serverUrl = 'http://localhost:3000'

const registerForm = document.getElementById('registerForm')
if(registerForm){
	registerForm.addEventListener('submit', async function(e) {
		e.preventDefault();
		const name = document.getElementById('name').value;
		const email = document.getElementById('email').value;
		const phone = document.getElementById('phone').value;
		const password = document.getElementById('password').value;
		const confirmPassword = document.getElementById('confirmPassword').value;
		const role = document.getElementById('role').value;
		const registerBtn = document.getElementById('register-btn');
	
		if(name !== '' && email !== '' && password !== '' && confirmPassword !== ''  && phone !== ''){
			if (password === confirmPassword) {
				try {
					registerBtn.disable = true;
					registerBtn.innerHTML = 'Loading...'
					const newData = {
						name: name,
						email: email,
						phone: phone,
						password: password,
						role: role,
						
					};
					const response = await fetch(serverUrl+'/api/register', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(newData)
					})
					const data = await response.json();
		
					if(!response.ok){
						throw new Error (`HTTP error! Status: ${response.status}`)
					}
	
					if(data.message == 'Email exist'){
						registerBtn.disable = false;
						registerBtn.innerHTML = 'Register'
						swal('Error', 'Email Already exist', 'error');
					}
					if(data.message == 'Success'){
						registerBtn.disable = false;
						registerBtn.innerHTML = 'Register';
						registerForm.reset();
						swal('Success', 'Success', 'success');
					}
					
				} catch (error) {
					registerBtn.disable = false;
					registerBtn.innerHTML = 'Register'
					console.error(error);
					registerForm.reset();
					swal('Error', error.message, 'error');
				}
			} else {
				swal('Error', 'Your password and confirm password are not the same', 'error');
			}

		} else{
			swal('Error', 'Please fill all the inputs', 'error');
		}
	
		
	  });
}


 