import { NextRequest, NextResponse } from "next/server"
import { getWooApi } from "@/utils/wordpress";


export async function GET(request: NextRequest) {
    const slug = request.nextUrl.searchParams.get("name");
    const data = await getWooApi().get("products?slug=" + slug).then(function(response){
        return response.data[0] ? response.data[0] : [];
    });
    return NextResponse.json(data);
}

// export async function GET(request: NextRequest) {
//     //Find the absolute path of the json directory
//     const jsonDirectory = path.join(process.cwd(), 'data');
//     const slug = request.nextUrl.searchParams.get("name");

//     //Read the json data file data.json
//     const fileContents = await fs.readFile(jsonDirectory + '/products.json', 'utf8');

//     let data = JSON.parse(fileContents);
//     var result = data.filter(obj => {
//         return obj.slug == slug
//     });

//     //Return the content of the data file in json format
//     return NextResponse.json(result[0]);
// }