import { NextRequest, NextResponse } from "next/server"
import { getWooApi } from "@/utils/wordpress";


export const config = {
    api: {
        bodyParser: false,
    },
}

export async function GET(request: NextRequest) {
    console.log(request.body);
    const data = await getWooApi().get("products").then(function (response) {
        return response.data ? response.data : [];
    });
    return NextResponse.json(data);
}