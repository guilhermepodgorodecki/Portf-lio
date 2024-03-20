import { themes } from "src/styles";

export type ThemeProviderProps = {
    children: React.ReactNode;
};

export type ThemeContextProps = {
    handleThemeChange: (selectedTheme: string) => void;
};

export type Theme = typeof themes.light;
export type SelectedTheme = keyof typeof themes;
