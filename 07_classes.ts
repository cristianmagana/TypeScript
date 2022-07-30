class Vehicle {
    // // initialize on declaration or use constructor
    // color: string = 'red';

    // constructor(color: string) {
    //     this.color = color;
    // }

    // OR 

    constructor(public color2: string){}


    drive(): void {
        console.log('vroom');
    }
    protected honk(): void {
        console.log('beep');
    }
}

// Class Inheritance 
class Car extends Vehicle {

    constructor(public wheels: number, color: string) {
        super(color);
    }
    // overriding method on the child class
    drive(): void {
        console.log('vroom vroom');
    }

    startDriving(): void {
        this.drive();
    }
}

const car = new Car(4, 'red');
car.startDriving();