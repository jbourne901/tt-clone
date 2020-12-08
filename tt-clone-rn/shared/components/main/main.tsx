
import React from "react";
import { Preload } from "../../../platform-specific/preload";
import { INavOption } from "../../types/nav-option";
import { SNavigationContainer } from "../../../platform-specific/navigation-container";
import { SStackNav } from "../../../platform-specific/stack-nav";
import {Home} from "../home";
 
const navOptions: INavOption[] = [
    {name: "Home", component: Home },
];

const Main = () => {
    
    return (
    <Preload>
        <SNavigationContainer>
            <SStackNav
                showHeader={false}
                initialRoute={"Home"}
                navOptions = {navOptions}
            />
        </SNavigationContainer>
    </Preload>
    );
};

export {Main};
 

