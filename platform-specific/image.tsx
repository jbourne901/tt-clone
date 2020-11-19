import React from "react";
import {Image, ImageRequireSource, ImageStyle} from "react-native";

import {ISImagePropsBase} from "../shared/types/props";

type ISImageProps = ISImagePropsBase<ImageRequireSource>;


const SImage = (props: ISImageProps) => {
    const style: ImageStyle = {width: "100%", height: "100%"};
    if(props.width) {
        style.width=props.width;
    }
    if(props.height) {
        style.height=props.height;
    }
    if(props.borderRadius) {
        style.borderRadius=props.borderRadius;
    }
    if(props.resizeMode) {
        style.resizeMode = props.resizeMode;
    }

    return (
        <Image 
            source={props.source}
            style={style}
            resizeMode="cover"
        />
    );
};

export {SImage};
