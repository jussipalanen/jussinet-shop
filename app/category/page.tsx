import ListProducts from "../components/list-products";

export default function Page() {
    return(
        <div className="container mx-auto pt-4 pb-8">
            <h2 className="text-lg">Products</h2>
            <ListProducts />
        </div>
    )
}