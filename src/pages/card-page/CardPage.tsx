import React, {FC} from 'react';
import {Header} from "../../components";
import {CarCards} from "../../components";
import * as S from "../styled/styled"
import {ICars} from "../../components/types";

export const CardPage: FC<ICars> = ({cars}) => {
    return (
        <S.CardPage>
            <Header/>
            <CarCards cars={cars}/>
        </S.CardPage>
    );
};
