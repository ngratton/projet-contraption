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
        var seesaw = new Seesaw(360, 408);
        this.seesaw1 = this.app.appendChild(seesaw.creerDiv());
    }

    static startAnimation() {
        setTimeout(() => {
            // this.seesaw1.style.transitionDuration = (1000 + (Math.floor(Math.random() * 4000))) + "ms";
            this.seesaw1.style.animationPlayState = "running";
            // this.seesaw1.style.transitionTimingFunction = "linear";
            // this.seesaw1.style.animationName = "ouiii";
            // this.seesaw1.style.animationDuration = 250 + "ms";
            // this.seesaw1.style.left = this.x + "px";
            // this.seesaw1.style.top = this.y + "px";
        }, 10);
        var stop = (e) => {
            this.seesaw1.style.removeProperty("running");
            // this.seesaw1.style.removeProperty("transition-duration");
            // this.seesaw1.style.removeProperty("transition-timing-function");
            // this.seesaw1.style.removeProperty("animation-name");
            // this.seesaw1.style.removeProperty("animation-duration");
            // this.seesaw1.style.removeProperty("transform");
            this.seesaw1.removeEventListener("transitionend", stop);
        }
        this.seesaw1.addEventListener("transitionend", stop);
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
