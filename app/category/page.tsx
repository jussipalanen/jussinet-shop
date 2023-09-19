import { getProductCategories, getProductCategoryBySlug, getProducts } from "@/utils/wordpress";
import ListProducts from "../components/list-products";
import ListProductCategories from "../components/product-categories";

async function getData(params) {
    const posts = getProducts(params);
    return posts
}

async function getCategories()
{
    const categories = getProductCategories();
    return categories;
}

export default async function Page({params}) {

    const categories = await getCategories();
    const products = await getData({
        per_page: 12,
        page: 1,
    });

    return (
        <div className="container mx-auto pt-4 pb-8">
            <div className="grid grid-cols-10 gap-4">
                <div className="col-span-2">
                    <ListProductCategories categories={categories} />
                </div>
                <div className="col-span-8">
                    <ListProducts products={products} category={'Products'} />
                </div>
            </div>
        </div>
    )
}