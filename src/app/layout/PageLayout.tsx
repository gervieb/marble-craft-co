'use client'

import React, { ReactNode } from 'react'
import '@/app/globals.css'
import { SxProps, Box, Container, createTheme, ThemeProvider } from '@mui/material'
import { usePathname } from 'next/navigation'
import Navbar from '@/app/components/global/Navbar'
import Footer from '@/app/components/global/Footer'
import { jost } from '@/fonts'


const theme = createTheme({
    typography: {
        fontFamily: jost.style.fontFamily
    },
    components: {
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
            },
        },
    },
})

const PageLayout = ({ children, sx }: { children: ReactNode, sx?: SxProps }) => {
    const currentRoute = usePathname() ?? ''

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ ...sx }}>
                <Navbar currentRoute={currentRoute} />
                <Container maxWidth='xl'>
                    {children}
                </Container>
                <Footer />
            </Box>
        </ThemeProvider>
    )
}

export default PageLayout