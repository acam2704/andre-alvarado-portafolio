
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name =
      typeof body.name === "string"
        ? body.name.trim()
        : "";

    const email =
      typeof body.email === "string"
        ? body.email.trim()
        : "";

    const message =
      typeof body.message === "string"
        ? body.message.trim()
        : "";

    if (name.length < 2 || name.length > 80) {
      return NextResponse.json(
        {
          error: "Name must be between 2 and 80 characters.",
        },
        { status: 400 }
      );
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      email.length > 254
    ) {
      return NextResponse.json(
        {
          error: "Please provide a valid email address.",
        },
        { status: 400 }
      );
    }

    if (message.length < 10 || message.length > 2000) {
      return NextResponse.json(
        {
          error: "Message must be between 10 and 2,000 characters.",
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        ok: true,
        message:
          "Thanks! Your form was validated successfully. This demo endpoint does not yet deliver emails; connect an email service to receive submissions.",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      {
        error: "Invalid request. Please try again.",
      },
      { status: 400 }
    );
  }
}
