import React from "react";
import {ViewStyle} from "react-native";
import Video from "react-native-video";
import {ISVideoProps} from "../shared/types/props";


const SVideo = (props: ISVideoProps) => {
    const style: ViewStyle = {
    };
    if(props.position) {
        style.position = props.position;
    }
    if(props.top) {
        style.top = props.top;
    }
    if(props.bottom) {
        style.bottom = props.bottom;
    }
    if(props.left) {
        style.left = props.left;
    }
    if(props.right) {
        style.right = props.right;
    }
    if(props.height) {
        style.height = props.height;
    }
    if(props.width) {
        style.width = props.width;
    }
    return (        
        <Video
            source = {{uri: props.source}}
            style = {style}
            resizeMode = "cover"
            onError = {(err) => console.error(err)}
            repeat = {false}
            paused = {props.paused}
        />
    );
};
 
export {SVideo};

