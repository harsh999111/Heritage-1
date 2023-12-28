// File: pages/api/signin.js
import mongoose from "mongoose";
import { connectionSrt } from "@/lib/db";
import { NextResponse } from "next/server";
import { User } from "@/lib/model/signin";

export async function POST(request) {
  const payload = await request.json();
  await mongoose.connect(connectionSrt);

  try {   
    const user = await User.findOne({ email: payload.email });

    console.log(user);

    if (user && user.password === payload.password) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false, message: "Invalid email or password" });
    }
  } finally {
    await mongoose.disconnect();
  }
}
