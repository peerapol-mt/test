import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Circle from './Circle';
import Typography from '@mui/joy/Typography';
import Card from '@mui/material/Card';


function Solution() {
  return (
    <div className="solution">
      <h1>SOLUTION</h1>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} minHeight={160}>
          <Grid xs display="flex" justifyContent="center" alignItems="center">
            <box>
            <Card
                sx={{
                  border: 'none',
                  boxShadow: 'none',
                  maxWidth: 255,
                  height: 255,
                }}>
                <div className="sq">
                <Circle />
                </div>

                <h3>HEADING</h3>
                <Typography sx={{ color: 'black' }} level="body1">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </Card>
            </box>
          </Grid>
          <Grid xs display="flex" justifyContent="center" alignItems="center">
            <box>
            <Card
                sx={{
                  border: 'none',
                  boxShadow: 'none',
                  maxWidth: 255,
                  height: 255,
                }}>
                <div className="sq">
                <Circle />
                </div>

                <h3>HEADING</h3>
                <Typography sx={{ color: 'black' }} level="body1">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </Card>
            </box>
          </Grid>
          <Grid xs display="flex" justifyContent="center" alignItems="center">
            <box>
            <Card
                sx={{
                  border: 'none',
                  boxShadow: 'none',
                  maxWidth: 255,
                  height: 255,
                }}>
                <div className="sq">
                <Circle />
                </div>

                <h3>HEADING</h3>
                <Typography sx={{ color: 'black' }} level="body1">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </Card>
            </box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Solution;
