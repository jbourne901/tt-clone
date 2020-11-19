import React from "react";
import {Text, TextStyle} from "react-native";
import {ISTextProps} from "../shared/types/props";

const SText = (props: ISTextProps) => {
    let style: TextStyle = {textAlign: "center"};
    if(props.font) {
        style={...style, ...props.font};
    }
    if(props.color) {
        style.color = props.color;
    }
    if(props.align) {
        style.textAlign = props.align;
    }
    return (
        <Text style={style}>{props.text}</Text>
    );
};

export {SText};
