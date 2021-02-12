import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MemoryIcon from '@material-ui/icons/Memory';
import MoodIcon from '@material-ui/icons/Mood';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import PollIcon from '@material-ui/icons/Poll';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ScheduleIcon from '@material-ui/icons/Schedule';


import { useHistory } from "react-router-dom";

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

export default function Jmenu() {
	const history = useHistory();
	
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
		console.log('Path: ');
  };

  const irA = (patho) => {
    handleClose();
		history.push(patho);
  };
	
	const motos = () => { irA('/motos'); }
	const trivia = () => { irA('/trivia'); }
	const memoria = () => { irA('/memoria'); }
	const encuestas = () => { irA('/encuestas'); }
	const notificaciones = () => { irA('/notificaciones'); }
	const clock = () => { irA('/clock'); }
	
  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        
        color="inherit"
        onClick={handleClick}
      >
        Menu
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem onClick={memoria}>
          <ListItemIcon>
            <MemoryIcon  />
          </ListItemIcon>
          <ListItemText primary="Juego de la Memoria" />
        </StyledMenuItem>
        <StyledMenuItem onClick={encuestas}>
          <ListItemIcon>
            <PollIcon  />
          </ListItemIcon>
          <ListItemText primary="Encuestas" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
