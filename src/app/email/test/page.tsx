import React from "react";
import { Button, Html } from "@react-email/components";

interface ITestEmail {
  name: string;
}
const TestEmail = ({ name }: ITestEmail) => {
  return (
    <Html>
      <Button
        href={process.env.WEBSITE}
        style={{ background: "#000", color: "#fff", padding: "12px 20px" }}
      >
        Click me
      </Button>
      <p>{name}</p>
    </Html>
  );
};

export default TestEmail;
