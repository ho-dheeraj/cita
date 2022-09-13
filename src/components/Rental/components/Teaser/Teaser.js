/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const Teaser = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? "row" : "column"}>
        <Grid
          item
          container
          alignItems={"center"}
          xs={12}
          md={6}
          data-aos={isMd ? "fade-right" : "fade-up"}
        >
          <Box>
            <Typography
              sx={{
                textTransform: "uppercase",
                fontWeight: "medium",
              }}
              gutterBottom
              color={"secondary"}
            >
              Flexible options
            </Typography>
            <Typography variant={"h5"} gutterBottom sx={{ fontWeight: 700 }}>
              Best creative solutions for every{" "}
              <Typography color="primary" variant="inherit" component="span">
                Business need.
              </Typography>
            </Typography>
            <Typography variant={"h6"} component={"p"} color={"text.secondary"}>
              We are Salesforce experts with rich experience in creating
              end-to-end sales and marketing solutions for small to medium-sized
              companies. Our team are highly experienced, trained, motivated and
              driven towards achieving business goals.
              <br />
              We specialise in a wide range of Salesforce platform capabilities
              including App Development, Process Automation, On-Demand Workflow,
              Integrations and Custom Installation.
              <br />
              We strive to be one of the best Salesforce development teams in
              the world and have the most talented, diverse and advanced team in
              the industry.
              <br />
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
        >
          <Box maxWidth={490} width={1}>
            <Box
              component={"img"}
              src={
                "https://assets.maccarianagency.com/svg/illustrations/drawkit-illustration5.svg"
              }
              width={1}
              height={1}
              sx={{
                filter:
                  theme.palette.mode === "dark" ? "brightness(0.8)" : "none",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Teaser;
