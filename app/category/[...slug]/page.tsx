import ListProducts from "@/app/components/list-products";
import ListProductCategories from "@/app/components/product-categories";
import { getProductCategories, getProductCategoryBySlug, getProducts } from "@/utils/wordpress";

async function getData(params) {
    const posts = getProducts(params);
    return posts
}

async function getCategories()
{
    const categories = getProductCategories();
    return categories;
}

async function getCategory(slug)
{
    const category = getProductCategoryBySlug(slug);
    return category;
}   

export default async function Page({ params }) {

    const categories = await getCategories();
    const category   = await getCategory( params.slug );
    const products   = await getData({
        per_page: 12,
        page: 1,
        category: category.id ? category.id : null,
    });

    return (
        <div className="container mx-auto pt-4 pb-8">
            <div className="grid grid-cols-10 gap-4">
                <div className="col-span-2">
                    <ListProductCategories categories={categories} category={category} />
                </div>
                <div className="col-span-8">
                    <ListProducts products={products} category={category} />
                </div>
            </div>
        </div>
    )
}