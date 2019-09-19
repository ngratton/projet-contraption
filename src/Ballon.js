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
        var r, g, b;
            r = Math.floor(Math.random() * 255) + ",";
            g = Math.floor(Math.random() * 255) + ",";
            b = Math.floor(Math.random() * 255);
        this.app.style.backgroundColor = "rgb(" + r+g+b + ")";
        Chat.startledCat();
        this.ballon.div.addEventListener("animationend", (e) => {
            e.currentTarget.parentNode.removeChild(e.currentTarget);
            this.ballon.div.style.animationPlayState = "paused";
            this.app.style.backgroundColor = "rgb(255,255,255)";     
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
