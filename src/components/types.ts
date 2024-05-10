 export interface Car{
    "id": number,
    "name": string,
    "model": string,
    "year": number,
    "color": string,
    "price": number,
    "latitude": number,
    "longitude": number,

}

 export interface ICar {
     car: Car
 }
interface CarsInterface{
    'id': number,
    "name": string,
    "model": string,
    "year": number,
    "color": string,
    "price": number,
    "latitude": number,
    "longitude": number

}

export interface ICars{
    cars: Car[]
}

