import TestEmail from "@/app/email/test/page";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: `${process.env.COMPANY_NAME} <${process.env.FROM_EMAIL}>`,
      to: `${process.env.TO_EMAIL}`,
      subject: "Hello world",
      react: (
        <TestEmail
          params={{
            name: "John Doe",
          }}
        />
      ),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
