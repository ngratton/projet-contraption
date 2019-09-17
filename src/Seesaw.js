/*jslint esnext:true, browser:true*/


import Clou from "./Clou.js";

/**
 * @module Seesaw
 */
export default class Seesaw {
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
        this.seesaw = new Seesaw(360, 408);
        this.app.appendChild(this.seesaw.creerDiv());
    }

    static startAnimation() {
            this.seesaw.div.style.animationPlayState = "running";
            this.seesaw.div.addEventListener("animationend", (e) => {
                this.seesaw.div.style.removeProperty("animation-play-state");
                this.seesaw.div.style.transform = "scaleX(1)";
            });
            Clou.startAnimation();
            window.setTimeout(() => {
                console.log(this.seesaw.div);
            }, 1000);
    }
    
    static ajouterStyle() {
        var resultat = document.createElement("link");
        resultat.setAttribute("rel", "stylesheet");
        resultat.setAttribute("href", "./src/seesaw.css");
        document.head.appendChild(resultat);
    }

    creerDiv() {        
        var resultat = document.createElement("div");
        resultat.classList.add("seesaw");
        resultat.style.left = this.x + "px";
        resultat.style.top = this.y + "px";
        this.div = resultat;
        resultat.obj = this;
        return resultat;
    }
        
}
