import React from "react";
import { BrowserRouter } from "react-router-dom";
import {IDefaultContainerProps} from "../shared/types/props";

const SNavigationContainer = (props: IDefaultContainerProps) => {
    return (
        <BrowserRouter>
            {props.children}
        </BrowserRouter>
    );
};

export {SNavigationContainer};
