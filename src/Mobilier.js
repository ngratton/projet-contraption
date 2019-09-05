/*jslint esnext:true, browser:true*/
/**
 * @module Mobilier
 */
export default class Mobilier {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    /**
     * Méthode principale. Sera typiquement appelée après le chargement de la page.
	 */
    static main() {
        this.app = document.querySelector("#app");
        this.ajouterStyle();
        var mobilier = new Mobilier(100, 157, 256, 32);
        this.app.appendChild(mobilier.creerDiv());
        var mobilier2 = new Mobilier(600, 250, 128, 32);
        this.app.appendChild(mobilier2.creerDiv());
    }
    
    static ajouterStyle() {
        var resultat = document.createElement("link");
        resultat.setAttribute("rel", "stylesheet");
        resultat.setAttribute("href", "./src/mobilier.css");
        document.head.appendChild(resultat);
    }

    creerDiv() {        
        var resultat = document.createElement("div");
        resultat.classList.add("mobilier");
        resultat.style.left = this.x + "px";
        resultat.style.top = this.y + "px";
        resultat.style.width = this.w + "px";
        resultat.style.height = this.h + "px";
        this.div = resultat;
        resultat.obj = this;
        return resultat;
    }
        
}
