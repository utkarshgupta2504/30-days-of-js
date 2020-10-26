//Getting elements
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

//Functions

function togglePlay() {
	const method = video.paused ? "play" : "pause";
	video[method]();
}

function updateButton() {
	const icon = this.paused ? "►" : "▋▋";
	toggle.textContent = icon;
}

function skip() {
	video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeChange() {
	video[this.name] = this.value;
}

function handleProgress() {
	const percent = (video.currentTime / video.duration) * 100;
	progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
	const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;

	video.currentTime = scrubTime;
}

//Managing Events

video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);

video.addEventListener("timeupdate", handleProgress);

toggle.addEventListener("click", togglePlay);

skipButtons.forEach((skipButton) => skipButton.addEventListener("click", skip));

ranges.forEach((range) => {
	range.addEventListener("click", handleRangeChange);
	range.addEventListener("mouseover", handleRangeChange);
});

let mousedown = false;

progress.addEventListener("click", scrub);
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));

progress.addEventListener("mouseover", (e) => mousedown && scrub(e));