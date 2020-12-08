import React from "react";
import {SText} from "./text";
import {ISListProps} from "../shared/types/props";


function SScrollList<T> (props: ISListProps<T>) {
    const extractKey = (item: T, index: number) => {
        if(props.keyExtractor) {
            return props.keyExtractor(item, index);
        }
        const key = (item as any).key;
        if(key) {
            return ""+key;
        }
        return ""+index;
    };
    const renderItem = (item: T, index: number) => {
        if(props.renderItem) {
            return props.renderItem(item, index);
        }
        const text = ""+(item as any).value;
        return (
            <SText text={text} />
        );
    };

    let style: React.CSSProperties = {
        flexDirection: "column"
    };
    if(props.horizontal) {
        style.flexDirection= "row";
    }
    style.display = "flex";
    style.overflow = "scroll";
    if(props.width) {
        style.width=props.width;
    }
    const jsxItems: JSX.Element[] = [];
    for(let i=0; i<props.list.length; i++) {
        const item = props.list[i];
        const key = extractKey(item, i);
        const it = renderItem(item, i);
        jsxItems.push((<div key={key}>{it}</div>));
    }

    return (
        <div
            style={style}
        >
            {jsxItems}
        </div>
    );
};
 
export {SScrollList};
