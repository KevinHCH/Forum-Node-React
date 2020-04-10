import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PersonIcon from "@material-ui/icons/Person";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";

import LongMenu from "./Menu";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
// import { Visibility } from '@material-ui/icons';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    color: "white",
  },
  iconButton: {
    padding: 10,
    color: "white",
  },
  link: {
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [searchValue, setInputValue] = useState("");
  let history = useHistory()

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const doSearch = () => {
    history.push({
      pathname: '/search',
      search: `q=${searchValue}`
    })
  };

  const searchInput = () => {
    return (
      <Box
        display="flex"
        ml="auto"
        style={{ outline: "1px solid", marginLefT: "auto" }}
      >
        <InputBase
          className={classes.input}
          placeholder="Search posts"
          inputProps={{ "aria-label": "search google maps" }}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => {
            if (e.key == "Enter") doSearch();
          }}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Box>
    );
  };

  const logo = () => {
    return (
      <div>logo</div>
    );
  };

  const handleProfile = () => {
    return <LongMenu />;
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{ backgroundImage: "linear-gradient(to right, red, orange)" }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          // aria-label="simple tabs example"
        >
          <Tab
            label={logo()}
            {...a11yProps(0)}
            style={{ minWidth: "auto", padding: "2px" }}
          />
          <Tab label="posts" to="/" component={Link} className={classes.link} />
          <Tab
            label="create"
            to="/create"
            component={Link}
            className={classes.link}
          />
          {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
          <Tab
            label={searchInput()}
            // disabled="true"
            style={{ marginLeft: "auto" }}
          />
          <Tab
            label={<LongMenu />}
            {...a11yProps(3)}
            style={{
              minWidth: "auto",
              transform: "scale(1.1)",
              marginRight: "15px",
            }}
            // onClick={handleProfile}
          />
        </Tabs>
      </AppBar>
    </div>
  );
}
