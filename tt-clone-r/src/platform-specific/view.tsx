import React from "react";
import {IDefaultViewProps} from "../shared/types/props";
import {evalPix} from "./eval-pix";

const SView = (props: IDefaultViewProps) => {
    const style: React.CSSProperties = {
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
        style.flex=1;
        style.display = "flex";
    }
    style.top = evalPix(props.top);
    style.bottom = evalPix(props.bottom);
    style.left = evalPix(props.left);
    style.right = evalPix(props.right);
    if(props.backgroundColor) {
        style.backgroundColor = props.backgroundColor;
    }
    if(props.borderBottomRadius) {
        style.borderBottomLeftRadius=props.borderBottomRadius;
        style.borderBottomRightRadius=props.borderBottomRadius;
    }
    style.marginLeft = evalPix(props.marginLeft);
    style.marginRight = evalPix(props.marginRight);
    style.marginTop = evalPix(props.marginTop);
    style.marginBottom = evalPix(props.marginBottom);
    if(props.justifyContent) {
        style.justifyContent = props.justifyContent;
    }
    if(props.alignItems) {
        style.alignItems = props.alignItems;
    }
    if(props.borderRadius) {
        style.borderRadius = props.borderRadius;
    }
    if(props.onPress) {
        const onPress = props.onPress;
        return (
            <div
                style={style}            
                onClick = {() => onPress()}
            >
                {props.children}
            </div>
        );
    }
    return (
        <div
            style={style}            
        >
            {props.children}
        </div>
    );
};
 
export {SView};
