function main() {
	//document.getElementById("myP1").style.display = "none";
	
}

function fechaAJaula(jaula) {
	let elemento = document.getElementById(jaula);
	elemento.style.display = "none";
}

function saiDaJaula(jaula) {
	let elementoDaJaula = document.getElementById(jaula);
	let tavaFechada = elementoDaJaula.style.display != "block";
	
	fechaAJaula("peito");
	fechaAJaula("dorsal");
	fechaAJaula("perna");
	fechaAJaula("ombro");
	
	if (tavaFechada) {
		elementoDaJaula.style.display = "block";
	}
}