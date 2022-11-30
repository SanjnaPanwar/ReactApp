function totalClick(click) {
	const totalClicks = document.getElementById("totalClicks");
	const sumvalue = parseInt(totalClicks.innerText) + click;
	totalClicks.innerHTML = sumvalue;
}
