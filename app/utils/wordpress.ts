import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

// initialise the WooCommerceRestApi
const api = new WooCommerceRestApi({
    url: String(process.env.NEXT_PUBLIC_SITE),
    consumerKey: String(process.env.NEXT_PUBLIC_CUSTOMER_KEY),
    consumerSecret: String(process.env.NEXT_CUSTOMER_SECRET_KEY),
    version: "wc/v3",
});

/**
 * Get all of the products
 * @returns 
 */
export async function getProducts() {

    let response = [];
    try {
        return await api.get("products", {
            per_page: 10,
        }).then(function(response){
            return response.data;
        });
    } catch (error) {
        console.log(error);
    }
    return response;
}