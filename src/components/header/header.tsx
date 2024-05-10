import React from 'react';
import * as S from "../styled/styled";


export const Header = () => {
    return (
        <S.StyledHeader>
            <S.ProdName>header</S.ProdName>
            <S.RouteButtons>
                <S.RouteBtn href={"/"}>cards</S.RouteBtn>
                <S.RouteBtn href={"/map"}>map</S.RouteBtn>
            </S.RouteButtons>
        </S.StyledHeader>
    );
};