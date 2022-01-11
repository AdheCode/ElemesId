import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';

function Navbar() {
    return (
        <nav className="bg-inherit text-gray-700 w-full">
            <div className="container mx-auto flex flex-wrap p-5 justify-between items-center">
                <Link href='/'>
                    <a className="flex md:w-2/5 items-center md:justify-start mb-4 md:mb-0">
                        <Image src='/images/logo.png' width={174} height={45} alt='logo' />
                    </a>
                </Link>
                <div className="hidden lg:block font-medium">
                    <Link href='/blog'>
                        <a className="mx-5 cursor-pointer">Home</a>
                    </Link>
                    <Link href='/about'>
                        <a className="mx-5 cursor-pointer">About</a>
                    </Link>
                    <Link href='/about'>
                        <a className="mx-5 cursor-pointer">Promotions</a>
                    </Link>
                    <Link href='/about'>
                        <a className="mx-5 cursor-pointer">Blogs</a>
                    </Link>
                    <Link href='/about'>
                        <a className="mx-5 cursor-pointer">Contact Us</a>
                    </Link>
                </div>
                <div className="flex md:w-1/5 items-center justify-end md:ml-auto">
                    <Link href='/blog'>
                        <a className="mx-5 font-medium cursor-pointer hidden md:block">Masuk</a>
                    </Link>
                    <Button>Daftar Sekarang</Button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
