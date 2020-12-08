import React from "react";
import {View, ViewStyle} from "react-native";

interface ISFixedPosProps {
    width?: number|string;
    height?: number|string;
    top?: number;
    children: JSX.Element | JSX.Element[] | undefined;    
};

const SFixedPos = (props: ISFixedPosProps) => {
    const style: ViewStyle = { position: "absolute", width: "100%", height: undefined, top: undefined,
    backgroundColor: "transparent", justifyContent: "center", alignItems: "center"};
    if(props.width) {
        style.width = props.width;
    }
    if(props.height) {
        style.height = props.height;
    }
    if(props.top) {
        style.top = props.top;
    }

    return (
        <View
            style={style}
        >
            {props.children}
        </View>
    );
};
 
export {SFixedPos};
