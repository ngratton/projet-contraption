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
        this.app = document.querySelector("#app");
        this.ajouterStyle();
        this.drop = new Drop(203, 215);
        this.app.appendChild(this.drop.creerDiv());

        this.random = Math.floor(Math.random() * 2000);
    }

    static startAnimation() {
        this.drop.deplacerY(416);
    }
    
    static ajouterStyle() {
        var resultat = document.createElement("link");
        resultat.setAttribute("rel", "stylesheet");
        resultat.setAttribute("href", "./src/drop.css");
        document.head.appendChild(resultat);
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
            console.log(this.div);
            this.div.style.transitionDuration = 250 + "ms";
            this.div.style.transitionTimingFunction = "cubic-bezier(0.5, 0.2, 0.3, 1.0)";
            this.div.style.top = this.y + "px";
            this.random = Math.floor(Math.random() * 2000);
        }, this.random);      
    }       
}
