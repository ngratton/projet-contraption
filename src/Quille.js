/*jslint esnext:true, browser:true*/

import Seesaw from "./Seesaw.js";

/**
 * @module Quille
 */
export default class Quille {
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
        this.quille = new Quille(325, 124);
        this.app.appendChild(this.quille.creerDiv());
    }

    static startAnimation() {
        this.quille.deplacerX(360);
        this.quille.div.addEventListener("transitionend", (e) => {
            e.currentTarget.obj.deplacerY(400);  
            this.quille.div.addEventListener("transitionend", (e) => {
                Seesaw.startAnimation();
            });            
        });      
    }
    
    static ajouterStyle() {
        var resultat = document.createElement("link");
        resultat.setAttribute("rel", "stylesheet");
        resultat.setAttribute("href", "./src/quille.css");
        document.head.appendChild(resultat);
    }

    creerDiv() {        
        var resultat = document.createElement("div");
        resultat.classList.add("quille");
        resultat.style.left = this.x + "px";
        resultat.style.top = this.y + "px";
        this.div = resultat;
        resultat.obj = this;
        return resultat;
    }
    
    deplacerX(x) {
        this.x = x;
        window.setTimeout(() => {
            this.div.style.transitionDuration = 200 + "ms";
            this.div.style.transitionTimingFunction = "ease-in";
            this.div.style.left = this.x + "px";
        }, 50);      
    }
    deplacerY(y) {
        this.y = y;
        window.setTimeout(() => {
            this.div.style.transitionDuration = 350 + "ms";
            this.div.style.transitionTimingFunction = "ease-in";
            this.div.style.top = this.y + "px";
        }, 50);      
    }
    
}
