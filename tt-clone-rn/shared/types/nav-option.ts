import {ReactElement} from "react";
import {IIcon} from "../../platform-specific/types";

export interface INavOption {
    name: string;
    component: (props: any, context?: any) => ReactElement<any, any> | null;
    icon?: IIcon;
    customElement?: JSX.Element;
}