import React from "react";
import {FlatList, ListRenderItemInfo, ViewStyle} from "react-native";
import {SText} from "./text";
import {ISSelectionListProps} from "../shared/types/props";

function SSelectionList<T> (props: ISSelectionListProps<T>) {
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

    const style: ViewStyle = {
    }
    if(props.width) {
        style.width=props.width;
    }

    const horizontal: boolean = props.horizontal || false;
    const showHorizontalScrollIndicator = (horizontal && props.showScrollbar) ? true : false;
    const showVerticalScrollIndicator = (!horizontal && props.showScrollbar) ? true : false;
    
    return (
        <FlatList<T>
            style={style}
            showsHorizontalScrollIndicator={showHorizontalScrollIndicator}
            showsVerticalScrollIndicator={showVerticalScrollIndicator}
            
            data = {props.list}
            keyExtractor = {(item: T, index: number) => extractKey(item, index)}
            renderItem = {(p: ListRenderItemInfo<T>) => renderItem(p.item, p.index)}
        />
    );
};
 
export {SSelectionList};
