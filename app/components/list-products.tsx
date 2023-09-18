import { getProductCategory, getProducts } from "@/utils/wordpress";
import { use } from "react";
import ProductCard from "./product-card";



/**
 * List product view
 * @param param
 * @returns 
 */
export default function ListProducts({category = null}) {

    let category_name = '';
    let params = {
        per_page: 100,
    };

    if( category )
    {
        const { post } = use(getProductCategory( category ));
        if( post && post.id !== undefined )
        {
            category_name = post.name;
            params.category = post.id;
        }
    }

    const { posts } = use(getProducts(params));
    return (
        <div className="mt-4 mb-4">
            <h2 className="text-2xl">{category_name}</h2>
            <div className="flex flex-wrap -mx-10">
                {posts.map((data, index) => (
                    <ProductCard data={data} key={index} />
                ))}
            </div>
        </div>
    )
}