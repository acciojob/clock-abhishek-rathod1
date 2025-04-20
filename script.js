//your JS code here. If required.

const dateContainer = document.getElementById("timer")

// function renderDate() {
// 	let date = new Date()
// 	// let amPm = if(date.Hours)
// 	dateContainer.innerHTML = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
// }

setInterval(
	function () {
// renderDate();
		let currentDate = new Date();

		dateContainer.innerHTML = currentDate.toLocaleString();
		
	},1000
)


