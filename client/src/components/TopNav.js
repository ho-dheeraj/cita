import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ThemeModeToggler from "../components/ThemeModeToggler";
import EmailIcon from "@mui/icons-material/Email";
import { Button } from "@mui/material";

const TopNav = ({ colorInvert = false }) => {
  return (
    <Box
      sx={{
        height: "30px",
      }}
      display={"flex"}
      justifyContent={"flex-end"}
      alignItems={"center"}
    >
      <Box marginRight={{ xs: 1, sm: 2 }}>
        <Button
          sx={{
            height: "inherit",
            color: "white",
          }}
          variant="dark"
          startIcon={<EmailIcon />}

          // underline="none"
          // component="a"
          // href="/docs/introduction"
        >
          info@cittacore.com
        </Button>
      </Box>
      <Box marginRight={{ xs: 1, sm: 2 }}>
        <Button
          sx={{
            height: "inherit",
            color: "white",
          }}
          variant="dark"
          startIcon={<LocalPhoneIcon />}

          // underline="none"
          // component="a"
          // href="/docs/introduction"
        >
          +1 551 229 1852
        </Button>
      </Box>
      <Box marginRight={{ xs: 1, sm: 2 }}>
        <Button
          sx={{
            height: "inherit",
            color: "white",
          }}
          variant="dark"
          startIcon={<LocationOnIcon />}
          // underline="none"
          // component="a"
          // href="/docs/introduction"
        >
          USA | INDIA
        </Button>
      </Box>
      <Box>
        <ThemeModeToggler />
      </Box>
    </Box>
  );
};

TopNav.propTypes = {
  colorInvert: PropTypes.bool,
};

export default TopNav;
