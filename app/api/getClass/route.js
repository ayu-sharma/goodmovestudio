import { NextResponse } from "next/server";
import axios from "axios";
export async function GET(id) {
    try {
        const getClass = await axios.get(`http://localhost:8000/regularclasses`);
        return NextResponse.json(getClass?.data);
    } catch (error) {
        return NextResponse.json({ message: "Error fetching class", error: error?.message }, { status: 500 });
    }
}