// import dependencies
import { concat } from '../util/string';
import {Figures} from '../util/figures';
// return UserList class
export class MeekotBackground{
    constructor(elem, users){
        this.elem = elem;
        this.users = users;
        this.initialized = false;
    }
    // initialize plugin
    init() {
        //let ul = document.createElement( 'ul' );
       // ul.classList.add('users-list');
        let figures = new Figures;
        let square1 = figures.createSquare(1);
        square1.style.position = "absolute";
        let body = document.body;
        body.appendChild(square1); 
        
        // store element reference
       // this.ul = this.elem.appendChild( ul );
         // render initial list of users
        //this.renderList();
        // set initialized to `true`
        this.initialized = true;
        return square1;
    }
    
}