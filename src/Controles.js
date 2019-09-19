/* Nicholas Gratton - 0270256 */


/*jslint esnext:true, browser:true*/

import Chat from "./Chat.js";
import Drop from "./Drop.js";
import Windmill from "./Windmill.js";

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
        var me;
		play.addEventListener("click", me = () => {
            Chat.startAnimation();
            Drop.startAnimation();
            Windmill.startAnimation();
			play.removeEventListener("click", me);
        });
            
        var instructions = document.createElement("p");
        instructions.innerHTML = "Appuyez sur le bouton vert pour démarrer l'animation.";
        instructions.style.position = "absolute";
        instructions.style.top = "50px";
        instructions.style.left = "15px";
        this.app.appendChild(instructions);
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
