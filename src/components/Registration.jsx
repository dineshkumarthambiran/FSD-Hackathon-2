import React from 'react'
import './Regist.css'


function Registration() {

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const Address = document.getElementById('Address');
const Accnumber = document.getElementById('Accnumber');
const Mobile = document.getElementById('Mobile');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {

	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
    const AddressValue = Address.value.trim();
    const AccnumberValue = Accnumber.value.trim();
    const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
     const MobileValue = Mobile.value.trim();
	
    
    
if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}

    if(AddressValue === '') {
		setErrorFor(Address, 'Address cannot be blank');
	} else {
		setSuccessFor(Address);
	}

    if(AccnumberValue === '') {
		setErrorFor(Accnumber, 'Account number cannot be blank');
	} else {
		setSuccessFor(Accnumber);
	}

    
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}

    if(MobileValue === '') {
		setErrorFor(Mobile, 'Mobile Number cannot be blank');
	} else {
		setSuccessFor(Mobile);
	}
	
}


function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
	
    
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

  return (
    <div>
          <div class="container">
        {/* <!-- <h1>Sign up</h1>  --> */}
	<div class="header" id="regist">
		<h1>Sign Up</h1>
	</div>
	<form id="form" class="form">
		<div class="form-control">
			<label for="username">Username</label>
			<input type="text" placeholder="Enter Username" id="username" />
			<i class="fas fa-check-circle"></i>
			<i class="fas fa-exclamation-circle"></i>
			<small>Error message</small>
		</div>
		<div class="form-control">
			<label for="Email">Email</label>
			<input type="email" placeholder="Enter Email id" id="email" />
			<i class="fas fa-check-circle"></i>
			<i class="fas fa-exclamation-circle"></i>
			<small>Error message</small>
		</div>

        
    <div class="form-control">
			<label for="Address">Address</label>
			<input type="text" placeholder="Enter your Address" id="Address" />
			<i class="fas fa-check-circle"></i>
			<i class="fas fa-exclamation-circle"></i>
			<small>Error message</small>
		</div>
        <div class="form-control">
			<label for="Account Number">Account Number</label>
			<input type="number" placeholder="Enter Account Number" id="Accnumber" />
			<i class="fas fa-check-circle"></i>
			<i class="fas fa-exclamation-circle"></i>
			<small>Error message</small>
		</div>
        <div class="form-control">
			<label for="Mobile Number">Mobile Number</label>
			<input type="number" placeholder="Enter Mobile Number" id="Mobile" />
			<i class="fas fa-check-circle"></i>
			<i class="fas fa-exclamation-circle"></i>
			<small>Error message</small>
		</div>

		<div class="form-control">
			<label for="password">Password</label>
			<input type="password" placeholder="Password" id="password"/>
			<i class="fas fa-check-circle"></i>
			<i class="fas fa-exclamation-circle"></i>
			<small>Error message</small>
		</div>
		<div class="form-control">
			<label for="passcheck">Password check</label>
			<input type="password" placeholder="Password two" id="password2"/>
			<i class="fas fa-check-circle"></i>
			<i class="fas fa-exclamation-circle"></i>
			<small>Error message</small>
		</div>
		<button>Submit</button>
	</form>
</div>
    </div>
  )
}

export default Registration