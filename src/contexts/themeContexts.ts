import { createContext } from "react";


export const themes = {
  dark: "dark",
  light: "light",
}

const initialState = {
  theme: themes.dark,
  toogleDarkTheme: () => {},
  toogleLightTheme:()=>{}
}

export const ThemeContext = createContext(initialState)
