import React from 'react';
import Typography from '@mui/joy/Typography';
import CopyrightIcon from '@mui/icons-material/Copyright';

function Footer() {
  return (
    <div className="footer">
      <Typography sx={{ color: '#FFFFFF' }} level="body2">
        Copyright 2023 <CopyrightIcon sx={{ fontSize: 10 }} /> The Recovery Advisor Company Limited
      </Typography>
    </div>
  );
}

export default Footer;
