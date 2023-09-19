
import { getProducts } from "@/utils/wordpress";
import BannerCarousel from "./components/banner-carousel";
import ListProducts from "./components/list-products";

async function getPopularProducts() {
    const posts = getProducts({
        per_page: 8,
        order: 'asc',
        orderby: 'popularity'
    });
    return posts
}


async function getLatestProducts() {
    const posts = getProducts({
        per_page: 8,
        order: 'asc',
        orderby: 'popularity'
    });
    return posts
}


export default async function FrontPage() {
    return (
        <>
            <BannerCarousel />
            <div className="container mx-auto">

                <div className="grid grid-rows-2">
                    <div className="pt-4">
                        <h2 className="text-2xl">Popular Products</h2>
                        <ListProducts products={await getPopularProducts()} />
                    </div>
                    <div className="pt-4">
                        <h2 className="text-2xl">Latest Products</h2>
                        <ListProducts products={await getLatestProducts()} />
                    </div>
                </div>
            </div>
        </>
    )
}