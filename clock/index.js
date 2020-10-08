function setDate() {
	var date = new Date();
	var secondsDegree = date.getSeconds() * 6;
	var minutesDegree = date.getMinutes() * 6;
	var hoursDegree = date.getHours() * 30;

	let secondHand = document.querySelector(".second-hand");
	secondHand.style.transform = `rotate(${secondsDegree + 90}deg)`;

	let minuteHand = document.querySelector(".minute-hand");
	minuteHand.style.transform = `rotate(${minutesDegree + 90}deg)`;

	let hourHand = document.querySelector(".hour-hand");
	hourHand.style.transform = `rotate(${hoursDegree + 90}deg)`;
}

setInterval(setDate, 1000);
