import React from "react";
import {Animated, NativeSyntheticEvent, NativeScrollEvent} from "react-native";
import {IPoint} from "../shared/types/point";

interface ISPageScrollViewProps {
    children: JSX.Element | JSX.Element[] | undefined;
    horizontal?: boolean;
    showHorizontalScrollbar?: boolean;
    onScroll?: (offset: IPoint) => void;
}

const SPageScrollView = (props: ISPageScrollViewProps) => {
    let horizontal = true;
    if(props.horizontal!==undefined) {
        horizontal=props.horizontal;
    }
    const handleScroll = (evt: NativeSyntheticEvent<NativeScrollEvent>) => {
        //const tmp = Animated.divide(evt.nativeEvent.contentOffset.x , getScreenWidth())
        if(props.onScroll) {
            props.onScroll(evt.nativeEvent.contentOffset);
        }
    };


    return (
        <Animated.ScrollView
            horizontal={horizontal}
            pagingEnabled={true}
            snapToAlignment="center"
            showsHorizontalScrollIndicator={props.showHorizontalScrollbar}
            decelerationRate={0}
            scrollEventThrottle={16}
            onScroll = { (evt) => handleScroll(evt)}
        >
            {props.children}
        </Animated.ScrollView>
    );
};

export {SPageScrollView};

