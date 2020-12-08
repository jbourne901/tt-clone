const getScreenWidth = () => {
    return 768;
}

const getScreenWidthPercent = (prc: number) => {
    return getScreenWidth() * prc / 100.0;
};

export {getScreenWidth, getScreenWidthPercent};
