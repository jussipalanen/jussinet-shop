import Link from "next/link";
import Cart from "./components/cart";

export default function Navigation() {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-blue-950 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">
                    <Link href={{ pathname: '/' }} >
                        JussiNet Shop
                    </Link>
                </span>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-blue-200 border-blue-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>
            <div className="w-full max-w-sm">
                <form action="#" method="post" className="w-full max-w-sm">
                    <input type="text" className="bg-slate-800 text-white pt-4 pb-4 pl-2 pr-2 ml-4 mr-4 w-9/12" name="" id="" />
                </form>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">

                    <Link href={{ pathname: '/' }} className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4">
                        Home
                    </Link>
                    <Link href={{ pathname: '/products' }} className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4">
                        Products
                    </Link>
                    <Link href={{ pathname: '/contact' }} className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4">
                        Contact
                    </Link>
                </div>
                <div>
                    <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0">Profile</a>
                </div>
            </div>
            <Cart />
        </nav>
    )
}
