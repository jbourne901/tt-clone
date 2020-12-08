import React from "react";
import {ISBodyProps} from "../shared/types/props";

const SBody = (props: ISBodyProps) => {
    return (
        <div style={{flex: 1}}>
            {props.children}
        </div>
    );
};

export {SBody};

