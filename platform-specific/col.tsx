import React from "react";
import {View, ViewStyle} from "react-native";

interface ISColProps {
    width?: number|string;
    height?: number|string;
    backgroundColor?: string;
    alignItems?: "center";
    justifyContent?: "center"|"space-between";
    marginTop?: number|string;
    marginLeft?: number|string;
    marginRight?: number|string;
    children: JSX.Element | JSX.Element[] | undefined;    
};

const SCol = (props: ISColProps) => {
    const style: ViewStyle = {flex: 1, 
                flexDirection: "column", width: "100%", height: "100%",
                backgroundColor: undefined, alignItems: "center", 
                justifyContent: "center", marginTop: undefined, marginLeft: undefined, 
                marginRight: undefined};
    if(props.width) {
        style.width = props.width;
    }
    if(props.height) {
        style.height = props.height;
    }
    if(props.backgroundColor) {
        style.backgroundColor = props.backgroundColor;
    }
    if(props.alignItems) {
        style.alignItems=props.alignItems;
    }
    if(props.justifyContent) {
        style.justifyContent=props.justifyContent;
    }
    if(props.marginTop) {
        style.marginTop = props.marginTop;
    }
    if(props.marginLeft) {
        style.marginLeft = props.marginLeft;
    }
    if(props.marginRight) {
        style.marginRight = props.marginRight;
    }
    
    return (
        <View
            style={style}
        >
            {props.children}
        </View>
    );
};
 
export {SCol};
