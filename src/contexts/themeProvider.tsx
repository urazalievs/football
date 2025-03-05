import { ReactNode, useEffect, useMemo, useState } from "react"
import { ThemeContext, themes, } from "./themeContexts"

interface ThemeProviderProps {
  children: ReactNode;
}
export const ThemeProvider = ({ children }: ThemeProviderProps) => {

  const [themeValue, setThemeValue] = useState(() => {
    try {
      const savedTheme = localStorage.getItem("currentTheme");
      return savedTheme ? JSON.parse(savedTheme) : themes.dark;
    } catch (error) {
      console.error("Ошибка парсинга темы:", error);
      return themes.dark;
    }
  });

  useEffect(() => {
    localStorage.setItem("currentTheme", JSON.stringify(themeValue));
  }, [themeValue]);

  const toogleLightTheme = () => {
    setThemeValue(themes.light);
  };

  const toogleDarkTheme = () => {
    setThemeValue(themes.dark);
  };

  const contextValue = useMemo(() => {
    return { theme: themeValue, toogleDarkTheme, toogleLightTheme };
  }, [themeValue]);
  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}
