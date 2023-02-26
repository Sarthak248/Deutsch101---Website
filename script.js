// const form = document.getElementById('contactForm');

// form.addEventListener('submit', function(event) {
// 	event.preventDefault();
// 	const formData = new FormData(form);
// 	const xhr = new XMLHttpRequest();
// 	xhr.open('POST', 'send_email.php', true);
// 	xhr.onload = function() {
// 		if (xhr.status === 200) {
// 			form.reset();
// 			alert('Thank you for your message! We will get back to you soon.');
// 		} else {
// 			alert('An error occurred. Please try again later.');
// 		}
// 	};
// 	xhr.send(formData);
// });


// // Get the reviews div and the review form
// const reviewsDiv = document.getElementById('reviews');
// const reviewForm = document.getElementById('review-form');

// // Define a function to add a new review to the page
// function addReview(name, rating, review) {
//   // Create a new div to hold the review
//   const reviewDiv = document.createElement('div');
//   reviewDiv.classList.add('review');
  
//   // Add the name, rating, and review to the div
//   const nameHeading = document.createElement('h3');
//   nameHeading.textContent = name;
//   reviewDiv.appendChild(nameHeading);
  
//   const ratingParagraph = document.createElement('p');
//   ratingParagraph.textContent = `Rating: ${rating}`;
//   reviewDiv.appendChild(ratingParagraph);
  
//   const reviewParagraph = document.createElement('p');
//   reviewParagraph.textContent = review;
//   reviewDiv.appendChild(reviewParagraph);
  
//   // Add the review div to the reviews div
//   reviewsDiv.appendChild(reviewDiv);
// }

// // Define a function to handle the form submission
// function handleFormSubmit(event) {
//   // Prevent the form from submitting normally
//   event.preventDefault();
  
//   // Get the values from the form fields
//   const name = event.target.elements.name.value;
//   const rating = event.target.elements.rating.value;
//   const review = event.target.elements.review.value;
  
//   // Add the new review to the page
//   addReview(name, rating, review);
  
//   // Reset the form fields
//   event.target.reset();
// }

// // Attach the form submission handler to the review form
// reviewForm.addEventListener('submit', handleFormSubmit);


// // *************REGISTER**

// const registrationForm = document.getElementById('registration-form');
// const loginForm = document.getElementById('login-form');
// const paymentForm = document.getElementById('payment-form');
// const registerBtn = document.getElementById('register-btn');
// const loginBtn = document.getElementById('login-btn');
// const payBtn = document.getElementById('pay-btn');
// const nameInput = document.getElementById('name');
// const emailInput = document.getElementById('email');
// const passwordInput = document.getElementById('password');
// const courseSelect = document.getElementById('course');
// const loginEmailInput = document.getElementById('login-email');
// const loginPasswordInput = document.getElementById('login-password');
// const cardNumberInput = document.getElementById('card-number');
// const expiryDateInput = document.getElementById('expiry-date');
// const cvvInput = document.getElementById('cvv');

// let user = null;
// let selectedCourse = null;

// // Register event listener for registration form submit
// registrationForm.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const name = nameInput.value;
//   const email = emailInput.value;
//   const password = passwordInput.value;
//   selectedCourse = courseSelect.value;
//   // Register user
//   user = { name, email, password };
//   // Hide registration form and show login form
//   registrationForm.style.display = 'none';
//   loginForm.style.display = 'block';
// });

// // Register event listener for login form submit
// loginForm.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const email = loginEmailInput.value;
//   const password = loginPasswordInput.value;
//   // Check if email and password match the registered user
//   if (user && user.email === email && user.password === password) {
//     // Hide login form and show payment form
//     loginForm.style.display = 'none';
//     paymentForm.style.display = 'block';
//   } else {
//     // Show error message if login is invalid
//     const errorMessage = document.createElement('p');
//     errorMessage.classList.add('payment-error');
//     errorMessage.textContent = 'Invalid email or password.';
//     loginForm.appendChild(errorMessage);
//   }
// });

// // Register event listener for payment form submit
// paymentForm.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const cardNumber = cardNumberInput.value;
//   const expiryDate = expiryDateInput.value;
//   const cvv = cvvInput.value;
//   // Validate card number, expiry date, and cvv
//   // Process payment if valid
//   // Show success message
//   const successMessage = document.createElement('p');
//   successMessage.classList.add('success-message');
//   successMessage.textContent = `You have successfully registered for ${selectedCourse}.`;
//   paymentForm.appendChild(successMessage);
// });

// // Register event listener for login button click
// loginBtn.addEventListener('click', (event) => {
//   event.preventDefault();
//   // Hide registration form and show login form
//   registrationForm.style.display = 'none';
//   loginForm.style.display = 'block';
// });

// // Register event listener for pay button click
// payBtn.addEventListener('click', (event) => {
//   event.preventDefault();
//   // Hide login form and show payment form
//   loginForm.style.display = 'none';
//   paymentForm.style.display = 'block';
// });


// *************GOOGLE

// function onSignIn(googleUser) {
//   var profile = googleUser.getBasicProfile();
//   // $("#name").text(profile.getName());  
//   $(".maintext").css("display","block");
//   $(".g_id_signin").css("display","none");
//   // console.log(googleUser);
//   console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
//   console.log('Name: ' + profile.getName());
//   console.log('Image URL: ' + profile.getImageUrl());
//   console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

// }


function handleCredentialResponse(response) {
 // decodeJwtResponse() is a custom function defined by you
 // to decode the credential response.
 const responsePayload = decodeJwtResponse(response.credential);

 console.log("ID: " + responsePayload.sub);
 console.log('Full Name: ' + responsePayload.name);
 console.log('Given Name: ' + responsePayload.given_name);
 console.log('Family Name: ' + responsePayload.family_name);
 console.log("Image URL: " + responsePayload.picture);
 console.log("Email: " + responsePayload.email);

 $(".maintext").css("display","block");
 $(".g_id_signin").css("display","none");
}

function onLoad() {
      gapi.load('auth2', function() {
        gapi.auth2.init();
      });
}
function signOut(){
	var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
    	// console.log('User signed out.');
    	$("g-signin2").css("display","block");
    	$(".data").css("display","none");
    });
}

// window.gapi.client
//         .init({
//           clientId:'247825906165-pj4h7o9d997mplbvouri0b5d7m12aeh9.apps.googleusercontent.com',
//           scope: "email",
//           plugin_name:'Deutsch101'
//         })
