import { FC, ChangeEvent, useState, useEffect } from "react";
import * as S from "../styled/styled";
import { Car } from "../types";
import { Card } from "./Card";
import { useForm, SubmitHandler } from "react-hook-form";

interface FilterForm {
    year: string;
    price: string;
}

export const CarCards: FC<{ cars: Car[] }> = ({ cars }) => {
    const { register, handleSubmit } = useForm<FilterForm>();
    const [filteredCars, setFilteredCars] = useState<Car[]>(cars);

    useEffect(() => {
        setFilteredCars(cars);
    }, [cars]);

    const submit: SubmitHandler<FilterForm> = (data) => {
        let filtered: Car[] = [...cars];

        if (data.year === "older") {
            filtered = filtered.sort((a, b) => a.year - b.year);
        } else if (data.year === "younger") {
            filtered = filtered.sort((a, b) => b.year - a.year);
        }

        if (data.price === "cheaper") {
            filtered = filtered.sort((a, b) => a.price - b.price);
        } else if (data.price === "expensive") {
            filtered = filtered.sort((a, b) => b.price - a.price);
        }

        setFilteredCars(filtered);
    };

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        handleSubmit(submit)(e);
    };

    return (
        <S.StyledCards>
            <S.CardForm onSubmit={handleSubmit(submit)}>
                <S.SelectFilter {...register("year")} onChange={handleChange}>
                    <option value="">Год выпуска</option>
                    <option value="older">Год выпуска (от ранних)</option>
                    <option value="younger">Год выпуска (от поздних)</option>
                </S.SelectFilter>
                <S.SelectFilter {...register("price")} onChange={handleChange}>
                    <option value="">Стоимость</option>
                    <option value="cheaper">Стоимость (от дешевых)</option>
                    <option value="expensive">Стоимость (от дорогих)</option>
                </S.SelectFilter>
                <S.SubmitFilter type="submit">Применить фильтр</S.SubmitFilter>
            </S.CardForm>
            {filteredCars.map((car) => (
                <Card car={car} key={car.id} />
            ))}
        </S.StyledCards>
    );
};