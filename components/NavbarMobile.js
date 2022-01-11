import { FaBars } from "react-icons/fa";

function NavbarMobile() {
  return (
    <header className="fixed w-full z-30 bg-white shadow bottom-0 text-gray-700 visible md:invisible">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex">
              <div className="grid grid-rows-1 justify-items-center">
                <FaBars />
                <p>Home</p>
              </div>
          </div>
          <div className="flex">
              <div className="grid grid-rows-1 justify-items-center">
                <FaBars />
                <p>Promotions</p>
              </div>
          </div>
          <div className="flex">
              <div className="grid grid-rows-1 justify-items-center">
                <FaBars />
                <p>Others</p>
              </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavbarMobile;
