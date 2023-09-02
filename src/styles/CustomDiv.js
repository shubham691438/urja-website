import { styled } from "@mui/material";

export const CustomDiv = styled("div")(({ theme }) => {
  return {
    [theme.breakpoints.up("xs")]: {
      fontSize: ".75rem",
      padding: "1vw",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: ".75rem",
      padding: "2vw",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1rem",
      padding: "3vw",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.25rem",
      padding: "4vw",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "1.5rem",
      padding: "5vw",
    },
  };
});
