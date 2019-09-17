/*jslint esnext:true, browser:true*/

import Chat from "./Chat.js";
import Drop from "./Drop.js";

/**
 * @module Controles
 */
export default class Controles {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    /**
     * Méthode principale. Sera typiquement appelée après le chargement de la page.
	 */
    static main() {
        this.app = document.querySelector("#app");
        this.ajouterStyle();
        var controles = new Controles(25, 120);
        var play = this.app.appendChild(controles.creerDiv());
        // console.log(controles.creerDiv());
		play.addEventListener("click", oneTimeStart);
		function oneTimeStart() {
            Chat.startAnimation();
            Drop.startAnimation();
			play.removeEventListener("click", oneTimeStart);
		}
    }
    
    static ajouterStyle() {
        var resultat = document.createElement("link");
        resultat.setAttribute("rel", "stylesheet");
        resultat.setAttribute("href", "./src/controles.css");
        document.head.appendChild(resultat);
    }

    creerDiv() {        
        var resultat = document.createElement("div");
        resultat.classList.add("controles");
        resultat.style.left = this.x + "px";
        resultat.style.top = this.y + "px";
        this.div = resultat;
        resultat.obj = this;
        return resultat;
    }

    
        
}
