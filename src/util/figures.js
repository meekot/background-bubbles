export class Figures{
    constructor(){

    }
    createSquare(id) {
        let square = document.createElement("square"+id);
        square.style.width = 100 + "px";
        square.style.height = 100 + "px";
        square.style.backgroundColor = "red"

        return square;
    }


}