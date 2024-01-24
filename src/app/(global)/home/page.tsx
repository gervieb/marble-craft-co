'use client';

import React from 'react';
import PageLayout from '@/app/layout/PageLayout';
import { Box, Typography, Stack } from '@mui/material';
import NewCollection from './NewCollection';
import BestSeller from '@/app/(global)/home/BestSeller';
import HomeCategories from '@/app/(global)/home/HomeCategories';
import Image from 'next/image';
import Link from 'next/link';
import { courgette } from '@/fonts';

const HomePage = () => {
  return (
    <PageLayout>
      <Box>
        <Stack
          mt={6}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '400px',
            backgroundColor: '#c2c5ca',
          }}
        >
          <Box>
            <Box
              sx={{
                position: 'absolute',
                top: '55%',
                left: '25%',
                transform: 'translateX(-50%) translateY(-50%)',
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: 32,
                    fontFamily: courgette.style.fontFamily,
                  }}
                >
                  Discover the{' '}
                  <span
                    style={{
                      color: '#000',
                      fontWeight: 600,
                    }}
                  >
                    beauty
                  </span>{' '}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 28,
                    fontFamily: courgette.style.fontFamily,
                  }}
                >
                  of handcrafted{' '}
                  <span
                    style={{
                      color: '#000',
                      fontWeight: 600,
                    }}
                  >
                    marble
                  </span>
                </Typography>
              </Box>
              <Link
                href="/shop"
                style={{
                  textDecoration: 'none',
                }}
              >
                <Typography
                  sx={{
                    cursor: 'pointer',
                    mt: 5,
                    padding: '2px 14px',
                    border: '1px solid #747334',
                    borderRadius: '4px',
                    width: 'fit-content',

                    '&:hover': {
                      backgroundColor: '#747334',
                      color: '#fff',
                    },
                  }}
                >
                  See Gallery
                </Typography>
              </Link>
            </Box>
          </Box>
          <Box sx={{ height: 'inherit' }}>
            <Image
              src={'/assets/home-background.jpg'}
              alt="christmas marble product"
              width="0"
              height="0"
              sizes="100vw"
              style={{
                width: 'auto',
                height: 'inherit',
                boxShadow: '10px 21px 46px -59px rgba(66, 68, 90, 1)',
              }}
            />
          </Box>
        </Stack>

        <Box sx={{ mt: 6 }}>
          <HomeCategories />
        </Box>

        <Box sx={{ mt: 12 }}>
          <NewCollection />
        </Box>

        <Box sx={{ mt: 12 }}>
          <BestSeller />
        </Box>
      </Box>
    </PageLayout>
  );
};

export default HomePage;
