/* Nicholas Gratton - 0270256 */

/*jslint esnext:true, browser:true*/

import Controles from "./Controles.js";
import Mobilier from "./Mobilier.js";
import Chat from "./Chat.js";
import Quille from "./Quille.js";
import Seesaw from "./Seesaw.js";
import Ballon from "./Ballon.js";
import Clou from "./Clou.js";
import Pipes from "./Pipes.js";
import Bucket from "./Bucket.js";
import Drop from "./Drop.js";
import Splash from "./Splash.js";
import Windmill from "./Windmill.js";

/**
 * @module App
 */
export default class App {
	/**
	 * Méthode principale. Sera typiquement appelée après le chargement de la page.
	 */
	static main() {
		Splash.main();
		Controles.main();
		Mobilier.main();
		Chat.main();
		Quille.main();
		Clou.main(); 
		Seesaw.main();
		Ballon.main();
		Pipes.main();
		Bucket.main();
		Drop.main();
		Windmill.main();				
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
