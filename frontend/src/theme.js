import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    success: {
      main: "#4caf50",
    },
    bgCol: {
      main: "#222831",
    },
    yellow: {
      main: "#ff9900",
    },
  },
  typography: {
    fontSize: 16,
    h1: {
      fontSize: "6vw",
      fontFamily: "Alfa Slab One",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
    },
    h2a: {
      fontSize: "3rem",
      fontFamily: "Black Ops One",
      color: "orange",
      fontWeight: 700,
    },
    h2b: {
      fontFamily: "Black Ops One",
      color: "black",
      fontSize: "2em",
      position: "relative",
      zIndex: "999",
      bottom: "18%",
      WebkitTextStroke: "1px black",
      WebkitTextFillColor: "red",
    },
    h3: {
      fontWeight: 700,
      fontSize: "2.2rem",
    },
    h4: {
      fontWeight: 700,
      fontSize: "1.75rem",
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
  },
});

export default theme;
