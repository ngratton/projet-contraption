/*jslint esnext:true, browser:true*/
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
        var mobilier = new Seesaw(360, 408);
        this.app.appendChild(mobilier.creerDiv());
    }

    static startAnimation() {
        setTimeout(() => {
            // this.div.style.transitionDuration = (1000 + (Math.floor(Math.random() * 4000))) + "ms";
            this.div.style.transitionTimingFunction = "linear";
            this.div.style.animationName = "ouiii";
            this.div.style.animationDuration = 250 + "ms";
            this.div.style.left = this.x + "px";
            this.div.style.top = this.y + "px";
        }, 10);
        var stop = (e) => {
            this.div.style.removeProperty("transition-duration");
            this.div.style.removeProperty("transition-timing-function");
            this.div.style.removeProperty("animation-name");
            this.div.style.removeProperty("animation-duration");
            this.div.style.removeProperty("transform");
            this.div.removeEventListener("transitionend", stop);
            Quille.startAnimation();
        }
        this.div.addEventListener("transitionend", stop);
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
