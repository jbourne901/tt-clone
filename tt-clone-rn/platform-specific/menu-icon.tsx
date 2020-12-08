import React from "react";
import {Image, StyleSheet, ImageStyle} from "react-native";
import {GLOBAL_STYLES} from "../shared/constants/global-styles";
import { IIcon } from "../shared/types/icon";

interface ISMenuIconProps {
    focused: boolean;
    icon: IIcon;
    size?: number;
    resizeMode?: "cover"|"contain"|"center";
    backgroundColor?: string;
    tintColor?: string;
}

const SMenuIcon = (props: ISMenuIconProps) => {
    const style: ImageStyle = { tintColor: GLOBAL_STYLES.MENU_UNSELECTED_COLOR, width: undefined, height: undefined };
    if(props.focused) {
        style.tintColor = GLOBAL_STYLES.MENU_SELECTED_COLOR;
    }
    if(props.size) {
        style.width=props.size;
        style.height=props.size;
    }
    if(props.backgroundColor) {
        style.backgroundColor = props.backgroundColor;
    }
    if(props.tintColor) {
        style.tintColor = props.tintColor;
    }

    let resizeMode = props.resizeMode;
    if(!resizeMode) {
        resizeMode = "center";
    }

    return (
        <Image 
            source={props.icon}
            resizeMode={resizeMode}
            style={style}
            width={props.size}
            height={props.size}
        />
    )
};
 

export {SMenuIcon};
