import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import EmailIcon from "@material-ui/icons/Email";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";

const useStyles = makeStyles((themes) => ({
  gridClass: {
    marginTop: "60px",
    padding: "90px",
    background: "#0f0824",
    color: "#fff",
  },

  dividerClass: {
    backgroundColor: "#003",
  },

  customIcon: {
    fontSize: "28px",
    color: "#fff",
  },

  customPara: {
    marginTop: "-10px",
  },

  faIcon: {
    fontSize: "46px",
    color: "blue",
  },

  inIcon: {
    fontSize: "46px",
    color: "red",
  },

  copyRight: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.gridClass}>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Grid container spacing={2}>
            <Grid item xl={3} lg={3} md={6} sm={12} xs={12}>
              <Typography
                component="h3"
                variant="display4"
                gutterBottom
                style={{
                  fontWeight: "bold",
                  fontSize: "42px",
                  lineHeight: "42px",
                }}
              >
                Tech
              </Typography>
              <Box mt={5}>
                <List component="nav" aria-label="main mailbox folders">
                  <ListItem button>
                    <ListItemIcon>
                      <LocationOnIcon className={classes.customIcon} />
                    </ListItemIcon>
                    <ListItemText
                      primary="London 145
United Kingdom"
                    />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <PhoneInTalkIcon className={classes.customIcon} />
                    </ListItemIcon>
                    <ListItemText primary="987 654 3210" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <EmailIcon className={classes.customIcon} />
                    </ListItemIcon>
                    <ListItemText
                      primary="demo@gmail.com
support@gmail.com"
                    />
                  </ListItem>
                </List>
              </Box>
            </Grid>
            <Grid item xl={3} lg={3} md={6} sm={12} xs={12}>
              <Typography
                component="h3"
                variant="display4"
                gutterBottom
                style={{
                  fontWeight: "bold",
                  fontSize: "28px",
                  lineHeight: "28px",
                }}
              >
                Quicklink
              </Typography>
              <Box mt={5}>
                <List component="nav" aria-label="main mailbox folders">
                  <ListItem button>
                    <ListItemIcon>
                      <ArrowForwardIosIcon className={classes.customIcon} />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <ArrowForwardIosIcon className={classes.customIcon} />
                    </ListItemIcon>
                    <ListItemText primary="Features" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <ArrowForwardIosIcon className={classes.customIcon} />
                    </ListItemIcon>
                    <ListItemText primary="Events" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <ArrowForwardIosIcon className={classes.customIcon} />
                    </ListItemIcon>
                    <ListItemText primary="Marketing" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <ArrowForwardIosIcon className={classes.customIcon} />
                    </ListItemIcon>
                    <ListItemText primary="Blog" />
                  </ListItem>
                </List>
              </Box>
            </Grid>
            <Grid item xl={3} lg={3} md={6} sm={12} xs={12}>
              <Typography
                component="h3"
                variant="display4"
                gutterBottom
                style={{
                  fontWeight: "bold",
                  fontSize: "28px",
                  lineHeight: "28px",
                }}
              >
                Follow Us
              </Typography>
              <Box mt={3}>
                <FacebookIcon className={classes.faIcon} />
                <InstagramIcon className={classes.inIcon} />
                <YouTubeIcon className={classes.inIcon} />
                <TwitterIcon className={classes.faIcon} />
              </Box>
            </Grid>
            <Grid item xl={3} lg={3} md={6} sm={12} xs={12}>
              <Typography
                component="h3"
                variant="display4"
                gutterBottom
                style={{
                  fontWeight: "bold",
                  fontSize: "28px",
                  lineHeight: "28px",
                }}
              >
                About Us
              </Typography>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container className={classes.copyRight}>
        <p>Copyright © 2019 Design by Monjul Boruah</p>
      </Grid>
    </>
  );
}
