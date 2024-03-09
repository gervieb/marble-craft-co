"use client";

import React, { useState, MouseEvent, MouseEventHandler } from "react";
import { PATH_PAGE } from "@/routes";
import {
  Container,
  List,
  ListItem,
  ListItemButton,
  Box,
  Toolbar,
  Typography,
  Stack,
  Divider,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { productCategories } from "@/_mock/_categories";

interface INavbar {
  currentRoute: string;
}

const Navbar = ({ currentRoute }: INavbar) => {
  const [showSubCategories, setShowSubCategories] = useState<boolean>(false);

  const mainMenu = [
    {
      name: "HOME",
      path: PATH_PAGE.home,
    },
    {
      name: "SHOP",
      path: PATH_PAGE.shop,
    },
    {
      name: "ABOUT",
      path: PATH_PAGE.about,
    },
    {
      name: "CONTACT",
      path: PATH_PAGE.contact,
    },
  ];

  return (
    <Container
      maxWidth="xl"
      sx={{
        position: "sticky",
        top: 0,
        backgroundColor: "#F4F0EC",
        zIndex: 10,
      }}
    >
      <Toolbar disableGutters>
        <Stack
          direction="row"
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mt={2}
          sx={{ width: "100%" }}
        >
          <Link href="/">
            <Box sx={{ width: "100%", mt: 2 }}>
              <Image
                src="/assets/marblecraftlogo.png"
                alt="Marble Craft Co. logo"
                width="0"
                height="0"
                sizes="100%"
                style={{ width: "inherit", height: "auto" }}
              />
            </Box>
          </Link>
          <List sx={{ display: "flex" }}>
            {mainMenu.map((menu) => (
              <Link
                key={menu.name}
                href={menu.path}
                style={{ textDecoration: "none" }}
              >
                <ListItem disablePadding>
                  <ListItemButton sx={{ textAlign: "center" }}>
                    {/* <ListItemText primary={menu.name} /> */}
                    <Stack sx={{ position: "relative" }}>
                      <Typography>{menu.name}</Typography>
                      {currentRoute === menu.path && (
                        <Box
                          sx={{
                            display: "flex",
                            alignSelf: "center",
                            position: "absolute",
                            top: 14,
                          }}
                        >
                          <Icon
                            icon="pepicons-pop:line-x"
                            width="24px"
                            height="24px"
                          />
                        </Box>
                      )}
                    </Stack>
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
          <Box>
            <Stack direction="row" spacing={1}>
              <Icon icon="basil:search-outline" width="24px" height="24px" />
              <Icon icon="iconamoon:profile-fill" width="24px" height="24px" />
              {/* <Typography>BAG (0)</Typography> */}
            </Stack>
          </Box>
        </Stack>
      </Toolbar>
      {currentRoute === "/shop" && (
        <List
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
          }}
        >
          {productCategories.map((category) => (
            <ListItem
              key={category.id}
              disablePadding
              sx={{ width: "fit-content" }}
            >
              <ListItemButton sx={{ textAlign: "center" }}>
                {/* <ListItemText primary={menu.name} /> */}
                <Typography
                  sx={{
                    color: "#7D7C7C",
                    "&:hover": {},
                  }}
                >
                  {category.name}
                </Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
};

export default Navbar;
