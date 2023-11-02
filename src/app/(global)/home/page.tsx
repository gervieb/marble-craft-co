'use client'

import React from 'react'
import PageLayout from '@/app/layout/PageLayout'
import { Box, Typography, Button } from '@mui/material'
import NewCollection from './NewCollection'
import BestSeller from '@/app/(global)/home/BestSeller'
import HomeCategories from '@/app/(global)/home/HomeCategories'
import Image from 'next/image'

const HomePage = () => {
    return (
        <PageLayout>
            <Box>
                <Box mt={6} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-start', height: '400px' }}>
                    <Box>
                        <Box mt={18}>
                            <Typography sx={{
                                fontSize: 24,
                            }}>Discover the beauty of</Typography>
                            <Typography sx={{
                                fontSize: 24,
                            }}>handcrafted marble</Typography>
                            {/* <Button sx={{ backgroundColor: '#30475E', color: '#E7DEC8', fontWeight: 600 }}>Check our Collection</Button> */}
                        </Box>
                        <Box>
                            <Typography sx={{ cursor: 'pointer', mt: 5 }}>See Collection</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ width: '250px' }}>
                        <Image src={'/assets/home-background.jpg'} alt='christmas marble product' width="0"
                            height="0"
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </Box>
                </Box>

                <HomeCategories />

                <Box sx={{ mt: 12 }}>
                    <NewCollection />
                </Box>

                <Box sx={{ mt: 12 }}>
                    <BestSeller />
                </Box>
            </Box>
        </PageLayout >
    )
}

export default HomePage;