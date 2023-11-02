import React from 'react'
import { Box, Typography, Grid, Stack } from '@mui/material'
import Image from 'next/image'
import { bestSellers } from '@/_mock/_products'

const BestSeller = () => {
    const removeFirstProduct = bestSellers.slice(1)

    return (
        <Box>
            <Typography sx={{ fontSize: 18, textAlign: 'center', }}>BEST SELLERS</Typography>

            <Stack direction='row' display='flex' justifyContent='space-around' alignItems='center' spacing={4} mt={4}>
                <Box sx={{ width: '750px' }}>
                    <Image src={bestSellers[0].url} alt='christmas marble product' width="0"
                        height="0"
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                    />
                </Box>
                <Grid container spacing={2} mt={2}>
                    {removeFirstProduct.map(product => (
                        <Grid item key={product.id} sx={{ width: '170px', mt: 2, padding: 2, }} xs={3}>
                            <Image src={product.url} alt='christmas marble product' width="0"
                                height="0"
                                sizes="100vw"
                                style={{ width: '80%', height: 'auto' }}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Stack>
        </Box>
    )
}

export default BestSeller