import React from "react";
import {View, ViewStyle} from "react-native";

interface ISBorderLayoutProps {
    header?: JSX.Element;
    left?: JSX.Element;
    right?: JSX.Element;
    footer?: JSX.Element;
    children: JSX.Element | JSX.Element[] | undefined;
    headerHeight?: number|string;
    footerHeight?: number|string;
    centerHeight?: number|string;
    debug?: boolean;
};

const SBorderLayout = (props: ISBorderLayoutProps) => {
    let jsxHdr: JSX.Element|undefined = undefined;    
    if(props.header) {
        const headerStyle: ViewStyle = {height: "100%", width: "100%", backgroundColor: undefined};
        if(props.headerHeight) {
            headerStyle.height=props.headerHeight;
        }        
        if(props.debug) {
            headerStyle.backgroundColor="red";
        }
        jsxHdr = <View style={headerStyle}>{props.header}</View>
    };

    let jsxFooter: JSX.Element|undefined = undefined;
    if(props.footer) {
        const footerStyle: ViewStyle = {height: "100%", width: "100%"};
        if(props.footerHeight) {
            footerStyle.height=props.footerHeight;
        }
        if(props.debug) {
            footerStyle.backgroundColor="red";
        }
        jsxFooter = <View style={footerStyle}>{props.footer}</View>
    };

    let jsxLeft: JSX.Element|undefined = undefined;
    if(props.left) {
        const leftStyle = {height: "100%", width: "100%"};
        jsxLeft = <View style={leftStyle}>{props.left}</View>
    };
    let jsxRight: JSX.Element|undefined = undefined;
    if(props.right) {
        const rightStyle = {height: "100%", width: "100%"};
        jsxRight = <View style={rightStyle}>{props.right}</View>
    };

    const centerStyle: ViewStyle = {flex: 1, height: "100%", width: "100%"};
    if(props.centerHeight) {
        centerStyle.height=props.centerHeight;        
    }
    const jsxCenter = (
        <View style={centerStyle}>
            {props.children}
        </View>
    );

    const jsxHorizontal: JSX.Element = (
        <View style={{flexDirection: "row", flex: 1}}>
            {jsxLeft}            
            {jsxCenter}
            {jsxRight}
        </View>
    );


    let jsxVertical: JSX.Element = (
        <View style={ {flexDirection: "column", flex: 1, width: "100%"} }>
            {jsxHdr}
            {jsxHorizontal}
            {jsxFooter}
        </View>
    );


    return jsxVertical;
};
 
export {SBorderLayout};
