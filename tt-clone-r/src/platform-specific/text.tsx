import React from 'react';
import {ISTextProps} from "../shared/types/props";

const SText = (props: ISTextProps) => {
    let style: React.CSSProperties = {textAlign: "center"};
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
        <p style={style}>{props.text}</p>
    )
}
export {SText};


