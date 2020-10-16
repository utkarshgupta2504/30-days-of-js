let checkboxes = document.querySelectorAll("input[type='checkbox']");

let shiftHeld = false;

var lastChecked;

function handleCheck(e) {
	if (shiftHeld && lastChecked && this.checked) {
		let inBetween = false;
		checkboxes.forEach((checkbox) => {
			if (checkbox === this || checkbox === lastChecked) {
				inBetween = !inBetween;
			}

			if (inBetween) {
				checkbox.checked = true;
			}
		});
	}

	lastChecked = this.checked ? this : null;
}

checkboxes.forEach((checkbox) =>
	checkbox.addEventListener("click", handleCheck)
);

document.addEventListener("keydown", (e) => {
	if (e.key === "Shift") {
		shiftHeld = true;
	}
});

document.addEventListener("keyup", (e) => {
	if (e.key === "Shift") {
		shiftHeld = false;
	}
});
