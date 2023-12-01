import { NextResponse } from "next/server";

//traer 1 registro
export const GET = async (request, { params }) => {
    const id = params.id;

    const result = await fetch(`${process.env.API_URL}/${id}`,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })

    const product = await result.json();
    return NextResponse.json({ data: product })

};
//eliminar 1 registro
export const DELETE = async (request, { params }) => {
    const id = params.id;

    const result = await fetch(`${process.env.API_URL}/${id}`,{
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    })

    const product = await result.json();
    return NextResponse.json({ data: `Product ${id} delete` })

};
//actualizar 1 regisstro