import {CSSReset} from "../src/components/cssReset";
import {ThemeProvider} from "styled-components";
import RegisterVideo from "../src/components/registerVideo";
import ColorModeProvider, {ColorModeContext} from "../src/components/menu/color-mode-provider";
import {useContext} from "react";

const theme = {
    "light": {
        backgroundBase: "#F9F9F9",
        backgroundLevel1: "#FFFFFF",
        backgroundLevel2: "#F0F0F0",
        borderBase: "#E5E5E5",
        textColorBase: "#222222"
    },
    "dark": {
        backgroundBase: "#181818",
        backgroundLevel1: "#202020",
        backgroundLevel2: "#313131",
        borderBase: "#383838",
        textColorBase: "#FFFFFF"
    }
}

function ProviderWrapper(props) {
    return (
        <ColorModeProvider initialMode={"dark"}>
            {props.children}
        </ColorModeProvider>
    )
}

function ContentApp({Component, pageProps}) {

    const context = useContext(ColorModeContext);

    return (
        <ThemeProvider theme={theme[context.mode]}>
            <CSSReset/>
            <Component {...pageProps}/>
            <RegisterVideo/>
        </ThemeProvider>
    )
}

export default function _App(props) {
    return (
        <ProviderWrapper>
            <ContentApp {...props}/>
        </ProviderWrapper>
    )
};
