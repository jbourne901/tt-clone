import React from "react";
import {ISButtonProps} from "../shared/types/props";

const RADIUS = 30;


const SButton = (props: ISButtonProps) =>  {
    const style: React.CSSProperties = {        
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
        let textStyle: React.CSSProperties = {
            color: props.textColor,
        };
        if(props.font) {
            textStyle = {...textStyle, ...props.font};
        }
        jsxText=(
            <p style={textStyle}>
                {props.title}
            </p>
        );
    }
    let jsxIcon: JSX.Element|undefined = undefined;
    if(props.icon) {
        const iconStyle: React.CSSProperties = {
            background: `url(${props.icon}`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
        };
        if(props.iconSize) {            
            iconStyle.width = props.iconSize;
            iconStyle.height = props.iconSize;
        }
        jsxIcon=(
            <div                
                style={iconStyle}
            ></div>
        );
    }
    return (
        <div
            onClick = {() => props.onPress()}
            onTouchEnd = {() => props.onPress()}
            style={style}
        >
            {jsxText}
            {jsxIcon}
        </div>
    );
};

export {SButton};
