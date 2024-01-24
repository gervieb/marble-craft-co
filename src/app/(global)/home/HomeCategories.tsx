import React from 'react';
import { Box, Grid } from '@mui/material';
import Image from 'next/image';
import { homeCategories } from '@/_mock/_categories';
import ButtonComponent from '@/app/components/ButtonComponent';

const HomeCategories = () => {
  return (
    <Box>
      <Grid
        container
        spacing={5}
        mt={2}
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {homeCategories.map((product) => (
          <Grid item key={product.id} sx={{ width: '280px', mt: 2 }} xs={3}>
            <Image
              src={product.url}
              alt="christmas marble product"
              width="0"
              height="0"
              sizes="100vw"
              style={{
                width: '100%',
                height: '180px',
              }}
            />
            <ButtonComponent title={product.name} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HomeCategories;
