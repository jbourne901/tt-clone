import React from "react";
import {SafeAreaView, StyleSheet} from "react-native";

interface ISSafeAreaViewFlexCenterProps {
    backgroundColor?: string;
    children: JSX.Element | JSX.Element[] | undefined;
}

const SSafeAreaViewFlexCenter = (props: ISSafeAreaViewFlexCenterProps) => {
    const style = {...sSafeAreaViewFlexCenterStyle.main, backgroundColor: props.backgroundColor};
    return (
        <SafeAreaView style={style}>
            {props.children}
        </SafeAreaView>
    );
};

const sSafeAreaViewFlexCenterStyle = StyleSheet.create({
    main: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        borderWidth: 0,
    },
});


export {SSafeAreaViewFlexCenter};

