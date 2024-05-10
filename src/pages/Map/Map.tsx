import React, {FC} from "react"
import {Header} from "../../components";
import {CarMap} from "../../components";
import {ICars} from "../../components/types";

export const Map: FC<ICars> = ({cars}) => {
    return (
        <div>
            <Header/>
            <CarMap cars={cars}/>
        </div>
    );
};

export default Map;