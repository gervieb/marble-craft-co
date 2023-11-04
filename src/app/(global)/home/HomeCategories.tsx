import React from 'react'
import { Box, Typography, Grid } from '@mui/material'
import Image from 'next/image'
import { homeCategories } from '@/_mock/_categories'

const HomeCategories = () => {

    return (
        <Box>
            <Grid container spacing={5} mt={2} sx={{
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {homeCategories.map(product => (
                    <Grid item key={product.id} sx={{ width: '170px', mt: 2, }} xs={3}>
                        <Image src={product.url} alt='christmas marble product' width="0"
                            height="0"
                            sizes="100vw"
                            style={{ width: '100%', height: '300px', padding: 24, backgroundColor: '#9E9FA5' }}
                        />
                        <Typography sx={{ textAlign: 'center' }}>{product.name}</Typography>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default HomeCategories