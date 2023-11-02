
'use client'

import { Box, Grid } from '@mui/material'
import React from 'react'
import { productList } from '@/_mock/_products'
import Image from 'next/image'
import PageLayout from '@/app/layout/PageLayout'

const Collection = () => {
    return (
        <PageLayout>
            <Grid container spacing={2} mt={4}>
                {productList.map(product => (
                    <Grid item key={product.id} sx={{ mt: 2 }} xs={3}>
                        <Image src={product.url} alt='christmas marble product' width="0"
                            height="0"
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </Grid>
                ))}
            </Grid>
        </PageLayout>
    )
}

export default Collection