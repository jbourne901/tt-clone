const evalPix = (p: number|string|undefined) => {
    if(p) {
        const p1 = `${p}`.trim();
        if(p1.charAt(p1.length)==='%') {
            return p1;
        }        
        return p;
    }
    return undefined;
};

export {evalPix};
    
