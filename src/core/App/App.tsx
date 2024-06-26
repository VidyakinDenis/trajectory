import {Map, CardPage} from "../../pages";
import {useEffect, useState} from "react";
import {Routes, Route} from "react-router-dom";
import {Loading} from "../../components/styled/styled";
import {Car} from "../../components/types";

export const App = () => {

    const [Cars, setCars] = useState<Car[] | null>( null)

    useEffect(() => {
        fetch('https://test.tspb.su/test-task/vehicles')
            .then(data => data.json())
            .then(data => {
                if(data !== undefined || data) setCars(data)
            })
    },[])
    if(Cars !== null){
        return (
            <Routes>
                <Route path="/" element={<CardPage cars={Cars}/>} />
                <Route path="/map" element={<Map cars={Cars}/>} />
            </Routes>
        );
    }
    return (
        <Loading>Loading...</Loading>
    )

}