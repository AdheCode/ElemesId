import Button from './Button';
import Rating from "@/components/Rating";

function Header() {
    return (
      <section className="text-gray-700 body-font bg-[url('/images/115.png')]">
        <div className="container mx-auto flex px-5 py-10 md:py-24 md:flex-row flex-col md:items-center">
          <div className="lg:flex-grow h-full md:w-1/2 lg:pr-24 md:pr-16 flex flex-col items-start md:text-left mb-16 md:mb-0">
            <h1 className="text-base text-5xl md:text-8xl mb-2 font-medium text-[#8BAC3E]">Good Food Us</h1>
            <h1 className="text-base text-5xl md:text-8xl mb-7 font-medium text-[#8BAC3E]">Good Mood</h1>
            <p className="mb-8 leading-relaxed">I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.</p>
            <div className="flex justify-center">
              <Button>Daftar Sekarang</Button>
              <button type="button" className="inline-block px-5 py-2 bg-gray-200 font-medium leading-tight rounded-full ml-2">About Us</button>
            </div>
          </div>
          <div className="md:max-w-lg md:w-full md:w-1/3 w-2/3">
              <img className="rounded-full ring-[40px] ring-gray-100" alt="hero" src="/images/header/food.png" />
              <div className="flex flex-row rounded-2xl bg-white shadow p-4 h-43 w-60">
                  <div className="flex items-center mr-3">
                      <div className="inline-flex items-center justify-center rounded-full text-white flex-shrink-0">
                          <img width="50" height="50" className="object-center object-cover rounded" alt="hero" src="./images/header/food.png" />
                      </div>
                  </div>
                  <div className="flex flex-col">
                      <h2 className="text-sm text-black font-medium leading-none">Green Salad Tomato</h2>
                      <h2 className="text-sm text-[#8BAC3E] font-medium leading-none mb-2 mt-2">Tomato</h2>
                      <Rating />
                  </div>
              </div>
          </div>
        </div>
      </section>
    )
}

export default Header
