import React, {useState} from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {useHistory} from "react-router-dom";

const ITEM_HEIGHT = 48;

const URL_BASE = process.env.REACT_APP_URL_BASE;
export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const userId = localStorage.getItem('user_id')
  let history = useHistory()

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const getMyPosts = () => {
    history.push(`/posts/user/${userId}`)
    handleClose()
  }
  const logOut = () => {
    localStorage.removeItem('user_id')
    localStorage.removeItem('admin')
    localStorage.removeItem('name')
    localStorage.removeItem('token')
    history.push('/login')
    handleClose()
  }

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{color:'white'}}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: 200,
          },
        }}
      >
        <MenuItem key={userId} onClick={getMyPosts}>My posts</MenuItem>
        <MenuItem onClick={logOut}>Logout</MenuItem>
        {/* {options.map(option => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))} */}
      </Menu>
    </div>
  );
}
