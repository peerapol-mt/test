import React from 'react';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';

function Trac() {
  return (
    <div className="trac">
      <div className='text'>
        <Box>
          <Typography sx={{ color: "#FFFFFF" }} level="display1">TRAC</Typography>
          <Typography sx={{ color: "#FFFFFF" }} level="body1" className='ty'>
            THE RECOVERY ADVISOR COMPANY LIMITED
          </Typography>
        </Box>
      </div>
    </div>
  );
}

export default Trac;
