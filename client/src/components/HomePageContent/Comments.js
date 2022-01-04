import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((themes) => ({
  gridClass: {
    padding: "20px",
  },

  dividerClass: {
    backgroundColor: "#003",
  },

  bigAvatar: {
    width: 60,
    height: 60,
  },
}));

export default function Comments() {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.gridClass}>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Typography
            component="h2"
            variant="display4"
            gutterBottom
            style={{
              fontWeight: "600",
              fontSize: "38px",
            }}
          >
            Comments / 2
          </Typography>
          <Divider className={classes.dividerClass} />
        </Grid>
      </Grid>
      <Grid container className={classes.gridClass}>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Grid container>
            <Box xl={12} lg={12} md={12} sm={12} xs={12}>
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                className={classes.bigAvatar}
              />
            </Box>
            <Box xl={10} lg={10} md={8} sm={7} xs={7} ml={3}>
              <Typography
                component="h2"
                variant="display4"
                gutterBottom
                style={{
                  fontWeight: "600",
                  fontSize: "22px",
                }}
              >
                Veniam
              </Typography>
              <Typography
                component="p"
                gutterBottom
                style={{
                  marginTop: "-10px",
                  fontWeight: "400",
                  fontSize: "16px",
                  color: "red",
                }}
              >
                Posted on Jan 10 / 2017 at 06:53 am
              </Typography>
              <Typography
                component="p"
                gutterBottom
                style={{
                  fontWeight: "400",
                  fontSize: "16px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Grid container>
            <Box xl={2} lg={2} md={4} sm={5} xs={5}>
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                className={classes.bigAvatar}
              />
            </Box>
            <Box xl={10} lg={10} md={8} sm={7} xs={7} ml={3}>
              <Typography
                component="h2"
                variant="display4"
                gutterBottom
                style={{
                  fontWeight: "600",
                  fontSize: "22px",
                }}
              >
                Veniam
              </Typography>
              <Typography
                component="p"
                gutterBottom
                style={{
                  marginTop: "-10px",
                  fontWeight: "400",
                  fontSize: "16px",
                  color: "red",
                }}
              >
                Posted on Jan 10 / 2017 at 06:53 am
              </Typography>
              <Typography
                component="p"
                gutterBottom
                style={{
                  fontWeight: "400",
                  fontSize: "16px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
