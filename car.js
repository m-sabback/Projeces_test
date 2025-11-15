// const cars = [
//     { brand: 'Toyota', model: 'Corolla', speed: 120, accelerate(){this.speed += 10}},
//     { brand: 'BMW', model: 'M5', speed: 180,accelerate(){this.speed += 10}},
//     { brand: 'Honda', model: 'Civic', speed: 140,accelerate(){this.speed += 10}},
// ]

// function increaseSpeed(arr){
//     return arr.map(car => ({...car, speed: car.speed + 20}))
// }

// function getFastestCar(arr){
//     return arr.reduce((fastest, car) => car.speed > fastest.speed ? car : fastest)
// }

// function deepCopy(arr, index, newModel){
//     const copy = JSON.parse(JSON.stringify(arr))
//     copy[index].model = newModel
//     return copy
// }

// console.log(increaseSpeed(cars))
// console.log(getFastestCar(cars))
// console.log(deepCopy(cars, 1, "M7"))




const cars = [
    { brand: 'Toyota', model: 'Corolla', speed: 120, accelerate(){this.speed += 10}},
    { brand: 'BMW', model: 'M5', speed: 180,accelerate(){this.speed += 10}},
    { brand: 'Honda', model: 'Civic', speed: 140,accelerate(){this.speed += 10}},
]

// function increaseAll(arr, )