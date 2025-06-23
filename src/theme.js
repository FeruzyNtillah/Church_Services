import { createTheme } from "@mui/material/styles";

export const tokens = (mode = "light") => ({
  primary: {
    400: "#355F5F", // Darkest Teal (hover/dark)
    500: "#4A7E7E", // Darker Teal
    700: "#5F9E9E", // Primary Teal
  },
  blueAccent: {
    500: "#355F5F", // Darkest Teal
    600: "#4A7E7E", // Darker Teal
  },
  grey: {
    100: "#FFFFFF", // White
    300: "#F5F5F5", // Light grey
    700: "#212121", // Dark text
  }
});

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#5F9E9E", // Primary muted teal
      dark: "#355F5F", // Darkest teal (hover/active)
      light: "#8FBDBD", // Light teal (optional)
    },
    secondary: {
      main: "#F5F5F5", // Light grey
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#212121",
      secondary: "#757575",
    },
    action: {
      hover: "#F5F5F5", // Light grey hover (subtle)
      selected: "#E0F2F1", // Very light teal for selected state
    },
  },
  typography: {
    fontFamily: "'Segoe UI', sans-serif",
    fontSize: 14,
    h1: { fontSize: "2rem", fontWeight: 700 },
    h2: { fontSize: "1.5rem", fontWeight: 600 },
    h3: { fontSize: "1.25rem", fontWeight: 500 },
    body1: { fontSize: "1rem" },
    body2: { fontSize: "0.875rem" },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    "none",
    "0 1px 3px rgba(0, 0, 0, 0.1)",
    "0 3px 6px rgba(0, 0, 0, 0.15)",
    "0 10px 20px rgba(0, 0, 0, 0.2)",
    ...Array(21).fill("none"),
  ],
});

export default theme;