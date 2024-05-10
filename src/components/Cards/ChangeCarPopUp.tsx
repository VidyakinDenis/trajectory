import React from 'react';
import * as S from "../styled/styled";
import {Car} from "../types";
import {useForm,SubmitHandler} from "react-hook-form";


interface IChangeCagePopUp {
    popUp: boolean,
    setPopUp: (popUp: boolean) => void
    setVisibleCar: (visibleCar: any) => void
    car: Car
}

interface IPopUpForm {
    name: string,
    model: string,
    price: number,
}


export const ChangeCarPopUp = ({popUp, setPopUp, car, setVisibleCar}: IChangeCagePopUp) => {

    const {register, handleSubmit} = useForm<IPopUpForm>({
        defaultValues:{
            name:car.name,
            model: car.model,
            price: car.price,
        }
    })

    const submit: SubmitHandler<IPopUpForm> = (data) => {
        setPopUp(false)
        setVisibleCar({
            "id": car.id,
            'name': data.name,
            'model': data.model,
            "price": data.price,
            'longitude': car.longitude,
            'latitude': car.latitude,
            'year': car.year,
            'color': car.color
        })
    }

    return (
        <S.PopUp popUp={popUp} onClick={() => {setPopUp(false)}} >
            <S.PopUpForm  onSubmit={handleSubmit(submit)} onClick={e => {e.stopPropagation()}}>
                <S.PopUpName>Изменение параметров</S.PopUpName>
                <S.PopUpInput {...register('name')} type='text' />
                <S.PopUpInput {...register('model')} type='text' />
                <S.PopUpInput {...register('price')} type='number' />
                <S.PopUpInput type='submit' value={"Принять изменения"}/>
            </S.PopUpForm>
        </S.PopUp>
    );
};
