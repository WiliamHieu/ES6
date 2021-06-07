import { Person } from './person.js';
// {} only for name export =
// but export default class teacher is dedefault thing
//name and default error export
//Default -> import ... from ''
//Named -> import {..} from ''

export function promote () { //named export

}
export default class Teacher extends Person{ //default export
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }

    teach() {
        console.log("teach");
    }
}

// const person = new Person();
// person.walk();