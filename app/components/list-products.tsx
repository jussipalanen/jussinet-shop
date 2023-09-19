import { getProductCategoryBySlug, getProducts } from "@/utils/wordpress";
import { use } from "react";
import ProductCard from "./product-card";


/**
 * List product view
 * @param param
 * @returns 
 */
export default function ListProducts({ products = [], category = null }) {
    return (
        <div>
            <div className="mt-4 mb-4">
                { category && category.name !== undefined && (
                    <h2 className="text-2xl">{category.name}</h2>
                )}
                <div className="flex flex-wrap -mx-10">
                    {products.map((product, index) => (
                        <ProductCard data={product} key={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}