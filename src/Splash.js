/*jslint esnext:true, browser:true*/

/**
 * @module Splash
 */
export default class Splash {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    /**
     * Méthode principale. Sera typiquement appelée après le chargement de la page.
	 */
    static main() {
        this.app = document.querySelector("#app");
        this.ajouterStyle();;
        document.body.appendChild(this.retournerBackdrop());
        var me;
        window.addEventListener("keydown", me = e => {
            this.splash.parentNode.removeChild(this.splash);
            window.removeEventListener("keydown", me);
        });
    }
    
    static ajouterStyle() {
        var resultat = document.createElement("link");
        resultat.setAttribute("rel", "stylesheet");
        resultat.setAttribute("href", "./src/splash.css");
        document.head.appendChild(resultat);
    }

    static retournerBackdrop() {
        this.splash = document.createElement("div");
        this.splash.setAttribute("id", "splash");
        var figure = document.createElement("figure");
        this.splash.appendChild(figure);
        var h3 = document.createElement("h3");
        h3.innerHTML = "NG's";
        figure.appendChild(h3);
        var figcaption = document.createElement("figcaption");
        figcaption.innerHTML = "Appuyez sur n'importe quel touche (clavier) pour continuer.";
        figure.appendChild(figcaption);
        return this.splash;
    }
}