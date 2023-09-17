
import BannerCarousel from "./components/banner-carousel";
import LatestProducts from "./components/latest-products";
import PopularProducts from "./components/popular-products";

export default function Page() {

    return (
        <>
            <BannerCarousel />
            <div className="container mx-auto">
                <PopularProducts />
                <LatestProducts limit={8} />
            </div>
        </>
    )
}