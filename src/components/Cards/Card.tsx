import {FC, useState} from 'react';
import * as S from "../styled/styled";
import {Car} from "../types";
import {ChangeCarPopUp} from "./ChangeCarPopUp";

interface CarItemProps {
    car: Car
}
export const Card: FC<CarItemProps> = ({car}) => {
    const [visibleCar, setVisibleCar ] = useState(car)
    const [popUp, setPopUp] = useState(false)
    const [deleted, setDeleted] = useState(false)

    return (
        <S.StyledCard key={visibleCar.id} onClick={e => e.stopPropagation()} deleted={deleted}>
            <S.CarInfo id={visibleCar.name + visibleCar.id.toString()}>Brand: {visibleCar.name} </S.CarInfo>
            <S.CarInfo id={visibleCar.model + visibleCar.id.toString()}>Model:{visibleCar.model} </S.CarInfo>
            <S.CarInfo>Year: {visibleCar.year} </S.CarInfo>
            <S.CarInfo>Color: {visibleCar.color} </S.CarInfo>
            <S.CarInfo id={visibleCar.price.toString() + visibleCar.id.toString()}>Price: {visibleCar.price} </S.CarInfo>
            <S.BtnBlock>
                <S.CardButton onClick={() => setDeleted(prev => !prev)}>
                    <svg xmlns="http://www.w3.org/2000/svg"  width="30" height="30" viewBox="0 0 24 24">
                        <path d="M 10 2 L 9 3 L 4 3 L 4 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 5 7 L 5 22 L 19 22 L 19 7 L 5 7 z M 8 9 L 10 9 L 10 20 L 8 20 L 8 9 z M 14 9 L 16 9 L 16 20 L 14 20 L 14 9 z"></path>
                    </svg>
                </S.CardButton>
                <S.CardButton onClick={() => {setPopUp(prev => !prev)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 6.5 6.5" id="pencil"><path d="M17.953 1.006a3.002 3.002 0 0 0-2.074.871L1.875 15.881a2.991 2.991 0 0 0-.871 2.117L.996 22A1 1 0 0 0 2 23.004l4.002-.008a2.99 2.99 0 0 0 2.117-.871L22.123 8.121a3.02 3.02 0 0 0 0-4.244l-2-2a2.998 2.998 0 0 0-2.17-.871zm.03 1.992c.27-.004.53.104.722.295l2.002 2.002a.981.981 0 0 1 0 1.41l-1.295 1.293-3.41-3.41 1.293-1.295a.996.996 0 0 1 .687-.295zm-3.395 3.004 3.41 3.41L7.41 20 4 16.59 14.588 6.002zM2.996 18.414l2.588 2.588H2.996v-2.588z" color="#000" font-family="sans-serif" font-weight="400" overflow="visible" transform="scale(.26458)" ></path></svg>
                </S.CardButton>
            </S.BtnBlock>
            <ChangeCarPopUp popUp={popUp} setPopUp={setPopUp} car={car} setVisibleCar={setVisibleCar}/>
        </S.StyledCard>
    );
};