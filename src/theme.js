import { createTheme } from "@mui/material/styles";

export const tokens = (mode = "light") => ({
  primary: {
    400: "#1976D2", // Primary blue
    500: "#1565C0", // Darker blue
    700: "#0D47A1", // Darkest blue
  },
  blueAccent: {
    500: "#2196F3", // Light blue
    600: "#1E88E5", // Medium blue
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
      main: "#1976D2",
    },
    secondary: {
      main: "#F5F5F5",
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#212121",
      secondary: "#757575",
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