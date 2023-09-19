import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

export function getWooApi()
{
    return new WooCommerceRestApi({
        url: String(process.env.NEXT_PUBLIC_SITE),
        consumerKey: String(process.env.NEXT_PUBLIC_CUSTOMER_KEY),
        consumerSecret: String(process.env.NEXT_CUSTOMER_SECRET_KEY),
        version: "wc/v3",
    });
}

/**
 * Get the product by slug
 * @param slug
 * @returns 
 */
export async function getProduct(slug) {
    return await getWooApi().get("products?slug=" + slug).then(function(response){
        return response.data[0] ? response.data[0] : {};
    });
}   

/**
 * Get all of the products
 * @returns 
 */
export async function getProducts(params = {}) {

    return await getWooApi().get("products", params).then(function(response){
        return  response.data;
    })
}

/**
 * Get the product category by slug
 * @param slug
 * @returns 
 */
export async function getProductCategoryBySlug(slug) {
    const data = await getWooApi().get("products/categories?slug=" + slug).then(function(response){
        return response.data[0] ? response.data[0] : [];
    });
    return data;
}   


/**
 * Get all of the product categories
 * @param params 
 * @returns  
 */
export async function getProductCategories(params = {}) {
    
    let rows = [];
    let page = 1;
    try {
        let data = [];
        do {
            data = await getWooApi().get("products/categories", {
                per_page: 100,
                page: page,
                hide_empty: false
            }).then(function(response){
                return response.data;
            });
            page++;
            rows = [...rows, ...data];
        } while (data.length);

    } catch (error) {
        console.log(error);
    }
    return rows;
}
