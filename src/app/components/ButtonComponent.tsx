import { Typography } from '@mui/material';
import React from 'react';

interface IButton {
  title: string;
}

const ButtonComponent = ({ title }: IButton) => {
  return (
    <Typography
      sx={{
        padding: '5px 2px',
        backgroundColor: '#747334',
        color: '#fff',
        textAlign: 'center',
      }}
    >
      {title}
    </Typography>
  );
};

export default ButtonComponent;
