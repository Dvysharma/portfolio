import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const access_key = process.env.WEB3FORMS_ACCESS_KEY || "";
    if (!access_key) {
      return NextResponse.json({ success: false, message: "Server missing Web3Forms key" }, { status: 500 });
    }

    const payload = {
      access_key,
      name: body.name,
      email: body.email,
      message: body.message,
      subject: body.subject || "New Portfolio Enquiry - Divyanshu Sharma",
      from_name: body.from_name || "Portfolio Contact System",
    };

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (err: any) {
    return NextResponse.json({ success: false, message: err.message || "Unknown error" }, { status: 500 });
  }
}
