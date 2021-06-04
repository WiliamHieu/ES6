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


// //Call back is stand-online object
// const person = {
//     talk() {
//         //No close brace this ketword, this is not reset instead 
//         //it in herites context that you defined (slef = this)
//         var self = this;
//         setTimeout(() => {
//             console.log('self', self)
//         }, 1000);
//     }
// }

// person.talk();

