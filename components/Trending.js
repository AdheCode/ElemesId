import Rating from "@/components/Rating";
import Button from './Button';

function Trending() {
    return (
            <section className="container max-w-9xl mx-auto m-8 text-gray-700 body-font">
                <div className="flex">
                    <h1 className="pl-3 sm:text-3xl text-2xl font-medium title-font text-black">Browser Our Trending</h1>
                </div>
                <div className="flex">
                    <h1 className="pl-3 sm:text-3xl text-2xl font-medium title-font text-[#8BAC3E]">Receipt</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4">
                    <div className="p-4">
                        <div className="flex rounded-lg bg-[#E6F3F5] hover:bg-[url('/images/category/115.png')] p-8 flex-col hover:scale-105">
                            <div className="flex items-center mb-3">
                                <div className="w-25 h-30 inline-flex items-center justify-center rounded-full text-white flex-shrink-0">
                                    <img className="object-center object-cover rounded" alt="hero" src="./images/trending/pexels-brett-jordan-842519 1.png" />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <h2 className="text-2xl text-black font-medium leading-none mb-2 mt-2">Pizza Paperoni</h2>
                                <h2 className="text-1xl text-[#8BAC3E] font-medium leading-none mb-4 mt-2">Pizza</h2>
                                <Rating />
                            </div>
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="flex rounded-lg bg-[#E6F3F5] hover:bg-[url('/images/category/115.png')] p-8 flex-col hover:scale-105">
                            <div className="flex items-center mb-3">
                                <div className="w-25 h-30 inline-flex items-center justify-center rounded-full text-white flex-shrink-0">
                                    <img className="object-center object-cover rounded" alt="hero" src="./images/trending/pexels-daria-shevtsova-1260968 1.png" />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <h2 className="text-2xl text-black font-medium leading-none mb-2 mt-2">Pizza Meat</h2>
                                <h2 className="text-1xl text-[#8BAC3E] font-medium leading-none mb-4 mt-2">Pizza</h2>
                                <Rating />
                            </div>
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="flex rounded-lg bg-[#EAEEFA] hover:bg-[url('/images/category/115.png')] p-8 flex-col hover:scale-105">
                            <div className="flex items-center mb-3">
                                <div className="w-25 h-30 inline-flex items-center justify-center rounded-full text-white flex-shrink-0">
                                    <img className="object-center object-cover rounded" alt="hero" src="./images/trending/pexels-nishant-aneja-2955819 1.png" />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <h2 className="text-2xl text-black font-medium leading-none mb-2 mt-2">Doner Kebab</h2>
                                <h2 className="text-1xl text-[#8BAC3E] font-medium leading-none mb-4 mt-2">Kebab</h2>
                                <Rating />
                            </div>
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="flex rounded-lg bg-[#F9EEF3] hover:bg-[url('/images/category/115.png')] p-8 flex-col hover:scale-105">
                            <div className="flex items-center mb-3">
                                <div className="w-25 h-30 inline-flex items-center justify-center rounded-full text-white flex-shrink-0">
                                    <img className="object-center object-cover rounded" alt="hero" src="./images/trending/pexels-olga-lioncat-7245464 1.png" />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <h2 className="text-2xl text-black font-medium leading-none mb-2 mt-2">Salmon Roll</h2>
                                <h2 className="text-1xl text-[#8BAC3E] font-medium leading-none mb-4 mt-2">Salmon</h2>
                                <Rating />
                            </div>
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="flex rounded-lg bg-[#F0FEEB] hover:bg-[url('/images/category/115.png')] p-8 flex-col hover:scale-105">
                            <div className="flex items-center mb-3">
                                <div className="w-25 h-30 inline-flex items-center justify-center rounded-full text-white flex-shrink-0">
                                    <img className="object-center object-cover rounded" alt="hero" src="./images/trending/pexels-oleg-magni-1908674 1.png" />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <h2 className="text-2xl text-black font-medium leading-none mb-2 mt-2">Cupcake Choco</h2>
                                <h2 className="text-1xl text-[#8BAC3E] font-medium leading-none mb-4 mt-2">Cupcake</h2>
                                <Rating />
                            </div>
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="flex rounded-lg bg-[#F3F7D9] hover:bg-[url('/images/category/115.png')] p-8 flex-col hover:scale-105">
                            <div className="flex items-center mb-3">
                                <div className="w-25 h-30 inline-flex items-center justify-center rounded-full text-white flex-shrink-0">
                                    <img className="object-center object-cover rounded" alt="hero" src="./images/trending/pexels-alena-shekhovtcova-6940978 1.png" />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <h2 className="text-2xl text-black font-medium leading-none mb-2 mt-2">Doughnut Milk</h2>
                                <h2 className="text-1xl text-[#8BAC3E] font-medium leading-none mb-4 mt-2">Doughnut</h2>
                                <Rating />
                            </div>
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="flex rounded-lg bg-[#F3F7D9] hover:bg-[url('/images/category/115.png')] p-8 flex-col hover:scale-105">
                            <div className="flex items-center mb-3">
                                <div className="w-25 h-30 inline-flex items-center justify-center rounded-full text-white flex-shrink-0">
                                    <img className="object-center object-cover rounded" alt="hero" src="./images/trending/pexels-karley-saagi-2064449 1.png" />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <h2 className="text-2xl text-black font-medium leading-none mb-2 mt-2">Doughnut Unicorn</h2>
                                <h2 className="text-1xl text-[#8BAC3E] font-medium leading-none mb-4 mt-2">Doughnut</h2>
                                <Rating />
                            </div>
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="flex rounded-lg bg-[#EAEEFA] hover:bg-[url('/images/category/115.png')] p-8 flex-col hover:scale-105">
                            <div className="flex items-center mb-3">
                                <div className="w-25 h-30 inline-flex items-center justify-center rounded-full text-white flex-shrink-0">
                                    <img className="object-center object-cover rounded" alt="hero" src="./images/trending/pexels-polina-tankilevitch-6419736 1.png" />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <h2 className="text-2xl text-black font-medium leading-none mb-2 mt-2">Kathi Kebab</h2>
                                <h2 className="text-1xl text-[#8BAC3E] font-medium leading-none mb-4 mt-2">Kebab</h2>
                                <Rating />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-5">
                    <Button>All Receipt</Button>
                </div>
            </section>
    )
}

export default Trending
