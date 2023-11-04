"use client";

import React from "react";
import {
  Divider,
  Box,
  Typography,
  Stack,
  Container,
  styled,
} from "@mui/material";

const StyledTitle = styled(Typography)({
  fontWeight: 600,
  marginTop: 12,
});

const StyledContent = styled(Typography)({
  fontSize: "14px",
});

const Footer = () => {
  return (
    <Box mt={6} mb={2} sx={{ textAlign: "center", width: "100%" }}>
      <Divider />
      <Container maxWidth="lg">
        {/* <Typography sx={{ padding: 2 }}>
                    Copyright 2023 | Designed by GB
                </Typography> */}

        <Stack
          direction="row"
          display="flex"
          justifyContent="space-around"
          mt={2}
        >
          <Box>
            <StyledTitle>CONTACT</StyledTitle>
            <StyledContent>hello@marblecraftco.com</StyledContent>
          </Box>
          <Box>
            <StyledTitle>CUSTOMER SERVICE</StyledTitle>
            <StyledContent>Delivery</StyledContent>
            <StyledContent>Return Policy</StyledContent>
            <StyledContent>FAQ</StyledContent>
          </Box>
          <Box>
            <StyledTitle>SOCIAL</StyledTitle>
            <StyledContent>@marblecraftcoph</StyledContent>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
