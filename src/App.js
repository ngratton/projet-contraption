/*jslint esnext:true, browser:true*/

import Controles from "./Controles.js";
import Mobilier from "./Mobilier.js";
import Chat from "./Chat.js";
import Quille from "./Quille.js";
// import Bellows from "./Bellows.js";
import Seesaw from "./Seesaw.js";
import Ballon from "./Ballon.js";
import Clou from "./Clou.js";
import Pipes from "./Pipes.js";
import Bucket from "./Bucket.js";

/**
 * @module App
 */
export default class App {
	/**
	 * Méthode principale. Sera typiquement appelée après le chargement de la page.
	 */
	static main() {
		Controles.main();
		Mobilier.main();
		Chat.main();
		Quille.main();
		// Bellows.main();
		Clou.main(); 
		Seesaw.main();
		Ballon.main();
		Pipes.main();
		Bucket.main();
		
		var app = document.querySelector("#app");
		
		// var random = Math.floor(Math.random() * 6000);
		// // console.log(random);
		// setInterval( () => {
		// 	app.innerHTML = random;
		// 	random = Math.floor(Math.random() * 6000);
		// 	console.log(random);
		// }, random);
		
		
		// var button = document.createElement("button");
		// button.innerHTML = random;
		// app.appendChild(button);
		// button.addEventListener("click", oneTimeStart);
		// function oneTimeStart() {
		// 	Chat.startAnimation();
		// 	button.removeEventListener("click", oneTimeStart);
		// }
	}
	/**
	 * Méthode qui permet d'attendre le chargement de la page avant d'éxécuter le script principal
	 * @returns {Promise} La promesse qui sera résolue après chargement
	 */
	static load() {
		return new Promise(resolve => {
			window.addEventListener("load", () => {
				resolve();
			});
		});
	}
}
