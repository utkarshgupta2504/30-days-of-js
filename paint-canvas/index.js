var canvas = document.querySelector("#draw");
var ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

ctx.strokeStyle = "hsl(180, 100, 50)";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 0;

let hue = 0;
let lastX = 0;
let lastY = 0;
let increment = 0.1;

let drawing = false;

function draw(e) {
	if (!drawing) return;

	ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
	ctx.beginPath();
	ctx.moveTo(lastX, lastY);
	ctx.lineTo(e.offsetX, e.offsetY);
	ctx.stroke();

	[lastX, lastY] = [e.offsetX, e.offsetY];
	hue = ++hue % 361;

	ctx.lineWidth += increment;

	if (ctx.lineWidth >= 50 || ctx.lineWidth <= 1) {
		increment *= -1;
		console.log(increment);
	}
}

canvas.addEventListener("mousemove", draw);

canvas.addEventListener("mousedown", (e) => {
	drawing = true;
	ctx.lineWidth = 1;
	increment = 0.1;
	lastX = e.offsetX;
	lastY = e.offsetY;
});

canvas.addEventListener("mouseup", () => {
	drawing = false;
});

canvas.addEventListener("mouseout", () => {
	drawing = false;
});
