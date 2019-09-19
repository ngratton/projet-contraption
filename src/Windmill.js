/*jslint esnext:true, browser:true*/

/**
 * @module Windmill
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
        this.windmill = new Windmill(360, 408);
        this.app.appendChild(this.windmill.creerDiv());
    }

    static startAnimation() {
            this.windmill.div.style.animationPlayState = "running";
            this.windmill.div.addEventListener("animationend", (e) => {
                this.windmill.div.style.removeProperty("animation-play-state");
                this.windmill.div.style.transform = "scaleX(1)";
            });
    }
    
    static ajouterStyle() {
        var resultat = document.createElement("link");
        resultat.setAttribute("rel", "stylesheet");
        resultat.setAttribute("href", "./src/windmill.css");
        document.head.appendChild(resultat);
    }

    creerDiv() {        
        var resultat = document.createElement("div");
        resultat.classList.add("windmill");
        resultat.style.left = this.x + "px";
        resultat.style.top = this.y + "px";
        this.div = resultat;
        resultat.obj = this;
        return resultat;
    }
        
}
