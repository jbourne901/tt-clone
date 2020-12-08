import React from "react";
import {ViewStyle} from "react-native";
import {IDefaultViewProps} from "../shared/types/props";
import { TouchableOpacity } from "react-native-gesture-handler";

const SView = (props: IDefaultViewProps) => {
    const style: ViewStyle = {
    };
    if(props.flex) {
        style.flex=props.flex;
    }
    if(props.flexDirection) {
        style.flexDirection = props.flexDirection;
    }
    if(props.center) {
        style.alignItems = "center";
        style.justifyContent = "center";
        style.flex = 1;
    }
    if(props.width) {
        style.width = props.width;
    }
    if(props.height) {
        style.height = props.height;
    }
    if(props.backgroundColor) {
        style.backgroundColor = props.backgroundColor;
    }
    if(props.borderBottomRadius) {
        style.borderBottomLeftRadius=props.borderBottomRadius;
        style.borderBottomRightRadius=props.borderBottomRadius;
    }
    if(props.marginLeft) {
        style.marginLeft = props.marginLeft;
    }
    if(props.marginRight) {
        style.marginRight = props.marginRight;
    }
    if(props.marginTop) {
        style.marginTop = props.marginTop;
    }
    if(props.justifyContent) {
        style.justifyContent = props.justifyContent;
    }
    if(props.alignItems) {
        style.alignItems = props.alignItems;
    }
    if(props.borderRadius) {
        style.borderRadius = props.borderRadius;
    }

    return (

        <TouchableOpacity
            style={style}
        >
            {props.children}
        </TouchableOpacity>
    );
};
 
export {SView};
