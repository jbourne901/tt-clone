import React from "react";
import {SafeAreaView, StatusBar} from "react-native";
import {ISBodyProps} from "../shared/types/props";

const SBody = (props: ISBodyProps) => {
    return (
        <SafeAreaView style={{flex: 1}}>
            {props.children}
            <StatusBar />
        </SafeAreaView>
    );
};

export {SBody};

