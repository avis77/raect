class Car{
    constructor(color,speed) {
        this._color = color
        this._speed = speed
    }

    getSpeed(){return this._speed}
    getColor(){return this._color}
}

class Race{
    constructor(car1,car2) {
        if(car1.getSpeed()>=car2.getSpeed()){
            this._winingCar = car1
        }else{
            this._winingCar = car2
        }
    }
    add(car){
        if(car.getSpeed()>=this._winingCar.getSpeed()){
            this._winingCar = car
        }
    }
    getWinner(){
        return "And the winner is... "+this._winingCar.getColor()
    }
}

const c1 = new Car('blue', 20);
const c2 = new Car('green', 30);
const c3 = new Car('red', 24);

const race = new Race(c1, c2);
race.add(c3);

// prints: And the winner is... green
console.log(race.getWinner());

