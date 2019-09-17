/*jslint esnext:true, browser:true*/

import Chat from "./Chat.js";

/**
 * @module Ballon
 */
export default class Ballon {
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
        this.ballon = new Ballon(385, 180);
        this.app.appendChild(this.ballon.creerDiv());
    }

    static startAnimation() {
        this.ballon.div.style.animationPlayState = "running";
        this.app.style.backgroundColor = "green";
        Chat.startledCat();
        this.ballon.div.addEventListener("animationend", (e) => {
            e.target.parentNode.removeChild(e.target);
            this.app.style.backgroundColor = "white";     
        });  
    }
    
    static ajouterStyle() {
        var resultat = document.createElement("link");
        resultat.setAttribute("rel", "stylesheet");
        resultat.setAttribute("href", "./src/ballon.css");
        document.head.appendChild(resultat);
    }

    creerDiv() {        
        var resultat = document.createElement("div");
        resultat.classList.add("ballon");
        resultat.style.left = this.x + "px";
        resultat.style.top = this.y + "px";
        this.div = resultat;
        resultat.obj = this;
        return resultat;
    }
        
}
