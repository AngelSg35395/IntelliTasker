import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function ContextNameProvider({ children }) {
    const [theme, setTheme] = useState("light");

    const data = {
        theme,
        setTheme,
    };

    return (
        <ThemeContext.Provider value={{ ...data }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useThemeContext() {
    return useContext(ThemeContext);
}