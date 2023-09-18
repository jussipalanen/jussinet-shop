
import BannerCarousel from "./components/banner-carousel";
import LatestProducts from "./components/latest-products";
import PopularProducts from "./components/popular-products";

export default function FrontPage() {
    return (
        <>
            <BannerCarousel />
            <div className="container mx-auto">
                <PopularProducts />
                <LatestProducts />
            </div>
        </>
    )
}