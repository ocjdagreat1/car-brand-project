// src/context/ThemeContext.jsx
import React, { createContext, useMemo, useState, useEffect } from "react";
import { createTheme, ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export const ThemeContext = createContext({
  mode: "light",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  // load saved mode or respect system preference fallback to 'light'
  const [mode, setMode] = useState(() => {
    try {
      return localStorage.getItem("themeMode") || "light";
    } catch {
      return "light";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("themeMode", mode);
    } catch {}
  }, [mode]);

  const toggleTheme = () => setMode((m) => (m === "light" ? "dark" : "light"));

  // create MUI theme based on mode (memoized)
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                // light palette overrides
                background: { default: "#f5f6fa", paper: "#ffffff" },
                primary: { main: "#1976d2" },
                secondary: { main: "#ff9800" },
                text: { primary: "#111827", secondary: "#374151" },
              }
            : {
                // dark palette overrides
                background: { default: "#0f1720", paper: "#111827" },
                primary: { main: "#90caf9" },
                secondary: { main: "#ffb74d" },
                text: { primary: "#e6eef8", secondary: "#cbd5e1" },
              }),
        },
        components: {
          // small global adjustments (optional)
          MuiAppBar: {
            styleOverrides: {
              colorPrimary: {
                backgroundColor: mode === "light" ? "#1c1c1c" : "#0b1220",
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
};
