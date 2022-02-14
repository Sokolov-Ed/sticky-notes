let close = document.getElementById("close");
let create = document.getElementById("create");
let add = document.getElementById("add");
let text = document.getElementById("text");
let createNoteField = document.getElementsByClassName("createNoteField")[0];
let content = document.getElementsByClassName("content")[0];
let backgroundColor = ["greenyellow", "magenta", "royalblue", "skyblue", "crimson", "red", "tomato", "gold", "yellowgreen"];
let tiltAngle = [0, 2.5, -2.5, 5, -5, 7.5, -7.5, 10, -10];

function getRandomBackground() {
	let random = Math.floor(Math.random() * backgroundColor.length);
	return backgroundColor[random];
}

function getTiltAngle() {
	let random = Math.floor(Math.random() * tiltAngle.length);
	return tiltAngle[random];
}

add.addEventListener('click', e => {
	createNoteField.classList.add("createNoteFieldOpened");
})

close.addEventListener('click', e => {
	createNoteField.classList.remove("createNoteFieldOpened");
})

create.addEventListener('click', e => {
	if(text.value.trim() !== '') {
		text.style.borderColor = "black";
		content.innerHTML += `<div class="note" style="background-color: ${getRandomBackground()}; transform: rotate(${getTiltAngle()}deg)">${text.value}</div>`;
		text.value = '';
	}
	else {
		text.style.borderColor = "red";
	}
})