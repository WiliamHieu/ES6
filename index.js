// var -> function (dont need)\
// let ->block
// const -> block

// function sayHello() {
//     for (let i=0; i < 5; i++){
//         console.log(i)
//     }
//     console.log(i)
// }
// sayHello();

// const person = {
//     name: 'Mosh',
//     talk() {
//         console.log(this)
//     }
// }

// person.talk();

// const talk = person.talk.bind(person);
// talk();

// Arow function

// const square = function() {
//     return number * number;
// }

// const job = [
//     {id:1, isActive: true},
//     {id:2, isActive: true},
//     {id:3, isActive: false}
// ]

// const activejob = job.filter(function(job){ return job.isActive; })
// const activejob = job.filter(job => job.isActive)


// const square = number => number * number;
// console.log(square(5));\


//Call back is stand-online object
const person = {
    talk() {
        //No close brace this ketword, this is not reset instead 
        //it in herites context that you defined (slef = this)
        var self = this;
        setTimeout(() => {
            console.log('self', self)
        }, 1000);
    }
}

// person.talk();
// const color =['red','green','blue'];
// // template literal in es6
// const items = color.map(color => '<li>${color}</li>');
// console.log(items)

// const address = {
//     street: '',
//     city: '',
//     country: ''
// };

// const street = street.address;
// const city = city.address;
// const country = country.address;
//// Object restructure
// const {street, city, country} = address;
// const {street: st } = address;

 const first = [1, 2, 3];
 const second = [4, 5, 6]
// Spread : create new array, spread all items of first and put it in new array
 const combined = first.concat(second);
 const combined = [...first, 'a', ...second]

const first = {name: 'Mosh'};
const clone = {...rist};

