import React from "react";
import {ISImagePropsBase} from "../shared/types/props";

type ISImageProps = ISImagePropsBase<string>;

const SImage = (props: ISImageProps) => {
    const style: React.CSSProperties = {
        background: `url(${props.source}`,
        backgroundRepeat: "no-repeat",
        backgroundSize: props.resizeMode || "cover",
    };
    if(props.width) {
        style.width=props.width;
    }
    if(props.height) {
        style.height=props.height;
    }
    if(props.borderRadius) {
        style.borderRadius=props.borderRadius;
    }

    return (
        <div style={style}></div>
    );
};

export {SImage};
