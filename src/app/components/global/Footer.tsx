'use client'

import React from 'react'
import { Divider, Box, Typography } from '@mui/material'

const Footer = () => {
    return (
        <Box mt={6} sx={{ textAlign: 'center', width: '100%' }}>
            <Divider />
            <Typography sx={{ padding: 2 }}>
                Copyright 2023 | Designed by GB
            </Typography>
        </Box>
    )
}

export default Footer