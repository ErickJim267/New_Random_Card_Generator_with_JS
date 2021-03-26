let nums = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
let simbsPoker = ["♦", "♥", "♠", "♣"];

window.onload = () => {
	let num = Math.floor(Math.random() * nums.length); //aleatorio entre 0 y 12
	let simbPoker = Math.floor(Math.random() * simbsPoker.length);

	let numeroAleatorio = nums[num]; //posicion del numero aleatorio
	let simboloAleatorio = simbsPoker[simbPoker];

	numeroAleatorio = document.getElementById("numeroDeCarta");
	simboloAleatorioIzq = document.getElementById("simbIzq");
	simboloAleatorioDer = document.getElementById("simbDer");

	simboloAleatorioIzq.innerHTML = simboloAleatorio;
	numeroAleatorio.innerHTML = num;
	simboloAleatorioDer.innerHTML = simboloAleatorio;

	//acá intento el cambio del color a los corazones y a los diamantes
	if (simboloAleatorio == simbsPoker[0]) {
		simboloAleatorioIzq.style.color = "red";
		simboloAleatorioIzq.style.color = "red";
		simboloAleatorioDer.style.color = "red";
		simboloAleatorioDer.style.color = "red";
	} else if (simboloAleatorio == simbsPoker[1]) {
		simboloAleatorioIzq.style.color = "red";
		simboloAleatorioIzq.style.color = "red";
		simboloAleatorioDer.style.color = "red";
		simboloAleatorioDer.style.color = "red";
	}
};
