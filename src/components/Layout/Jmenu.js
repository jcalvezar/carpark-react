import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { useHistory } from "react-router-dom";

import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
//import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

/*
const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {

  },
}))(MenuItem);
*/

export default function Jmenu(props) {
  const history = useHistory();


  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const irA = (patho) => {
    //handleClose();
    setOpen(false);
    history.push(patho);
  };

  return (
    <div >
      <Button
        color="inherit"
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        {props.text}
      </Button>
      <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal
        placement="bottom-start">
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center top' }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                  {props.items.map((x, key) => {
                    const IconName = x.icon;

                    return (
                      <MenuItem key={key} onClick={() => { irA(x.path); }}>
                        <ListItemIcon>
                          <IconName />
                        </ListItemIcon>
                        <ListItemText primary={x.text} />
                      </MenuItem>
                    )
                  })}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );




  /*
    //const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorEl, setAnchorEl] = useState(false);
  
    const handleClick = (event) => {
      setAnchorEl({ open: true, anchorEl: event.currentTarget });
    };
  
    const handleClose = () => {
      setAnchorEl(null);
      console.log('Path: ');
    };
  
    const irA = (patho) => {
      handleClose();
      history.push(patho);
    };
  
    const handleClickAway = () => {
      //setOpen(false);
      setAnchorEl(null);
    };
  
    return (
      //<ClickAwayListener onClickAway={handleClickAway}>
      <ClickAwayListener
        mouseEvent="onMouseDown"
        touchEvent="onTouchStart"
        onClickAway={handleClickAway}
      >
        <div>
  
          <Button
            aria-controls="customized-menu"
            aria-haspopup="true"
            color="inherit"
            onClick={handleClick}
          >
            {props.text}
          </Button>
  
          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl ? anchorEl.anchorEl : null}
            open={Boolean(anchorEl ? anchorEl.anchorEl : null)}
            onClose={handleClose}
          >
            {props.items.map(x => {
              const IconName = x.icon;
  
              return (
                <StyledMenuItem onClick={() => { irA(x.path); }}>
                  <ListItemIcon>
                    <IconName />
                  </ListItemIcon>
                  <ListItemText primary={x.text} />
                </StyledMenuItem>
              )
            })}
  
          </StyledMenu>
  
        </div>
      </ClickAwayListener>
    );
    */
}
