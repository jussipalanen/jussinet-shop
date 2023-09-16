import ProductCard from "./product-card";

export default function LatestProducts({limit}) {

    let MAX_LIMIT = 8;
    if( limit > 0 ) {  MAX_LIMIT = limit; }
    const products = function () {
        let data = Array();
        for (let index = 0; index < MAX_LIMIT; index++) {
            const product = ProductCard();
            data.push(product);
        }
        return data;
    }

    return (
        <div className="mt-4 mb-4">
            <h2 className="text-2xl">Latest products</h2>
            <div className="flex flex-wrap -mx-10">
                {products()}
            </div>
        </div>
    )
}