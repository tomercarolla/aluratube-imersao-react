import {CSSReset} from "../src/components/cssReset";
import {ThemeProvider} from "styled-components";
import {darkTheme, lightTheme} from "../src/theme/schema";
import {useState} from "react";

function App({Component, pageProps}) {

    const [theme, setTheme] = useState("light")

    const toggleTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <CSSReset/>
            <Component {...pageProps} toggleTheme={toggleTheme}/>
        </ThemeProvider>
    )
}

export default App;
