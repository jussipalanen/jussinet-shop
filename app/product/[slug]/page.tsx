import Image from "next/image";

export default function Page() {
    return (
        <div className="container mx-auto pt-4 pb-8">
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <Image src={'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2596&q=80'}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto"
                        objectFit="cover"
                        alt=""
                    />
                </div>
                <div>
                    <h2 className="text-2xl">Product name</h2>
                    
                    <div className="product-desc mt-4 mb-4">
                        Lorem Ipsum
                    </div>

                    <div className="product-details mt-4 mb-4">
                        <span>Quantity: 25+</span>
                    </div>

                    <a href="#" className="flex items-center justify-center rounded-md w-48 bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        Add to cart</a>
                </div>
            </div>
        </div>
    )
}