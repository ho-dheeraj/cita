/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { alpha, useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import InputAdornment from "@mui/material/InputAdornment";
import img from "./image.jpg";
import Container from "../../../Container";

const Hero = () => {
  const theme = useTheme();

  return (
    <Box
      minHeight={500}
      height={"auto"}
      position={"relative"}
      sx={{
        backgroundColor: theme.palette.alternate.main,
        background: `url(${img}) no-repeat center`,
        backgroundSize: "cover",
        marginTop: -13,
        paddingTop: 13,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: 1,
          height: 1,
          // background: alpha(theme.palette.primary.dark, 0.3),
          zIndex: 1,
        }}
      />
      <Container position={"relative"} zIndex={2}>
        <Box>
          <Box marginBottom={4} data-aos="fade-up">
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontWeight: 900,
                color: "common.white",
              }}
            >
              Welcome to CittaCore Technologies
            </Typography>
            <Typography
              variant="h5"
              component="p"
              color="text.primary"
              sx={{
                fontWeight: 400,
                color: "common.white",
              }}
            >
              Your Trusted Salesforce Consulting Partner for all your Digital
              Transformation Needs
              <br />
              {/* With World Class Tech and a Passionate team, we achieve your
              Business Objectives */}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Button
            sx={{
              fontSize: "1.6rem",
              height: 54,
              width: "12rem",
              whiteSpace: "nowrap",
            }}
            variant="contained"
            color="primary"
            size="medium"
          >
            Get Started
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
