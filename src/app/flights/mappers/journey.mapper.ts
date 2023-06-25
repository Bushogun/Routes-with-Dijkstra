import { Transport } from '../classes/Transport';
import { Flight } from '../classes/Flight';
import { FlightResponseInterface } from '../interfaces/flightResponse.interaface';
import { Journey } from '../classes/Journey';

export function journeyMapper(flights:Flight[] , origin:string, destination:string):Journey{
    const totalPrice = flights.reduce(function (acc, obj) { return acc + Number(obj.price); }, 0);
    return new Journey(flights , origin, destination, totalPrice)
}
