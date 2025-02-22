import { ReactNode, useEffect, useMemo, useState } from "react"
import { ThemeContext, themes, } from "./themeContexts"

interface ThemeProviderProps {
  children: ReactNode;
}
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [themeValue, setThemeValue] = useState(themes.dark);

  useEffect(()=>{
    const savedTheme = localStorage.getItem("currentTheme");

    if (savedTheme) {
      try {
        const persistTheme: string = JSON.parse(savedTheme);
        setThemeValue(persistTheme);
      } catch (error) {
        console.error("Ошибка парсинга темы:", error);
      }
    }
  },[themeValue])

  const toogleLightTheme = ()=>{
    setThemeValue(themes.light);
    console.log(themeValue);
  }

  const toogleDarkTheme =() => {
    setThemeValue(themes.dark);
    console.log(themeValue);
  }
  const contextValue = useMemo(() => {
    return { theme: themeValue, toogleDarkTheme, toogleLightTheme}
  }, [themeValue])
  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}
