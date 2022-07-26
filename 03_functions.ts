// Always annotate function argument list and return types.
const add = (a:number, b: number): number => {
    return a + b;
}

function divide(a: number, b: number): number {
    return a / b;
}

// anonymous function also get argumnet list and return annotated. 
const anonymousFx = function (a:number, b: number): number {
    return a / b;
}

const weather = {
    date: new Date(),
    forecast: 'sunny',
    coord: {
        lat: 15,
        long: 20
    }
};

const logWeather = ({ date, forecast}: {date: Date, forecast: string}): void => {
    console.log(date);
    console.log(forecast);
};

const deconstructWeather2 = ({date, coord: {lat, long}}: {date: Date, coord: {lat: number, long: number}}): void => {
    console.log(date);
    console.log(lat);
    console.log(long);
};