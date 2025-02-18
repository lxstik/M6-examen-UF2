export default class Fantasma {
    constructor() {
        this.generaPosicionAleatoria();
        this.estado = "vivo";
    }

    generaPosicionAleatoria() {
        this.x = Math.floor(Math.random() * 20) + 1;
        this.y = Math.floor(Math.random() * 20) + 1;
    }
}