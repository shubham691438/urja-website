import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import HomeIcon from "@mui/icons-material/Home";
import ScoreboardIcon from "@mui/icons-material/Scoreboard";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { Link, useLocation } from "react-router-dom";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const location = useLocation();
  return (
    <Box
      sx={{
        width: "100%",
        "@media (max-width: 600px)": {
          position: "fixed",
          bottom: 1,
          left: 0,
          right: 0,
        },
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        style={{ backgroundColor: "black" }}
      >
        <BottomNavigationAction
          component={Link}
          to="/"
          label="Home"
          onMouseEnter={() => setValue(0)}
          icon={
            <HomeIcon
              style={{
                color:
                  value === 0 || location.pathname === "/"
                    ? "white"
                    : "#ee1e46",
              }}
            />
          }
          style={{
            color:
              value === 0 || location.pathname === "/" ? "white" : "#ee1e46",
            textDecoration: "none",
          }}
        />
        <BottomNavigationAction
          component={Link}
          to="/Matches"
          label="Matches"
          onMouseEnter={() => setValue(1)}
          icon={
            <EmojiEventsIcon
              style={{
                color:
                  value === 1 || location.pathname === "/Matches"
                    ? "white"
                    : "#ee1e46",
              }}
            />
          }
          style={{
            color:
              value === 1 || location.pathname === "/Matches"
                ? "white"
                : "#ee1e46",
            textDecoration: "none",
          }}
        />

        <BottomNavigationAction
          component={Link}
          to="/our-team"
          label="Our Team"
          onMouseEnter={() => setValue(3)}
          icon={
            <HomeIcon
              style={{
                color:
                  value === 3 || location.pathname === "/our-team"
                    ? "white"
                    : "#ee1e46",
              }}
            />
          }
          style={{
            color:
              value === 3 || location.pathname === "/our-team"
                ? "white"
                : "#ee1e46",
            textDecoration: "none",
          }}
        />
        <BottomNavigationAction
          component={Link}
          to="/points"
          label="Points Table"
          onMouseEnter={() => setValue(4)}
          icon={
            <ScoreboardIcon
              style={{
                color:
                  value === 4 || location.pathname === "/points"
                    ? "white"
                    : "#ee1e46",
              }}
            />
          }
          style={{
            color:
              value === 4 || location.pathname === "/points"
                ? "white"
                : "#ee1e46",
            textDecoration: "none",
          }}
        />
      </BottomNavigation>
    </Box>
  );
}
