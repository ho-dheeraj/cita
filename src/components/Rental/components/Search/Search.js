import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Search = () => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h5"
          data-aos={"fade-up"}
          align={"center"}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          With World Class Tech and a Passionate team, we achieve your Business
          Objectives
        </Typography>
        <Typography
          variant="h6"
          color={"text.secondary"}
          align={"center"}
          data-aos={"fade-up"}
        >
          After 3 days all of your offers will arrive and you will have another
          7 days to select your new company.
          <br />
          We make sure to include all the amenities and niceties that a growing
          startup could possibly need.
        </Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={8} sm={4}>
          <Box
            padding={{ xs: 3, sm: 6 }}
            width={1}
            component={Card}
            boxShadow={4}
            data-aos="fade-up"
          >
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={{ xs: "flex-start", sm: "center" }}
              flexDirection={{ xs: "column", sm: "row" }}
            >
              <Box>
                <Typography fontWeight={700} variant={"h6"} gutterBottom>
                  I share a room
                </Typography>
                <Typography>Over 20,000 users searching a place</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={8} sm={4}>
          <Box
            padding={{ xs: 3, sm: 6 }}
            width={1}
            component={Card}
            boxShadow={4}
            data-aos="fade-up"
          >
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={{ xs: "flex-start", sm: "center" }}
              flexDirection={{ xs: "column", sm: "row" }}
            >
              <Box>
                <Typography fontWeight={700} variant={"h6"} gutterBottom>
                  I share a room
                </Typography>
                <Typography>Over 20,000 users searching a place</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={8} sm={4}>
          <Box
            padding={{ xs: 3, sm: 6 }}
            width={1}
            component={Card}
            boxShadow={4}
            data-aos="fade-up"
          >
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={{ xs: "flex-start", sm: "center" }}
              flexDirection={{ xs: "column", sm: "row" }}
            >
              <Box>
                <Typography fontWeight={700} variant={"h6"} gutterBottom>
                  I need a place
                </Typography>
                <Typography>Over 20,000 users searching a place</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Search;
