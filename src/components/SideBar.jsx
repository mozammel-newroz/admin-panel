import React, { useState } from "react";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import ThreeDRotation from "@material-ui/icons/ThreeDRotation";
import MenuIcon from "@material-ui/icons/Menu";
import { Typography, IconButton, Button, Fade, Menu as MyMenu, MenuItem as MyMenuItem  } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import "../assets/css/sidebar.scss";
import profile from "../assets/images/profile.png";
import GroupIcon from "@material-ui/icons/Group";
import UnsubscribeIcon from "@material-ui/icons/Unsubscribe";
import ViewListOutlinedIcon from '@material-ui/icons/ViewListOutlined';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  logo: {
    marginLeft: 15,
    fontWeight: 600,
    fontSize: "1.3rem",
  },
  sidebar: {
    minHeight: "100vh",
  },
  profile: {
    position: "absolute",
    right: 15,
    top: 0,
  },
  header: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    color: "#fff",
    marginLeft: 15,
  },
  menu_title: {
    fontSize: "1rem",
    fontWeight: 500,
  },
  link: {
    color: "#fff",
    textDecoration: "none",
  },
  link2: {
    color: "#333",
    textDecoration: "none",
  },
});

const SideBar = () => {
  const classes = useStyles();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleToggleSidebar = () => {
    setToggled(!toggled);
  };
  return (
    <>
      <div>
        <div className="" className={classes.profile}>
          <Button
            aria-controls="fade-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <img src={profile} alt="" />
          </Button>
          <MyMenu
            id="fade-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MyMenuItem onClick={handleClose}>
              <Link to="/login" className={classes.link2}  >LogOut</Link>
            </MyMenuItem>
            <MyMenuItem onClick={handleClose} className={classes.link2}  >Profile</MyMenuItem>
          </MyMenu>
        </div>




        <ProSidebar
          collapsed={isCollapsed}
          // breakPoint="sm"
          toggled={toggled}
          onToggle={() => setIsCollapsed(!isCollapsed)}
          className={classes.sidebar}
        >
          <SidebarHeader>
            <div className={classes.header}>
              <IconButton>
                <MenuIcon
                  onClick={(e) => setIsCollapsed(!isCollapsed)}
                  className={classes.icon}
                />
              </IconButton>
              {!isCollapsed ? (
                <Typography className={classes.logo}>
                  <Link to="/" className={classes.link}>
                    DalKurd FF
                  </Link>
                </Typography>
              ) : null}
            </div>
          </SidebarHeader>
          <Menu iconShape="square">
            {/* <MenuItem icon={<AccessAlarmIcon />}>
              <Typography >Dashboard</Typography>
            </MenuItem> */}
            <SubMenu title="Users" icon={<GroupIcon />}>
              <MenuItem>
                <Typography>
                  <Link to="/login">Login</Link>
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography>
                  <Link to="/register">Register</Link>
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography>
                  <Link to="/">Home</Link>
                </Typography>
              </MenuItem>
            </SubMenu>
            <SubMenu title="Subscription" icon={<UnsubscribeIcon />}>
              <MenuItem>
                <Typography>
                  <Link to="/subscription-create">Create New</Link>
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography>
                  <Link to="/subscription">View All</Link>
                </Typography>
              </MenuItem>
            </SubMenu>
          </Menu>
        </ProSidebar>
      </div>
    </>
  );
};

export default SideBar;
