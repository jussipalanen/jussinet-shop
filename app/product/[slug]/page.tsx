'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
export default function ProductCardPage({ params }) {

    const [product, setProduct] = useState(null)
    const clickMe = function()
    {
        alert('test');
    }
    
    useEffect(() => {
        fetch('/api/product?name=' + params.slug)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data)
            })
    }, [])

    if (!product) return (
        <div className="container mx-auto pt-4 pb-8 text-center">
            Loading....
        </div>
    )

    const images = product.images ?? [];
    let image = '';
    if( images && images !== undefined && images.length > 0 )
    {
        image = product.images[0].src;
    }
    return (
        <div className="container mx-auto pt-4 pb-8">
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <Image src={image}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto"
                        objectFit="cover"
                        alt=""
                    />
                </div>
                <div>
                    <h2 className="text-2xl">{product.name}</h2>

                    <div className="product-desc mt-4 mb-4" dangerouslySetInnerHTML={{ __html: product.description }}></div>

                    <div className="product-details mt-4 mb-4">
                        <span>Quantity: {product.stock_quantity}</span>
                    </div>

                    <a href="#" onClick={() => clickMe()} className="flex items-center justify-center rounded-md w-48 bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        Add to cart</a>
                </div>
            </div>
        </div>
    )
}