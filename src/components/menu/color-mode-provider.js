import {createContext} from "react";

export const ColorModeContext = createContext({mode: "light"});

export default function ColorModeProvider({props}) {
    return (
        <ColorModeContext.Provider value={{mode: props.initialMode}}>
            {props.children}
        </ColorModeContext.Provider>
    )
}
