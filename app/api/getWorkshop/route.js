import { NextResponse } from "next/server";
import axios from "axios";
export async function GET() {
    try {
        const getWorkshop = await axios.get("http://localhost:8000/workshops");
        return NextResponse.json(getWorkshop?.data);
    } catch (error) {
        return NextResponse.json({ message: "Error fetching workshop", error: error?.message }, { status: 500 });
    }
}