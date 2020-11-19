import {ReactElement} from "react";
import {IIcon} from "./icon";

export interface INavOption {
    name: string;
    component: (props: any, context?: any) => ReactElement<any, any> | null;
    icon?: IIcon;
    customElement?: JSX.Element;
}