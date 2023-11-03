'use client'

import React, { useState, MouseEvent, MouseEventHandler } from 'react'
import { PATH_PAGE } from '@/routes'
import { Container, List, ListItem, ListItemButton, ListItemText, Box, Toolbar, Typography, Stack } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react';
import { productCategories } from '@/_mock/_categories'

interface INavbar {
    currentRoute: string
}

const Navbar = ({ currentRoute }: INavbar) => {
    const [showSubCategories, setShowSubCategories] = useState<boolean>(false);

    const mainMenu = [
        {
            name: 'HOME',
            path: PATH_PAGE.home
        },
        {
            name: 'ABOUT',
            path: PATH_PAGE.about
        },
        {
            name: 'COLLECTION',
            path: PATH_PAGE.collection
        },
        {
            name: 'CONTACT',
            path: PATH_PAGE.contact
        },
    ]

    return (
        <Container maxWidth='xl' sx={{ position: 'sticky', top: 0, backgroundColor: 'white' }}>
            <Toolbar disableGutters>
                <Box sx={{ width: '220px', mt: 2 }}>
                    <Image src='/assets/marblecraftco.png' alt='Marble Craft Co. logo' width="0"
                        height="0"
                        sizes="100%"
                        style={{ width: 'inherit', height: 'auto' }}
                    />
                </Box>
                <List sx={{ display: 'flex', ml: 22, mt: 2 }}>
                    {mainMenu.map(menu => (
                        <Link key={menu.name} href={menu.path} style={{ textDecoration: 'none' }}>
                            <ListItem disablePadding>
                                <ListItemButton sx={{ textAlign: 'center' }}>
                                    {/* <ListItemText primary={menu.name} /> */}
                                    <Typography>{menu.name}</Typography>
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    ))}
                </List>
                <Box sx={{ position: 'absolute', right: 0, top: 34 }}>
                    <Stack direction='row' spacing={1}>
                    <Icon icon='iconamoon:profile-fill' width='24px' height='24px' />
                    <Typography>BAG (0)</Typography>
                    </Stack>
                </Box>

            </Toolbar>
            {currentRoute === '/collection' &&
                <List sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
                    {productCategories.map(category => (
                        // <Link key={menu.name} href={menu.path} style={{ textDecoration: 'none' }}>
                        <ListItem key={category.id} disablePadding sx={{ width: 'fit-content' }}>
                            <ListItemButton sx={{ textAlign: 'center' }}>
                                {/* <ListItemText primary={menu.name} /> */}
                                <Typography
                                    sx={{
                                        '&:hover': {

                                        }
                                    }}
                                >
                                    {category.name}
                                </Typography>
                            </ListItemButton>
                        </ListItem>
                        // </Link>
                    ))
                    }
                </List >
            }
        </Container >
    )
}

export default Navbar