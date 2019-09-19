/*jslint esnext:true, browser:true*/

/**
 * @module Windmill
 */
export default class Windmill {
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
        this.windmill = new Windmill(460, 114);
        this.app.appendChild(this.windmill.creerDiv());
    }

    static startAnimation() {
        this.windmill.div.style.animationPlayState = "running";
        this.listenKey();

        var moulinVitesse = ["1: Lent","2: Moyen","3: Rapide","0: Arrêt"]
        var instructions = document.createElement("p");
        instructions.innerHTML = "Contrôler le moulin avec les touches :";
        instructions.style.position = "absolute";
        instructions.style.top = "50px";
        instructions.style.left = "550px";
        this.app.appendChild(instructions);
        
        var ul = document.createElement("ul");
        moulinVitesse.forEach(vitesse => {
            var li = document.createElement("li");
            li.innerHTML = vitesse;
            ul.appendChild(li);
        });
        instructions.appendChild(ul);
        instructions.style.border = "1px solid black";
        instructions.style.padding = "5px";
    }

    static listenKey() {
        window.addEventListener("keydown", (e) => {
            if (e.key === "1") {
                this.windmill.div.style.animationPlayState = "running"
                this.windmill.div.style.animationDuration = "500ms";
            } else if (e.key === "2") {
                this.windmill.div.style.animationPlayState = "running"
                this.windmill.div.style.animationDuration = "250ms";
            } else if (e.key === "3") {
                this.windmill.div.style.animationPlayState = "runni2ng"
                this.windmill.div.style.animationDuration = "100ms";
            } else if (e.key === "0") {
                this.windmill.div.style.animationPlayState = "paused";
            }
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
