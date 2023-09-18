import ListProducts from "../components/list-products";
import ListProductCategories from "../components/product-categories";

export default function Page() {
    return (
        <div className="container mx-auto pt-4 pb-8">
            <div className="grid grid-cols-10 gap-4">
                <div className="col-span-2">
                    <ListProductCategories />
                </div>
                <div className="col-span-8">
                    <ListProducts />
                </div>
            </div>
        </div>
    )
}