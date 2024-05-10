import React, {FC} from 'react';
import {Car, ICars} from "../types";
import 'leaflet/dist/leaflet.css';
import L from "leaflet";
import * as S from "../styled/styled"
import {
    Marker,
    MapContainer,
    TileLayer,
    Popup,
} from "react-leaflet";

const icon = new L.Icon({
    iconUrl: require('../../images/location-pin.png'),
    iconRetinaUrl:  require('../../images/location-pin.png'),
    iconSize: new L.Point(25, 25),
});

export const CarMap: FC<ICars> = ({cars}) => {

    if(!cars){
        return (
            <S.Loading>Loading...</S.Loading>
        )
    }
    return (
        <MapContainer
            center={[59.935622, 30.326052]}
            maxZoom={20}
            zoom={11}
            style={{ width: "100vw", height: "100vh" }}
            scrollWheelZoom={true}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                cars.map((car: Car) => {
                        return (
                            <Marker key={car.id} position={[car.latitude, car.longitude]} icon={icon}>
                                <Popup>
                                    <div>{car.name} {car.model}</div>
                                    <div>{car.price}</div>
                                </Popup>
                            </Marker>
                        )
                    }
                )}
        </MapContainer>
    )

};