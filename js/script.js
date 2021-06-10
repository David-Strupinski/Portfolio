// jQuery
$('document').r

// vanilla js
var submitBtn = document.querySelector('#submit');

submitBtn.onclick = function () {
	// get and store values
	var name = document.querySelector('#name')
	var email = document.querySelector('#email')
	var message = document.querySelector('#message')
	var contactInfo = {
		"name": name.value,
		"email": email.value,
		"message": message.value
	}
	var contactInfoString = JSON.stringify(contactInfo);
	localStorage.setItem('contactInfo', contactInfoString);

	// clear inputs
	name.value = "";
	email.value = "";
	message.value = "";

	// retrieve contact info object
	// console.log(JSON.parse(localStorage.getItem('contactInfo')));
}

// pull json personal data from bin site
const url = 'https://api.jsonbin.io/b/60bdd1444d024768b8f07f26';
fetch(url).then(response => {
	return response.json();
}).then(data => {
	console.log(data);
}).catch(error => {
	console.log(error);
})

$('h1[name="title"]');
$('h1[name="title"]').on('click', darkModeToggle);
// $('#message').on('keypress', toggleOnEnter());

function darkModeToggle() {
	$('html').toggleClass('darklight');
	$('h1[name="title"]').css('color', 'white');
	$('small[name="subtitle"]').css('color', 'white');
}

function toggleOnEnter(event) {
	if (event.keyCode === 13) {
		darkModeToggle();
	}
}

// fun: setting first image to a random image
/*
var imgs = document.querySelectorAll('img');
var imgSrcs = [];
for (let i = 0; i < imgs.length; i++) {
	imgSrcs[i] = imgs[i].getAttribute('src');
}
// console.log(imgSrcs);
var rand = Math.floor(Math.random() * imgSrcs.length);
// console.log(rand);
var img = document.querySelector('img');
img.setAttribute('src', imgSrcs[rand]);
*/

