import { Button, Html } from "@react-email/components";
import React from "react";

interface ITestEmail {
  name: string;
}

const TestEmail = ({ name }: ITestEmail) => {
  return (
    <Html>
      <Button
        href="https://www.marblecraftco.com"
        style={{ background: "#000", color: "#fff", padding: "12px 20px" }}
      >
        Click me
      </Button>
      <p>{name}</p>
    </Html>
  );
};

export default TestEmail;
