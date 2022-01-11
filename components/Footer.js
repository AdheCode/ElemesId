import Image from 'next/image';
import Link from 'next/link';
import { FaRegEnvelope, FaPhoneAlt, FaInstagram } from "react-icons/fa";


function Footer() {
  return (
    <footer className="container mx-auto my-7 text-gray-600">
      <div className="mx-6 py-10 md:text-left bg-[#F9FFF7] rounded-xl">
        <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="">
            <div className="flex mb-4">
                <Link href='/'>
                    <a>
                        <Image src='/images/logo.png' width={207} height={50} alt='logo' />
                    </a>
                </Link>
            </div>
            <p className="mb-4">
            Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, 
            Kecamatan Setiabudi, Kota Jakarta Selatan, 
            Daerah Khusus Ibukota Jakarta 12950
            </p>
            <div className="flex flex-row">
              <FaRegEnvelope className="mr-5 text-[#8BAC3E] hover:scale-110" /> 
              <FaPhoneAlt className="mr-5 text-[#8BAC3E] hover:scale-110" />
              <FaInstagram className="text-[#8BAC3E] hover:scale-110"/>
            </div>
          </div>
          <div className="">
            <h6 className="font-semibold mb-4 flex md:justify-start">
                Categories
            </h6>
            <p className="mb-4">
              <a href="#!">
                Cupcake
              </a>
            </p>
            <p className="mb-4">
              <a href="#!">
                Pizza
              </a>
            </p>
            <p className="mb-4">
              <a href="#!">
                Kebab
              </a>
            </p>
            <p className="mb-4">
              <a href="#!">
                Salmon
              </a>
            </p>
            <p>
              <a href="#!">
                Dougnut
              </a>
            </p>
          </div>
          <div className="">
            <h6 className="font-semibold mb-4 flex md:justify-start">
                About Us
            </h6>
            <p className="mb-4">
              <a href="#!">
                About Us
              </a>
            </p>
            <p className="mb-4">
              <a href="#!">
                FAQ
              </a>
            </p>
            <p className="mb-4">
              <a href="#!">
                Report Problem
              </a>
            </p>
          </div>
          <div className="">
            <h6 className="font-semibold mb-4 flex md:justify-start">
                Newsletter
            </h6>
            <p className="flex items-center md:justify-start mb-4">
                Get now free 50% discount for alll products on your first order
            </p>
            <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                <input type="text" className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-black rounded rounded-r-none px-3 relative" placeholder="Your email address" />
                <div className="flex -mr-px">
                    <button className="flex items-center leading-normal bg-[#8BAC3E] rounded rounded-l-none border border-l-0 border-[#8BAC3E] px-3 whitespace-no-wrap text-white text-sm uppercase">send</button>
                </div>	
            </div>
            <p className="flex items-center md:justify-start mb-4">
              <FaRegEnvelope className="mr-5 text-[#8BAC3E]" />
                elemesid@gmail.com
            </p>
            <p className="flex items-center md:justify-start mb-4">
              <FaPhoneAlt className="mr-5 text-[#8BAC3E]" />
                0888 1111 2222 
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
