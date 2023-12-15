'use client';

import { Grid, Box, Typography, Stack, Button } from '@mui/material';
import React from 'react';
import { productList } from '@/_mock/_products';
import Image from 'next/image';
import PageLayout from '@/app/layout/PageLayout';

const Collection = () => {
  return (
    <PageLayout>
      <Grid container spacing={6}>
        {productList.map((product) => (
          <Grid item key={product.id} sx={{ my: 4 }} xs>
            <Box sx={{ width: '230px' }}>
              <Image
                src={product.url}
                alt="christmas marble product"
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: 'inherit', height: 'inherit' }}
              />
              <Box>
                <Typography>{product.name}</Typography>
                {/* <Stack
                  direction="row"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography>Php {product.price}</Typography>
                  <Button variant="text">Add to cart</Button>
                </Stack> */}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </PageLayout>
  );
};

export default Collection;
