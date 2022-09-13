import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";

const Search = () => {
  return (
    <Box>
      <Box align={"center"} marginBottom={4}>
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
          We usually get back to you in 48 to 72 hours.
          <Box marginTop={2}>
            <Button variant="contained" color="primary" size="large">
              Enquire Now
            </Button>
          </Box>
        </Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={6} sm={3}>
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
                <Typography fontWeight={700} gutterBottom>
                  The Right Advice
                </Typography>
                <Typography>
                  Our team is an expert at matching you with right solution.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6} sm={3}>
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
                <Typography fontWeight={700} gutterBottom>
                  Trusted For Excellence
                </Typography>
                <Typography>
                  We've been recognized for our high rate of customer
                  satisfaction.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6} sm={3}>
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
                <Typography fontWeight={700} gutterBottom>
                  Compare The Best
                </Typography>
                <Typography>
                  We only compare Market Leaders for Service Quality.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={6} sm={3}>
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
                <Typography fontWeight={700} gutterBottom>
                  High ROI
                </Typography>
                <Typography>
                  Our Customized Solutions bring you the best value.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Search;
