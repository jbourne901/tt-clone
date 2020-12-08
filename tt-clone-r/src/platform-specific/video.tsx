import React from "react";
import {ISVideoProps} from "../shared/types/props";
import {evalPix} from "./eval-pix";

const SVideo = (props: ISVideoProps) => {
    const style: React.CSSProperties = {
    };
    if(props.position) {
        style.position = props.position;
    }
    style.top = evalPix(props.top);
    style.bottom = evalPix(props.bottom);
    style.left = evalPix(props.left);
    style.right = evalPix(props.right);

    return (        
        <video
            src = {props.source}
            style = {style}
            onError = {(err) => console.error(err)}
            controls = {false}
            loop = {false}
            muted = {false}

        />
    );
};
 
export {SVideo};
 