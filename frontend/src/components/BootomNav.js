import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import HomeIcon from "@mui/icons-material/Home";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { Link } from "react-router-dom";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: "100%" }}>
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
          icon={
            <HomeIcon style={{ color: value === 0 ? "white" : "#ee1e46" }} />
          }
          style={{ color: value === 0 ? "white" : "#ee1e46" }}
        />
        <BottomNavigationAction
          component={Link}
          to="/Matches"
          label="Matches"
          icon={
            <EmojiEventsIcon
              style={{ color: value === 1 ? "white" : "#ee1e46" }}
            />
          }
          style={{ color: value === 1 ? "white" : "#ee1e46" }}
        />
        <BottomNavigationAction
          component={Link}
          to="/Results"
          label="Results"
          icon={
            <LeaderboardIcon
              style={{ color: value === 2 ? "white" : "#ee1e46" }}
            />
          }
          style={{ color: value === 2 ? "white" : "#ee1e46" }}
        />
        <BottomNavigationAction
          component={Link}
          to="/our-team"
          label="Our Team"
          icon={
            <HomeIcon style={{ color: value === 3 ? "white" : "#ee1e46" }} />
          }
          style={{ color: value === 3 ? "white" : "#ee1e46" }}
        />
      </BottomNavigation>
    </Box>
  );
}
