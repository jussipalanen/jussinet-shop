import ListProducts from "@/app/components/list-products";
import ListProductCategories from "@/app/components/product-categories";

export default function Page({params}) {
    const slug = params.slug ?? '';
    return(
        <div className="container mx-auto pt-4 pb-8">
            <div className="grid grid-cols-10 gap-4">
                <div className="col-span-2">
                    <ListProductCategories category={slug} />
                </div>
                <div className="col-span-8">
                    <ListProducts category={slug} />
                </div>
            </div>
        </div>
    )
}