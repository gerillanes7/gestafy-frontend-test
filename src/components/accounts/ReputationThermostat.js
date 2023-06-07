import React from 'react';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';

const ReputationThermostat = ({ reputationLevel }) => {
  const levelId = parseInt(reputationLevel?.charAt(0)); // Get the first character of the reputationLevel string as an integer
  const arrowPosition = `${(levelId - 1) * 25}%`; // Calculate position based on level

  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      <Chip
        sx={{
          position: 'relative',
          background:
            'linear-gradient(90deg, rgba(255,90,35,1) 0%, rgba(249,255,0,1) 40%, rgba(249,255,0,1) 60%, rgba(159,249,67,1) 82%, rgba(78,255,0,1) 100%)',
          color: '#fff',
          borderRadius: '6px',
          width: '100%',
        }}
        size="small"
      />
      <Box
        sx={{
          position: 'absolute',
          left: arrowPosition,
          bottom: '-4px', // Move the rectangle 5px down
          top: '-4px', // Move the rectangle 5px up
          width: '15px', // Set the width to 10px
          height: 'calc(100% + 8px)', // Increase the height by 10px
          background: 'transparent', // Set the background color to transparent
          borderRadius: '3px', // Set the border radius to 5px
          backdropFilter: 'blur(5px)', // Apply blur effect
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.4)', // Add a shadow to the rectangle
          transform: 'translateX(-50%)', // Center the rectangle
        }}
      />
    </Box>
  );
};

export default ReputationThermostat;
