import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {ISStackNavProps} from "../shared/types/props";

const Stack = createStackNavigator();
 
const SStackNav = (props: ISStackNavProps) => {
    const screenOpts = {
        headerShown: props.showHeader||false
    };
    const jsxOptions: JSX.Element[] = [];
    for(let p of props.navOptions) {
        jsxOptions.push( (
            <Stack.Screen 
                key={p.name}
                name={p.name}
                component={p.component}
                options={screenOpts}
            />
        ) );         
    }
    return (
        <Stack.Navigator
            screenOptions={screenOpts}
            initialRouteName={"Home"}
        >
            {jsxOptions}
        </Stack.Navigator>
    );
};

export {SStackNav};
