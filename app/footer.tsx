export default function Footer() {
    return (
        <footer className="mt-auto bg-cyan-300">
            <div className="container flex flex-col flex-wrap px-4 py-16 mx-auto md:items-center lg:items-start md:flex-row md:flex-nowrap">

                <div className="justify-between w-full mt-4 text-center lg:flex">
                    <div className="w-full px-4 lg:w-1/3 md:w-1/2">
                        <h2 className="mb-2 font-bold tracking-widest text-gray-900">
                            Useful Links
                        </h2>
                        <ul className="mb-8 space-y-2 text-sm list-none">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800" href="https://mathscinet.ams.org/mathscinet/" target="_blank">MathSciNet</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800" href="https://www.ams.org/open-math-notes" target="_blank">AMS open Math Notes</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800" href="https://mtts.org.in/" target="_blank">MTTS</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800" href="https://www.atmschools.org/" target="_blank">ATM School</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full px-4 lg:w-1/3 md:w-1/2">
                        <h2 className="mb-2 font-bold tracking-widest text-gray-900">
                            Useful Links
                        </h2>
                        <ul className="mb-8 space-y-2 text-sm list-none">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800" href="http://www.nbhm.dae.gov.in/" target="_blank">NBHM</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">About Us</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Blogs</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full px-4 lg:w-1/3 md:w-1/2">
                        <h2 className="mb-2 font-bold tracking-widest text-gray-900">
                            Social Networks
                        </h2>
                        <ul className="mb-8 space-y-2 text-sm list-none">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800" href="">Facebook</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800" href="">Twitter</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800" href="">Instagram</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800" href="">Github</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <p className="text-base text-gray-400">
                    All rights reserved by @ <a className="text-gray-400 hover:text-gray-800" href="index.html">Sachchidanand</a> 2022
                </p>
            </div>
        </footer>
    )
}
