import React, {FC} from 'react';
import {Header} from "../../components/header/header";
import {CarCards} from "../../components";
import * as S from "../styled/styled"
import {Car, ICars} from "../../components/types";

export const CardPage: FC<ICars> = ({cars}) => {
    console.log(cars,'gavno')
    return (
        <S.CardPage>
            <Header/>
            <CarCards cars={cars}/>
        </S.CardPage>
    );
};
