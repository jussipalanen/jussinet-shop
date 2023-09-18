import { use } from "react";
import ProductCard from "./product-card";
import { getProducts } from "../../utils/wordpress";


export default function PopularProducts() {

    const { posts } = use(getProducts({
        per_page: 8,
        order: 'asc',
        orderby: 'popularity'
    }));
    
    return (
        <div className="mt-4 mb-4">
            <h2 className="text-2xl">Popular Products</h2>
            <div className="flex flex-wrap -mx-10">
                {posts.map((data, index) => (
                    <ProductCard data={data} key={index} />
                ))}
            </div>
        </div>
    )
}