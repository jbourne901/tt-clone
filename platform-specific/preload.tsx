import React from "react";
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';
import {IDefaultContainerProps} from "../shared/types/props";
import {CUSTOM_FONTS} from "../shared/constants/fonts";

function Preload(props: IDefaultContainerProps) {     
    console.log(`loading fonts...`)
    const [fontsLoaded] = useFonts(CUSTOM_FONTS);  
    let jsx: JSX.Element|JSX.Element[];
    console.log(`fontsLoaded=${fontsLoaded}`)
    if(fontsLoaded) {
        jsx = props.children;
    } else {
        jsx = <AppLoading />
    }

    return jsx;
};

export {Preload};




