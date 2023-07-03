import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Switch,
} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { AppBarProps } from './types';


const CustomAppBar: React.FC<AppBarProps> = ({
  darkMode,
  toggleDarkMode,
}) => {

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: darkMode ? '#bae8ed' : '#53168b',
        color: darkMode ? 'black' : 'white',
      }}
    >
      <Toolbar>
        <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <Typography variant="h5" component="div">
            <span style={{ marginRight: '8px' }}>CodeStack Systems Challenge</span>
          </Typography>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <WbSunnyIcon sx={{ marginRight: '8px' }} />
          <Switch checked={darkMode} onChange={toggleDarkMode} color="default" />
          <Brightness4Icon sx={{ marginLeft: '8px' }} />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
