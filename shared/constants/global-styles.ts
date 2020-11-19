import {getScreenWidth} from "../../platform-specific/dimensions";

const MAX_WIDTH = getScreenWidth();

const GLOBAL_STYLES = {
    REVERSE_TEXT_COLOR: "white",
    MAIN_BG_COLOR: "white",
    SUBHEADER_FONT: {
        fontFamily: "Roboto-Bold", fontSize: 22, lineHeight: 30
    },
    MENU_SELECTED_COLOR: "blue",
    MENU_UNSELECTED_COLOR: "gray",
    BUTTON_BG_COLOR:  "#00996D",
    BUTTON_TEXT_COLOR: "white",
    BUTTON_FONT: {
        fontFamily: "Roboto-Black", fontSize: 30, lineHeight: 36,
    },
    SCREEN_WIDTH: MAX_WIDTH,
    PADDING: 24,
    HOME_TOP_BG_COLOR: "green",
    HOME_TOP_OFFSET: 8,
    HOME_EDGE_OFFSET: 24,
    PLANT_MARGIN: 8,
    CAMERA_BG_COLOR: "green",
    CAMERA_TINT_COLOR: "white",
    CAMERA_SIZE: 40,
    CAMERA_ICON_SIZE: 23,
};

export {GLOBAL_STYLES};
