'use client';

import { Stack } from '@mui/material';
import React from 'react';
import { Icon } from '@iconify/react';

const ShopMenu = () => {
  return (
    <Stack direction="row" spacing={1}>
      <Icon icon="bi:filter" width="24px" height="24px" />
      <Icon icon="uil:sort" width="24px" height="24px" />
    </Stack>
  );
};

export default ShopMenu;
