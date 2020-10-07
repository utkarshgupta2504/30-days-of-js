function Drum(audio) {	//Constructor function, a type of class. Now we can use as new Drum('audio_file.mp3')
	this.audio = audio;
	this.someFunc = function() {	//We can also send a function like this.
		alert('Function called');
	}
}

function makeSound(key) {

	switch (key) {	//Added a switch statement to recognize the innerHTML and then play the sound accordingly.
		case 'w':
			var audio = new Audio('sounds/tom1.mp3');
			audio.play();
			break;

		case 'a':
			var audio = new Audio('sounds/tom2.mp3');
			audio.play();
			break;

		case 's':
			var audio = new Audio('sounds/tom3.mp3');
			audio.play();
			break;

		case 'd':
			var audio = new Audio('sounds/tom4.mp3');
			audio.play();
			break;

		case 'j':
			var audio = new Audio('sounds/snare.mp3');
			audio.play();
			break;

		case 'k':
			var audio = new Audio('sounds/crash.mp3');
			audio.play();
			break;

		case 'l':
			var audio = new Audio('sounds/kick.mp3');
			audio.play();
			break;

		default:
			console.log(key + ' was pressed.');
			break;
	}
}

function buttonAnimation(key) {

	document.querySelector(`.${key}`).classList.add('pressed')

	setTimeout(function() {

		document.querySelector(`.${key}`).classList.remove('pressed')

	}, 100)
}

for(var i = 0; i < document.querySelectorAll('.drum').length; i++) {

	document.querySelectorAll('.drum')[i].addEventListener('click', function () {
		
		// we can use "this" to get the current element, and use it appropriately.

		var buttonKey = this.innerHTML;	//Brings the inner html of button, here the key written.

		makeSound(buttonKey);
		buttonAnimation(buttonKey);
	})
}

document.addEventListener('keydown', event => {

	makeSound(event.key);
	buttonAnimation(event.key);
})