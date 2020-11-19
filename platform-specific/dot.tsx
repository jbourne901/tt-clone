import React from "react";
import {View, StyleSheet, ViewStyle} from "react-native";

interface IDotProps {
    color?: string;
    opacity?: number;
    size: number;
}

const Dot = (props: IDotProps) => {
    const style: ViewStyle = {...dotStyle.main, width: props.size, height: props.size, backgroundColor: undefined, opacity: 1};
    if(props.color) {
        style.backgroundColor = props.color;
    }    
    if(props.opacity) {
        style.opacity=props.opacity;
    }
    return (
       <View style={style}>
       </View> 
    );    
};

const dotStyle = StyleSheet.create( {
    main: {
        borderRadius: 12,
        marginLeft: 12/2,
        marginRight: 12/2,
        backgroundColor: "white"
    },
})
 
export {Dot};
