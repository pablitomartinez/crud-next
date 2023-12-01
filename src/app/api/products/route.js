import { NextResponse } from "next/server";

export const GET = async ()=>{
    const result = await fetch(process.env.API_URL, {
        method: "GET",
        headers: {
            "Content-type":"application/json"
        }
    })
    const products = await result.json();
    return NextResponse.json({data: products})
};


