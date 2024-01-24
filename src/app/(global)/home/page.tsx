'use client';

import React from 'react';
import PageLayout from '@/app/layout/PageLayout';
import { Box, Typography } from '@mui/material';
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
        <Box
          mt={6}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'flex-start',
            height: '400px',
            backgroundImage: `url('/assets/home-background.jpg')`,
          }}
        >
          <Box>
            <Box mt={18}>
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
          <Box sx={{ alignItems: 'right' }}>
            <Image
              src={'/assets/home-background.jpg'}
              alt="christmas marble product"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: '100%', height: '400px' }}
            />
          </Box>
        </Box>

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
