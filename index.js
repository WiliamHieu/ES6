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

