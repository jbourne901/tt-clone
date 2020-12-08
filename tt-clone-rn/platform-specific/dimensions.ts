import {Dimensions} from "react-native";

const getScreenWidth = () => {
    return Dimensions.get("screen").width;
};

const getScreenHeight = () => {
    return Dimensions.get("screen").height;
};

const getScreenHeightPercent = (prc: number) => {
    return getScreenHeight() * prc / 100.0;
};

const getScreenWidthPercent = (prc: number) => {
    return getScreenWidth() * prc / 100.0;
};

export {getScreenWidth, getScreenHeight, getScreenHeightPercent, getScreenWidthPercent};
