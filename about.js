console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();

	alert("Form submitted successfully!")
}

function imageAlert(evt) {
	evt.preventDefault();
	alert("You are so good at coding in JavaScript!")
}

const img = document.querySelector('img')


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

img.addEventListener('mouseover', imageAlert)