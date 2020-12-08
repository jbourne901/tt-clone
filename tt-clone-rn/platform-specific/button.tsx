import React from "react";
import {TouchableOpacity, Image, ImageStyle, Text, ViewStyle, TextStyle} from "react-native";
import { IFont } from "../shared/types/font";
import { IIcon } from "./types";

const RADIUS = 30;

interface ISButtonProps {
    title?: string;
    backgroundColor: string;
    borderColor?: string;
    borderRadius?: number;
    textColor?: string;
    width?: number;
    height?: number;
    font?: IFont,
    align?: "center"|"flex-start"|"flex-end",
    buttonStyle: "rounded" | "leftrounded" | "plain";
    icon?: IIcon;
    iconSize?: number;
    iconTintColor?: string;
    onPress: () => void;
}

const SButton = (props: ISButtonProps) =>  {
    const style: ViewStyle = {        
        width: undefined,
        alignItems: "center",
        justifyContent: "center",
        padding: 6
    };
    if(props.align) {
        style.alignItems=props.align;
    }
    if(props.backgroundColor) {
        style.backgroundColor = props.backgroundColor;
    }
    if(props.borderColor) {
        style.borderColor = props.borderColor;
    }
    if(props.buttonStyle==="leftrounded" || props.buttonStyle==="rounded") {
        style.borderTopLeftRadius = RADIUS;
        style.borderBottomLeftRadius = RADIUS;
        if(props.borderRadius) {
            style.borderTopLeftRadius = props.borderRadius;
            style.borderBottomLeftRadius = props.borderRadius;
        }
    }
    if(props.buttonStyle==="rounded") {
        style.borderTopRightRadius = RADIUS;
        style.borderBottomRightRadius = RADIUS;
        if(props.borderRadius) {
            style.borderTopRightRadius = props.borderRadius;
            style.borderBottomRightRadius = props.borderRadius;
        }
    }
    if(props.borderColor) {
        style.borderColor = props.borderColor;
        style.borderWidth = 1;
    }
    if(props.width) {
        style.width=props.width;
    }
    if(props.height) {
        style.height=props.height;
    }
    let jsxText: JSX.Element|undefined = undefined;
    if(props.title) {
        let textStyle: TextStyle = {
            color: props.textColor,
        };
        if(props.font) {
            textStyle = {...textStyle, ...props.font};
        }
        jsxText=(
            <Text style={textStyle}>
                {props.title}
            </Text>
        );
    }
    let jsxIcon: JSX.Element|undefined = undefined;
    if(props.icon) {
        const iconStyle: ImageStyle = {
            resizeMode: "contain",
            width: undefined,
            height: undefined
        };
        if(props.iconSize) {            
            iconStyle.width = props.iconSize;
            iconStyle.height = props.iconSize;
        }
        if(props.iconTintColor) {
            iconStyle.tintColor = props.iconTintColor;
        }
        jsxIcon=(
            <Image 
                source={props.icon}
                style={iconStyle}
            />
        );
    }
    return (
        <TouchableOpacity
            onPress = {() => props.onPress()}
            style={style}
        >
            {jsxText}
            {jsxIcon}
        </TouchableOpacity>
    );
};

export {SButton};
