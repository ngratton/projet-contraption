/*jslint esnext:true, browser:true*/

import Quille from "./Quille.js";

/**
 * @module Chat
 */
export default class Chat {
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
        this.chat = new Chat(100, 100);
        this.app.appendChild(this.chat.creerDiv());
    }

    static startAnimation() {
        this.chat.deplacer(273, 100);
    }

    static startledCat() {
        this.chat.div.classList.add("startled");
        this.chat.div.addEventListener("animationend", (e) => {
            this.chat.div.classList.remove("startled");
        });
    }

    static ajouterStyle() {
        var resultat = document.createElement("link");
        resultat.setAttribute("rel", "stylesheet");
        resultat.setAttribute("href", "./src/chat.css");
        document.head.appendChild(resultat);
    }

    creerDiv() {
        var resultat = document.createElement("div");
        resultat.classList.add("chat");
        resultat.style.left = this.x + "px";
        resultat.style.top = this.y + "px";
        this.div = resultat;
        resultat.obj = this;
        return resultat;
    }


    deplacer(x, y) {
        this.x = x;
        this.y = y;
        setTimeout(() => {
            this.div.style.transitionDuration = 2000 + "ms";
            this.div.style.transitionTimingFunction = "linear";
            this.div.style.animationName = "walk";
            this.div.style.animationDuration = 500 + "ms";
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
    
}
