import React from "react";
import {IFont} from "./font";
import {IIcon} from "../../platform-specific/types";
import {INavOption} from "./nav-option";

export interface IDefaultContainerProps {
    children: JSX.Element | JSX.Element[];
};

export interface IDefaultCenterProps extends IDefaultContainerProps {
    width?: number|string;
    height?: number|string;
    flex?: number;
    backgroundColor?: string;    
    borderBottomRadius?: number;
    marginTop?: number|string;
    marginBottom?: number|string;
    marginLeft?: number|string;
    marginRight?: number|string;
    borderRadius?: number;
    onPress?: () => void;
}

export interface IDefaultRowColProps extends IDefaultCenterProps {
    center?: boolean;
    alignItems?: "center" | "flex-start";
    justifyContent?: "center"|"space-between"|"flex-start";
};

export interface IDefaultViewProps extends IDefaultRowColProps {
    flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
    top?: number|string;
    bottom?: number|string;
    left?: number|string;
    right?: number|string;
    height?: number|string;
    width?: number|string;
}


export interface ISTextProps {
    text: string;
    font?: IFont;
    color?: string;
    align?: "center" | "left" | "right" | "justify";
};



export interface ISButtonProps {
    title?: string;
    backgroundColor: string;
    borderColor?: string;
    borderRadius?: number;
    textColor?: string;
    width?: number;
    height?: number;
    font?: IFont,
    align?: "center"|"flex-start"|"flex-end",
    buttonStyle: "rounded" | "leftrounded" | "plain";
    icon?: IIcon;
    iconSize?: number;
    onPress: () => void;
}



export interface ISBodyProps {
    children: JSX.Element | JSX.Element[] | undefined;
}

export  interface ISListProps<T> {
    list: T[];
    showScrollbar?: boolean;
    keyExtractor?: (item: T, index: number) => string;
    renderItem?: (item: T, index: number) => React.ReactElement;
    width?: string|number;
    horizontal?: boolean;
};


export interface ISStackNavProps {
    showHeader?: boolean;
    initialRoute?: string;
    navOptions: INavOption[];
}


export interface ISImagePropsBase<Source> {
    source: Source;
    width?: number|string;
    height?: number|string;
    borderRadius?: number;
    resizeMode?: "cover"|"contain"|"center";
};


export interface ISVideoProps {
    source: string;
    paused?: boolean;
    position?: "absolute"|"relative";
    top?: number|string;
    left?: number|string;
    right?: number|string;
    bottom?: number|string;
    height?: number|string;
    width?: number|string;
}