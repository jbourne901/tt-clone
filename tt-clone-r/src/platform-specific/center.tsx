import React from "react";
import { IDefaultCenterProps } from "../shared/types/props";
import { SView } from "./view";

const SCenter = (props: IDefaultCenterProps) => {
    return SView( {...props, center: true });
};

export {SCenter};
