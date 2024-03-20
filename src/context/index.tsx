import { createContext, useState} from 'react'
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { themes } from 'src/styles'
import { SelectedTheme, Theme, ThemeContextProps, ThemeProviderProps } from 'src/types/context';

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}:ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>(themes.light)
    const handleThemeChange = (selectedTheme: string) => {
        if(selectedTheme === "") return
        const newTheme = selectedTheme as SelectedTheme
        setTheme(themes[newTheme] as Theme);
    };
    return (
        <ThemeContext.Provider value={{handleThemeChange}}>
            <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
        </ThemeContext.Provider>
    )
}