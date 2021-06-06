var submitBtn = document.querySelector('#submit');

submitBtn.onclick = function () {
	// console.log([document.querySelector('#name').value, document.querySelector('#email').value, document.querySelector('#message').value]);
	document.querySelector('#name').value = "";
	document.querySelector('#email').value = "";
	document.querySelector('#message').value = "";
}

var html = document.querySelector('html');
var title = document.querySelector('h1[name="title"]'); // add params to tag to get specific one
var subtitle = document.querySelector('small');
var messageBox = document.querySelector('#message');

title.addEventListener('click', darkModeToggle);
// messageBox.addEventListener('keypress', darkModeToggleEnter);

function darkModeToggle() {
	html.classList.toggle('darklight');
	title.style.color = 'white'; // could use "this" instead of "title" here
	subtitle.style.color = 'white';
}

// var titleNames = document.querySelectorAll('.name');
// for (let i = 0; i < titleNames.length; i++) {
// 	titleNames[i].addEventListener('mouseover', function (event) {
// 		// titleNames[i].classList.add('bigimg');
// 		event.target.style.color = 'blue';
// 		event.target.classList.toggle('bigimg');
// 	})
// 	titleNames[i].addEventListener('mouseout', function (event) {
// 		// titleNames[i].classList.remove('bigimg');
// 		event.target.style.color = 'white';
// 		event.target.classList.toggle('bigimg');
// 	})
// }

// function darkModeToggleEnter(event) {
// 	if (event.keyCode === 13) {
// 		darkModeToggle();
// 	}
// }

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
