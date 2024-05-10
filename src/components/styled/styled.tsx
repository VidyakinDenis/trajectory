import styled from "styled-components";

export const StyledCard = styled.div<{ deleted: boolean }>`
  padding-left: 50px;
  justify-content: space-between;
  margin: 10px auto 10px auto ;
  text-align: center;
  display: ${props => props.deleted ? "none" : "flex"};
  width: 70%;
  height: 80px;
  border: 1px solid #3049ec;
  background-color: #fff;
  border-radius: 15px;
`

export const CardButton = styled.div`
  padding-top: 7px;
  margin: auto 0 auto 20px;
  height: 40px;
  width: 40px;
  background-color: #fff;
  color: #3049ec;
  border: 1px solid #3049ec;
  border-radius: 8px;
  cursor: pointer;
`

export const CarInfo = styled.span`
  margin: auto 10px auto 10px;
  color: #3049ec;
  font-size: 18px;
`

export const StyledCards = styled.div`
`

export const BtnBlock = styled.div`
  display: flex;
  margin-right: 50px;
`

export const PopUp  = styled.div<{ popup: boolean }>`
  display: ${props => props.popup ? "fixed" : 'none'};
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99998;
  background-color: rgba(0,0,0,0.4);

`

export const PopUpForm = styled.form`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 35%;
  top: 25%;
  width: 30%;
  height: 50%;
  border-radius: 15px;
  z-index: 99998;
  background-color: #fff;
  transition: 0.3s;
`

export const PopUpInput = styled.input`
  border: 1px solid #3049ec;
  margin: 10px auto;
  border-radius: 8px;
  height: 30px;
      :focus-visible{
        outline: 0;
        outline-offset: 0;
        border: none;
      }
`

export const PopUpSubmit = styled.button`
  margin-top: 20px;
  align-self: center;
  width: 80%;
`

export const PopUpName = styled.span`
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 24px;
  font-weight: 800;
`

export const StyledHeader = styled.div`
  flex-direction: column;
  display: flex;
  padding: 0;
  background-color: #3049ec;
  width: 100%;
  color: white;
`

export const ProdName = styled.span`
  text-transform: uppercase;
  text-align: center;
  font-size: 35px;
  margin-top: 10px;
`

export const RouteBtn = styled.a`
  text-decoration: none;
  text-transform: uppercase ;
  font-size: 24px;
  cursor: pointer;
  background-color: #3049ec;
  color: #fff;
  border: none;
  border-bottom: 2px solid white;
`

export const RouteButtons = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-around;
`

export const Loading = styled.div`
  color: #000;
  font-size:56px;
  text-align: center;
  margin-top: 10%;
`

export const CardForm = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`

export const SelectFilter = styled.select`
    border-radius: 8px;
    border: 1px solid #3049ec ;
    height: 30px;
    width: 200px;
`

export const SubmitFilter = styled.button`
  border-radius: 8px;
  border: 1px solid #3049ec ;
  height: 30px;
  width: 200px;
`