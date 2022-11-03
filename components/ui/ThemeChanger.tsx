import { Box, IconButton } from "@mui/material";
import Cookies from "js-cookie";
import { useState, useEffect, useContext } from 'react';
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { UIContext } from '../../context/ui';

export const ThemeChanger = () => {
  const { changeTheme } = useContext(UIContext);
  const [currentTheme, setCurrentTheme] = useState("light");

  const onThemeChange = (selectedTheme: "light" | "dark") => {
    setCurrentTheme(selectedTheme);

    Cookies.set("theme", selectedTheme);
    changeTheme(selectedTheme);
  };


  useEffect(() => {
    let cookieTheme = Cookies.get('theme') || 'light';
    setCurrentTheme( cookieTheme );
  }, []);

  return (
    <Box>
      {currentTheme === "light" ? (
        <IconButton onClick={() => onThemeChange("dark")}>
          <Brightness4Icon />
        </IconButton>
      ) : (
        <IconButton onClick={() => onThemeChange("light")}>
          <Brightness7Icon />
        </IconButton>
      )}
    </Box>
  );
};
