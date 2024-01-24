'use client';

import { Grid, Box, Typography, Container } from '@mui/material';
import React from 'react';
import { productList } from '@/_mock/_products';
import Image from 'next/image';
import PageLayout from '@/app/layout/PageLayout';

const Collection = () => {
  return (
    <PageLayout>
      <Container maxWidth="lg">
        <Grid
          container
          mt={1}
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
          sx={{ textAlign: 'center' }}
        >
          {productList.map((product) => (
            <Grid item key={product.id} sx={{ my: 4 }}>
              <Box sx={{ width: '360px' }}>
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
      </Container>
    </PageLayout>
  );
};

export default Collection;
