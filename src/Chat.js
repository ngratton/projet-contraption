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
        // this.chat.deplacer(273, 100);
        // console.log(chat);
        // this.chat.div.addEventListener("click", () => {
        //     startAnimation();
        // }, false);
    }

    static startAnimation() {
        this.chat.deplacer(273, 100);
        // chat.div.addEventListener("transitionend", (e) => {
        //     e.currentTarget.obj.deplacer(Math.floor(Math.random() * 90), Math.floor(Math.random() * 90));
        // });
        // var chat = new Chat(500, 250);
        // this.app.appendChild(chat.creerDiv());
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
        // var distance = Math.sqrt((x - this.x)*(x - this.x) + (y - this.y)*(y - this.y));
        // if (x > this.x) {
        //     this.sprite.style.transform = "scale(-1,1)";
        // }
        this.x = x;
        this.y = y;
        setTimeout(() => {
            this.div.style.transitionDuration = (1000 + (Math.floor(Math.random() * 4000))) + "ms";
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
