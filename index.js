// to rotate the element of watch around the circle in area of 360 deg...............

// let span = document.querySelectorAll("span");
// let aaa = Array.from(span);

// aaa.forEach((element, index) => {
// 	element.style.rotate = index*30+30+"deg";
// });

// ///////////////////////////////////////////////////

let hr = document.querySelector(".hour");
let mn = document.querySelector(".minute");
let sc = document.querySelector(".second");

let am = document.querySelector(".am-pm");

function timer() {
	let date = new Date();
	let hour = date.getHours();
	let minute = date.getMinutes();
	let seconds = date.getSeconds();

	let hrot = 30 * hour + minute / 2;
	let mrot = 6 * minute;
	let srot = 6 * seconds;
	hr.style.rotate = hrot + "deg";
	mn.style.rotate = mrot + "deg";
	sc.style.rotate = srot + "deg";

	if (hour == 22 || hour == 23) {
		am.innerHTML = "PM";
	} else if (hour == 24) {
		am.innerHTML = "AM";
	} else if (hour > 12 && hour < 22) {
		am.innerHTML = "PM";
	} else if (hour == 12) {
		am.innerHTML = "PM";
	} else if (hour < 10) {
		am.innerHTML = "AM";
	} else if (hour == 12) {
		am.innerHTML = "AM";
	} else {
		am.innerHTML = "AM";
	}
}
setInterval(timer, 1000);
