import React, { useContext } from "react";
import { AuthContext } from "../context";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Box, Typography } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import ListAltIcon from "@material-ui/icons/ListAlt";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import CommentIcon from "@material-ui/icons/Comment";
import CategoryIcon from "@material-ui/icons/Category";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import AddIcon from "@material-ui/icons/Add";
import PeopleIcon from "@material-ui/icons/People";
import SettingsIcon from "@material-ui/icons/Settings";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const useStyles = makeStyles((theme) => ({
  gridClass: {
    padding: "20px",
    border: "1px solid #F8F8FF",
    borderRadius: "5px",
    background: "#003",
    color: "#fff",
    textAlign: "left",
    fontSize: "16px",
  },

  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: "bold",
  },
  muIcon: {
    color: "#fff ",
    fontSize: "17px",
    marginTop: "30px",
  },

  dividerClass: {
    backgroundColor: "#fff",
  },
  link: {
    textDecoration: "none",
    color: "#fff",
  },
}));

export default function SideNav() {
  const classes = useStyles();

  const { user, logout } = useContext(AuthContext);
  const [checked, setChecked] = React.useState(true);

  const handleChangeCheckBox = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Box className={classes.gridClass}>
      <Box>
        <Typography className={classes.heading}>Dashboard</Typography>
      </Box>

      <Box mb={2}>
        <p>
          <Link to="/create-post" className={classes.link}>
            <BorderColorIcon className={classes.muIcon} />
            {"  "}
            Create post
          </Link>
        </p>
        <p>
          <Link to="/admin" className={classes.link}>
            <ListAltIcon className={classes.muIcon} />
            {"  "}
            All post
          </Link>
        </p>
        <p>
          <Link to="/" className={classes.link}>
            <CategoryIcon className={classes.muIcon} />
            {"  "}
            Categories
          </Link>
        </p>
        <p>
          <Link to="/" className={classes.link}>
            <CommentIcon className={classes.muIcon} />
            {"  "}
            Comments
          </Link>
        </p>
      </Box>

      <Box mt={8}>
        <Typography className={classes.heading}>User Setting</Typography>
      </Box>
      <Box mb={2}>
        <p>
          <Link to="/" className={classes.link}>
            <PeopleIcon className={classes.muIcon} />
            {"  "}
            All user
          </Link>
        </p>
        <p>
          <Link to="/" className={classes.link}>
            <AddIcon className={classes.muIcon} />
            {"  "}
            Add/Remove user
          </Link>
        </p>
        <p>
          <Link to="/" className={classes.link}>
            <SettingsIcon className={classes.muIcon} />
            {"  "}
            Change user role
          </Link>
        </p>
        <p>
          <Link to="/" className={classes.link}>
            <HighlightOffIcon className={classes.muIcon} />
            {"  "}
            Remove user
          </Link>
        </p>
      </Box>
      <Box mt={8}>
        <Typography className={classes.heading}>Account Setting</Typography>
      </Box>

      <Box mb={2}>
        <p>
          <Link to="/" className={classes.link}>
            <PersonIcon className={classes.muIcon} />
            {"  "}
            Profile
          </Link>
        </p>
        <p>
          <Link to="/" className={classes.link}>
            <VpnKeyIcon className={classes.muIcon} />
            {"  "}
            Change password
          </Link>
        </p>
        <p>
          <Link to="/" className={classes.link} onClick={logout}>
            <PowerSettingsNewIcon className={classes.muIcon} />
            {"  "}
            Log out
          </Link>
        </p>
      </Box>
    </Box>
  );
}
