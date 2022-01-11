import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import Image from 'next/image';

function Category() {
    return (
        <section className="container max-w-9xl mx-auto m-8 text-gray-700 body-font ">
            <div className="flex">
                <h1 className="pl-3 sm:text-3xl text-2xl font-medium title-font text-black">Browser Our Category</h1>
            </div>
            <div className="flex">
                <h1 className="pl-3 sm:text-3xl text-2xl font-medium title-font text-[#8BAC3E]">Receipt</h1>
            </div>
            <div className="flex overflow-x-auto">
                <div className="p-4 md:w-1/5">
                    <div className="flex rounded-lg bg-[#F0FEEB] hover:bg-[url('/images/category/115.png')] p-8 flex-col items-center justify-center hover:scale-110">
                        <div className="flex items-center mb-3">
                            <div className="items-center justify-center rounded-full">
                                <Image width={71} height={71} className="object-center object-cover" alt="hero" src="/images/category/1.png" />
                            </div>
                        </div>
                        <div className="px-2 text-center flex flex-col items-center">
                            <h2 className="text-2xl text-gray-900 font-medium leading-none mb-4 mt-2">Cupcake</h2>
                            <h3 className="tracking-widest">22 Items</h3>
                        </div>
                    </div>
                </div>
                <div className="p-4 md:w-1/5">
                    <div className="flex rounded-lg bg-cyan-50 hover:bg-[url('/images/category/115.png')] p-8 flex-col items-center justify-center hover:scale-110">
                        <div className="flex items-center mb-3">
                            <div className="items-center justify-center rounded-full">
                                <Image width={71} height={71} className="object-center object-cover" alt="hero" src="/images/category/3.png" />
                            </div>
                        </div>
                        <div className="px-2 text-center flex flex-col items-center">
                            <h2 className="text-2xl text-gray-900 font-medium leading-none mb-4 mt-2">Pizza</h2>
                            <h3 className="tracking-widest">12 Items</h3>
                        </div>
                    </div>
                </div>
                <div className="p-4 md:w-1/5">
                    <div className="flex rounded-lg bg-[#EAEEFA] hover:bg-[url('/images/category/115.png')] p-8 flex-col items-center justify-center hover:scale-110">
                        <div className="flex items-center mb-3">
                            <div className="items-center justify-center rounded-full">
                                <Image width={71} height={71} className="object-center object-cover" alt="hero" src="/images/category/2.png" />
                            </div>
                        </div>
                        <div className="px-2 text-center flex flex-col items-center">
                            <h2 className="text-2xl text-gray-900 font-medium leading-none mb-4 mt-2">Kebab</h2>
                            <h3 className="tracking-widest">25 Items</h3>
                        </div>
                    </div>
                </div>
                <div className="p-4 md:w-1/5">
                    <div className="flex rounded-lg bg-[#F9EEF3] hover:bg-[url('/images/category/115.png')] p-8 flex-col items-center justify-center hover:scale-110">
                        <div className="flex items-center mb-3">
                            <div className="items-center justify-center rounded-full">
                                <Image width={71} height={71} className="object-center object-cover" alt="hero" src="/images/category/4.png" />
                            </div>
                        </div>
                        <div className="px-2 text-center flex flex-col items-center">
                            <h2 className="text-2xl text-gray-900 font-medium leading-none mb-4 mt-2">Salmon</h2>
                            <h3 className="tracking-widest">22 Items</h3>
                        </div>
                    </div>
                </div>
                <div className="p-4 md:w-1/5">
                    <div className="flex rounded-lg bg-[#F3F7D9] hover:bg-[url('/images/category/115.png')] p-8 flex-col items-center justify-center hover:scale-110">
                        <div className="flex items-center mb-3">
                            <div className="items-center justify-center rounded-full">
                                <Image width={71} height={71} className="object-center object-cover" alt="hero" src="/images/category/5.png" />
                            </div>
                        </div>
                        <div className="px-2 text-center flex flex-col items-center">
                            <h2 className="text-2xl text-gray-900 font-medium leading-none mb-4 mt-2">Doughnut</h2>
                            <h3 className="tracking-widest">11 Items</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-end pr-4 mt-3">
                <button className="flex w-fit h-fit bg-[#8BAC3E] text-white py-1 px-3 rounded-full mx-2 invisible md:visible"><FaChevronCircleLeft className="h-6" /><span className="ml-2 uppercase">prev</span></button>
                <button className="flex w-fit h-fit bg-[#8BAC3E] text-white py-1 px-3 rounded-full invisible md:visible"><span className="mr-2 uppercase">next</span><FaChevronCircleRight className="h-6" /></button>
            </div>
        </section>
    )
}

export default Category
