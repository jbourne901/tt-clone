import React from "react";
import {View, StyleSheet} from "react-native";

interface ISRightProps {
    children: JSX.Element | JSX.Element[] | undefined;    
};

const SRight = (props: ISRightProps) => {
    return (
        <View
            style={sRightStyle.main}
        >
            {props.children}
        </View>
    );
};

const sRightStyle = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: "flex-end",
        justifyContent: "center"
    },
});



export {SRight};
