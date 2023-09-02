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
      backgroundImage: `url("https://th.bing.com/th/id/OIP.5b2qb062nDASDVh_HD8d-AHaEK?w=309&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      color: "transparent",
    },
    h2a: {
      fontSize: "2em",
      fontFamily: "Black Ops One",
      color: "transparent",
      backgroundImage: "linear-gradient(orange,yellow)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      backgroundPosition: "right bottom",
      WebkitTextStroke: "1.2px black",
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
