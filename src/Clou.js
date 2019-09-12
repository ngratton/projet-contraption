/*jslint esnext:true, browser:true*/

import Seesaw from "./Seesaw.js";

/**
 * @module Clou
 */
export default class Clou {
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
        this.clou = new Clou(425, 419);
        this.app.appendChild(this.clou.creerDiv());
    }

    static startAnimation() {
        this.clou.deplacerX(360);
        this.clou.div.addEventListener("transitionend", (e) => {
            e.currentTarget.obj.deplacerY(400);  
            this.clou.div.addEventListener("transitionend", (e) => {
                Seesaw.startAnimation();
            });            
        });      
    }
    
    static ajouterStyle() {
        var resultat = document.createElement("link");
        resultat.setAttribute("rel", "stylesheet");
        resultat.setAttribute("href", "./src/clou.css");
        document.head.appendChild(resultat);
    }

    creerDiv() {        
        var resultat = document.createElement("div");
        resultat.classList.add("clou");
        resultat.style.left = this.x + "px";
        resultat.style.top = this.y + "px";
        this.div = resultat;
        resultat.obj = this;
        return resultat;
    }
    
    deplacerX(x) {
        this.x = x;
        window.setTimeout(() => {
            this.div.style.transitionDuration = 250 + "ms";
            this.div.style.transitionTimingFunction = "cubic-bezier(1,.24,.99,.85)";
            this.div.style.left = this.x + "px";
        }, 50);      
    }
    deplacerY(y) {
        this.y = y;
        window.setTimeout(() => {
            this.div.style.transitionDuration = 450 + "ms";
            this.div.style.transitionTimingFunction = "cubic-bezier(0.5, 0.2, 0.3, 1.0)";
            this.div.style.top = this.y + "px";
        }, 50);      
    }
    
}
