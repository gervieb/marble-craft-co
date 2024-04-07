"use client";

import React, { MouseEvent } from "react";
import PageLayout from "@/app/layout/PageLayout";
import { Button, Container } from "@mui/material";

const Contact = () => {
  const handleSubmit = async (e: MouseEvent<HTMLElement>) => {
    try {
      await fetch("api/send", {
        method: "POST",
      });
    } catch (e) {
      console.log({ e });
    }
  };

  return (
    <PageLayout>
      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <div>Contact Us</div>
        {/* <Button onClick={handleSubmit}>Send Email</Button> */}
      </Container>
    </PageLayout>
  );
};

export default Contact;
