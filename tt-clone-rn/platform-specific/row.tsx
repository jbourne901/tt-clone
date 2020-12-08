import React from "react";
import { IDefaultRowColProps } from "../shared/types/props";
import {SView} from "./view";

const SRow = (props: IDefaultRowColProps) => {
    return SView({...props, flexDirection: "row"});
};
 
export {SRow};
