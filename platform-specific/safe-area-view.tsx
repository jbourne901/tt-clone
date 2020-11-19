import React from "react";
import {SafeAreaView} from "react-native";

interface ISSafeAreaViewViewProps {
    children: JSX.Element | JSX.Element[] | undefined;
}

const SSafeAreaView = (props: ISSafeAreaViewViewProps) => {
    return (
        <SafeAreaView>
            {props.children}
        </SafeAreaView>
    );
};

export {SSafeAreaView};

