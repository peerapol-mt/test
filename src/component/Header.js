import React from 'react';
import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  MenuItem,
  Menu,
} from '@mui/material';
import logo from './img/logo.jpg';
import { Box } from '@mui/joy';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Fade from '@mui/material/Fade';

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="header">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{ background: '#392325' }}>
          <Toolbar
            sx={{
              justifyContent: 'space-between',
            }}>
            <Tabs>
              <img src={logo} alt="logo" className="photo" />
            </Tabs>

            <Tabs>
              <Tab
                label="ABOUT US"
                style={{ fontSize: '10', color: '#FFFFFF' }}
              />
              <Tab
                label="ABOUT US"
                style={{ fontSize: '10', color: '#FFFFFF' }}
              />
              <Tab
                label="SOLUTION"
                style={{ fontSize: '10', color: '#FFFFFF' }}
              />
              <Tab label="BLOG" style={{ fontSize: '10', color: '#FFFFFF' }} />
              <Tab
                label="CONTACT US"
                style={{ fontSize: '10', color: '#FFFFFF' }}
              />
            </Tabs>

            <Tabs sx={{
              alignItems:'center'
            }}>
              <Tab
                label="TH"
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                icon={<ArrowDropDownIcon />}
                style={{
                  fontSize: '10',
                  color: '#FFFFFF',
                  flexDirection: 'row-reverse',
                }}
              />

              <Menu
                id="fade-menu"
                MenuListProps={{
                  'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
                sx={{ color: '#392325' }}
                >
                
                
                <MenuItem onClick={handleClose} style={{ fontSize: '10', color: 'black' }}>EN</MenuItem>
              </Menu>
            </Tabs>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Header;
