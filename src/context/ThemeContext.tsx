import {createContext, useContext, useState, type ReactNode} from "react";

export type ThemeMode = "light" | "dark";

type ThemeContextType = {
    mode: ThemeMode;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeModeProvider({children} : {children: ReactNode}) {
    const [mode, setMode] = useState<ThemeMode>("dark");

    const toggleTheme = () => {
        setMode(prev => (prev === "dark" ? "light" : "dark"));
    };

    return (
        <ThemeContext.Provider value={{ mode, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext);

    if(!context) {
        throw new Error("useTheme must be used within ThemeProvider");
    }

    return context;
}