import React, { createContext, useState, useContext, useEffect } from "react";

interface Props {
  children: React.ReactNode;
}
export type ThemeContextType = {
  theme: boolean;
  changeTheme: (theme: boolean) => void;
  desktop: boolean;
};
export const ThemeContext = createContext<ThemeContextType>({
  theme: true,
  changeTheme: (theme: boolean) => {},
  desktop: true,
});
export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, changeTheme] = useState<boolean>(true);
  const [desktop, setDesktop] = useState(false);
  useEffect(() => {
    const handleSize = () => {
      if (window.innerWidth > 768) {
        setDesktop(true);
      } else {
        setDesktop(false);
      }
    };
    window.addEventListener("resize", handleSize);
    handleSize();
    return () => window.removeEventListener("resize", handleSize);
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, changeTheme, desktop }}>
      {children}
    </ThemeContext.Provider>
  );
};
export const useTheme = () => useContext(ThemeContext);
