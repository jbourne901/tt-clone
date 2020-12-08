import React from 'react';
import { IDefaultContainerProps } from '../shared/types/props';

const Preload = (props: IDefaultContainerProps) => {
    return  (   
        <>
            {props.children}
        </>
    );
};

export {Preload};
