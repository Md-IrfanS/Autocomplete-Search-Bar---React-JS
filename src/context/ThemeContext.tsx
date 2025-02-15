import { createContext, useContext, useEffect, useState } from "react";
import { Theme, ThemeContextProps } from "../types/theme";

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({children}: {children: React.ReactNode})=> {
    const [theme, setTheme] = useState<Theme>(()=> {
        return (localStorage.getItem('theme') as Theme) || "system"
    });

    useEffect(()=> {
        const root = document.documentElement;
        const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        if (theme === "dark" || (theme === "system" && systemDark)) {
            root.classList.add('dark');
        }else{
            root.classList.remove('dark');
        }

        localStorage.setItem('theme', theme);
    },[theme]);
    
    return <ThemeContext.Provider value={{theme, setTheme}}>{children}</ThemeContext.Provider>
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('useTheme must be used within a ThemeProvider');
    return context
};