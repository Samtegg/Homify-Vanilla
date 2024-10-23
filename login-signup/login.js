const serverUrl = 'http://localhost:3000'

const signinForm = document.getElementById('signinForm')
if(signinForm){
	signinForm.addEventListener('submit', async function(e) {
		e.preventDefault();
		const email = document.getElementById('email').value;
		const password = document.getElementById('password').value;
		const registerBtn = document.getElementById('sign-in');
	
		if(name !== '' && email !== '' && password !== '' && confirmPassword !== ''  && phone !== ''){
			if (password === confirmPassword) {
				try {
					registerBtn.disable = true;
					registerBtn.innerHTML = 'Loading...'
					const newData = {

						email: email,
						password: password
						
					};
					const response = await fetch(serverUrl+'/api/signin', {
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
	
					
					if(data.message == 'Success'){
						registerBtn.disable = false;
						registerBtn.innerHTML = 'Sign In';
						registerForm.reset();
						swal('Success', 'Success', 'success');
					}
					
				} catch (error) {
					registerBtn.disable = false;
					registerBtn.innerHTML = 'Sign In'
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


 