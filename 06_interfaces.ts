const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true
};

//                   a long annotation on the parameter list 
const printVehicle = (vehicle: {name: string; year: number; broken: boolean}): void => {
    // es2015 template string
    console.log(`Name: ${vehicle.year}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Broken?: ${vehicle.broken}`);
}

printVehicle(oldCivic);


// Interface is creating a new type. i.e. string, number, etc.
// Interface can be of different types, objects, and functions
interface Vehicle {
    name: string;
    year: Date;
    broken: boolean;
    summary(): string 
};

const oldCivic2 = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name: ${this.name}`;
    }
};

const printVehicleUsingInterface = (vehicle: Vehicle): void => {
    // es2015 template string
    console.log(`Name: ${vehicle.year}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Broken?: ${vehicle.broken}`);
}

printVehicleUsingInterface(oldCivic2);

// -------------------------------------------------------------------

// Code reuse with Interfaces

interface Summary {
    summary(): string;
};

const oldCivic3 = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name: ${this.name}`;
    }
};

const drink10 = {
    name: 'coke',
    color: 'brown',
    sugar: 50,
    summary(): string {
        return `Name: ${this.name}`;
    }
};

const printSummary = (item: Summary): void => {
    console.log(item.summary());
}

printSummary(oldCivic3);
printSummary(drink10);


