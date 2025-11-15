// const fruits = [
//   { name: "Mango", price: 5, quantity: 28, taste: "Sweet"},
//   { name: "Apple", price: 6, quantity: 22, taste: "Sweet"},
//   { name: "Banana", price: 2, quantity: 34, taste: "Sweet"},
//   { name: "Kwui", price: 81, quantity: 12, taste: "Sweet"},
// ];
// function getCheapFruits(arr){
//    return arr.filter((value) => value.price <= 5)
// }
// function getTotalQuantity(arr){
//   return arr.reduce((sum, fruit) => sum + fruit.quantity,0)
// }
// function increasePrice(arr){
//   return arr.map((fruit) => ({...fruit, price:fruit.price * 1.1}))
// }
// console.log(getCheapFruits(fruits));
// console.log("---------------");
// console.log(getTotalQuantity(fruits));
// console.log("---------------");
// console.log(increasePrice(fruits));
// console.log("---------------");

const fruits = [
  {name: 'Mango', price: 5, quantity: 20},
  {name: 'Apple', price: 3, quantity: 10},
  {name: 'Goot', price: 8, quantity: 24},
  {name: 'Banana', price: 1, quantity: 18},
  {name: 'Kaiw', price: 10, quantity: 38},
  {name: 'Panappel', price: 7, quantity: 19},
  {name: 'Siso', price: 4, quantity: 7}
]
function getCheapFruits(arr){
  return arr.filter((fruit) => fruit.price <= 5)
}

function totalStocks(arr){
  return arr.reduce((sum , quantity) => sum + quantity.quantity,0)
}

function increasePrice(arr){
  return arr.map((fruit) => ({...fruit, price: (fruit.price * 1.1).toFixed(2)}))
}
function increasePrice2(arr){
  return arr.map((fruit) => (fruit.price * 1.15).toFixed(2))
}
// console.log(getCheapFruits(fruits))
// console.log(totalStocks(fruits))
console.log(increasePrice(fruits));
console.log(fruits);


