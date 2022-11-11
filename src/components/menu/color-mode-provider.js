import {createContext, useState} from "react";

export const ColorModeContext = createContext(
    {
        mode: "",
    }
);

function ColorModeProvider(props) {

    const [mode, setMode] = useState(props.initialMode);

    function toggleMode() {
        mode === "light" ? setMode("dark") : setMode("light")
    }

    return (
        <ColorModeContext.Provider value={{mode, toggleMode}}>
            {props.children}
        </ColorModeContext.Provider>
    )
}

export default ColorModeProvider;
