import { NextRequest, NextResponse } from "next/server"
import { getWooApi } from "@/utils/wordpress";

export async function POST(request: NextRequest) {
    const data = await getWooApi().get("products", await request.json()).then(function (response) {
        return response.data ? response.data : [];
    });
    return NextResponse.json(data);
}