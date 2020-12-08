import React from "react";
import {Route} from "@react-navigation/native";
import {createBottomTabNavigator, BottomTabBarOptions,
     BottomTabNavigationOptions, } from "@react-navigation/bottom-tabs";
import {SMenuIcon} from "./menu-icon";
import { INavOption } from "../shared/types/nav-option";
import { ViewStyle } from "react-native";

type INavRoute = Route<string, object | undefined>; 

interface IGetNavOptionsParams {
    route: INavRoute;
    navigation: any;
}

interface IGetTabBarIconParams {
    focused: boolean;
    color: string;
    size: number;
}

const Tab = createBottomTabNavigator();

interface ISBottomTabNavProps {
    navOptions: INavOption[];
    showLabels?: boolean;
    height?: string|number;
    iconSize?: number;
}

const SBottomTabNav = (props: ISBottomTabNavProps) => {

    const navStyle: ViewStyle = {height: undefined};
    if(props.height) {
        navStyle.height = props.height;
    }
    const showLabels: boolean = props.showLabels || false;
    const tabOptions: BottomTabBarOptions = {
        showLabel: showLabels,
        style: navStyle,
    };

    let jsxTabs: JSX.Element[] = [];
    const map = new Map<string, INavOption>();
    for(let navOption of props.navOptions) {
        map.set(navOption.name, navOption);
        jsxTabs.push( (
            <Tab.Screen
                key={navOption.name}
                name={navOption.name}
                component={navOption.component}
            />
        ) );
    }

    const getTabBarIcon = (routeName: string, p: IGetTabBarIconParams) => {
        const navOption = map.get(routeName);
        if(navOption && navOption.customElement) {
            return navOption.customElement;            
        }
        if(navOption && navOption.icon) {
            return (
                <SMenuIcon 
                    focused = {p.focused} 
                    icon={navOption.icon} 
                    size={props.iconSize}
                />
            );
        }
    };
    
    const getNavOptions = (p: IGetNavOptionsParams): BottomTabNavigationOptions => {
        const opt: BottomTabNavigationOptions = {
            tabBarIcon: (q: IGetTabBarIconParams) => getTabBarIcon(p.route.name, q)
        };
        return opt;
    };

    return (
        <Tab.Navigator
            tabBarOptions={tabOptions}
            screenOptions = { (p: IGetNavOptionsParams) => getNavOptions(p) }
        >
            {jsxTabs}
        </Tab.Navigator>
    );
};

export {SBottomTabNav};
