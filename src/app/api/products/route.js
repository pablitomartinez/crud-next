import { NextResponse } from "next/server";

//traer todos los registros
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

//crear un producto
export const POST = async (req)=>{
    const product = await req.json();
    console.log(product);

    const result = await fetch(process.env.API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(product)
    });

    const newProduct = await result.json()
    return NextResponse.json({data : newProduct})
};


