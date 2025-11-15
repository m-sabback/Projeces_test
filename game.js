const game = {
    title: "Speed Race",
    cars: [
        {name: "Car A", speed: 120},
        {name: "Car B", speed: 150},
        {name: "Car C", speed: 100}
    ],
    increaseAll(){
        this.cars = this.cars.map(car => ({...car, speed: car.speed + 15}))
    },
    getFastest(){
        return this.cars.reduce((fastest, car) => car.speed > fastest.speed ? car : fastest)
    },
    clone(){
        return JSON.parse(JSON.stringify(this))
    }
}

game.increaseAll()
console.log(game.cars)
console.log(game.getFastest())
console.log(game.clone())

