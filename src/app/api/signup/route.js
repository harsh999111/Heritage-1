import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectionSrt } from "@/lib/db";
import { User } from "@/lib/model/user";

export async function GET(params) {
    let data = [];
    try {
        await mongoose.connect(connectionSrt);
        data = await User.find();
        console.log(data);
    } catch (error) {
        data = { success: false };
    }

    return NextResponse.json({ result: data, success: true });
}

export async function POST(request) {
    const payload = await request.json();
    await mongoose.connect(connectionSrt);

    // Check if the user already exists in the database
    const existingUser = await User.findOne({ email: payload.email });

    if (existingUser) {
        // User with the provided email already exists
        return NextResponse.json({ success: false, message: 'User with this email already exists' });
    }

    // Create a new user if the email is not in use
    let user = new User(payload);
    const result = await user.save();

    return NextResponse.json({ result, success: true });
}

