import React from "react";
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
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    color: "white"
  },
  iconButton: {
    padding: 10,
    color: "white"
  }
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  // console.log(value)

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
      <figure style={{ width: "60px", margin: "0" }}>
        <img
          src="https://www.pngitem.com/pimgs/m/41-414399_grumpy-cat-pixel-grumpy-cat-cross-stitch-hd.png"
          alt=""
          width="100%"
        />
      </figure>
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
          <Tab label="posts" {...a11yProps(0)} />
          <Tab label="create" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
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
              marginRight: "15px"
            }}
            // onClick={handleProfile}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        posts
      </TabPanel>
      <TabPanel value={value} index={1}>
        create
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        profile
      </TabPanel>
    </div>
  );
}
