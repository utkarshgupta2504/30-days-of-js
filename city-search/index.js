const url =
	"https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

fetch(url)
	.then((res) => res.json())
	.then((res) => {
		cities.push(...res);
		console.log(cities);
	});

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function filterCities(cityName, cities) {
	return cities.filter((city) => {
		const regex = new RegExp(cityName, "gi");

		return city.city.match(regex) || city.state.match(regex);
	});
}

function displayCities() {
	const matchedCities = filterCities(this.value, cities);

	const html = matchedCities
		.map((city) => {
			const regex = new RegExp(this.value, "gi");

			const cityName = city.city.replace(
				regex,
				`<span class="hl">${this.value}</span>`
			);
			const stateName = city.state.replace(
				regex,
				`<span class="hl">${this.value}</span>`
			);

			return `
        <li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">${numberWithCommas(city.population)}</span>
        </li>
        `;
		})
		.join("");

	suggestions.innerHTML = html;
}

searchInput.addEventListener("change", displayCities);
searchInput.addEventListener("keyup", displayCities);
