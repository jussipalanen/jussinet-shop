import { getProducts } from "../utils/wordpress";
import ProductCard from "./product-card";


export default async function PopularProducts() {

    const products = await getProducts();
    return (
        <div className="mt-4 mb-4">
            <h2 className="text-2xl">Popular Products</h2>
            <div className="flex flex-wrap -mx-10">
                {products.map(data => {
                    return (
                        <ProductCard data={data} />
                    );
                })
                }
            </div>
        </div>
    )
}