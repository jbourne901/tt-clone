import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {IDefaultContainerProps} from "../shared/types/props";

const SNavigationContainer = (props: IDefaultContainerProps) => {
    return (
        <NavigationContainer>
            {props.children}
        </NavigationContainer>
    );
};

export {SNavigationContainer};