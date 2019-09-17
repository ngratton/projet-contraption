/*jslint esnext:true, browser:true*/
/**
 * @module Drop
 */
export default class Drop {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    /**
     * Méthode principale. Sera typiquement appelée après le chargement de la page.
	 */
    static main() {
    }

    static creerDrop() {
        this.app = document.querySelector("#app");
        this.ajouterStyle();
        this.drop = new Drop(203, 215);
        this.app.appendChild(this.drop.creerDiv());
    }

    static startAnimation() {
        this.creerDrop();
        window.setTimeout(() => {
            this.drop.deplacerY(416);
            this.aleaDrop();
            this.killDrop();
		}, 400);
    }
    
    static killDrop() {
        this.drop.div.addEventListener("transitionend", () => {
            this.drop.div.parentNode.removeChild(this.drop.div);
            delete this.drop;
        });
    }

    static ajouterStyle() {
        var resultat = document.createElement("link");
        resultat.setAttribute("rel", "stylesheet");
        resultat.setAttribute("href", "./src/drop.css");
        document.head.appendChild(resultat);
    }
    
    static aleaDrop() {
        window.setTimeout(() => {
            this.startAnimation();
        }, Math.floor(Math.random() * (2000-900) + 900))
    }

    creerDiv() {        
        var resultat = document.createElement("div");
        resultat.classList.add("drop");
        resultat.style.left = this.x + "px";
        resultat.style.top = this.y + "px";
        this.div = resultat;
        resultat.obj = this;
        return resultat;
    }
    

    deplacerY(y) {
        this.y = y;
        window.setTimeout(() => {
            this.div.style.transitionDuration = 500 + "ms";
            this.div.style.transitionTimingFunction = "ease-in";
            this.div.style.top = this.y + "px";
            this.random = Math.floor(Math.random() * 2000);
        }, this.random);
    }       

}
