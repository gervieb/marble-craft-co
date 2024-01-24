import React from 'react';
import { Box, Typography, Grid, Stack } from '@mui/material';
import Image from 'next/image';
import { newProducts } from '@/_mock/_products';

const NewCollection = () => {
  const removeFirstProduct = newProducts.slice(1);

  return (
    <Box>
      <Typography sx={{ fontSize: 24, textAlign: 'center' }}>
        NEWEST COLLECTION
      </Typography>

      <Stack
        direction="row"
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        spacing={1}
        mt={6}
      >
        <Box sx={{ width: '750px' }}>
          <Image
            src={newProducts[0].url}
            alt="christmas marble product"
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
        </Box>
        <Grid container spacing={2} mt={4} alignItems="center">
          {removeFirstProduct.map((product) => (
            <Grid item key={product.id} sx={{ width: '220px', mt: 2 }} xs={3}>
              <Image
                src={product.url}
                alt="christmas marble product"
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Box>
  );
};

export default NewCollection;
