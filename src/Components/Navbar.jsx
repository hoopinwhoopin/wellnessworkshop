import logo from "../assets/Logo.svg";
import logo_small from "../assets/Logo_small.svg";
import x_circle from "../assets/x-circle-fill 1.svg";
import dots from "../assets/dots.svg";
function Navbar() {
  return (
    <div className="navbar max-sm:sticky  w-full top-0 flex Atvik-Regular font-medium backdrop-blur-sm bg-white bg-opacity-50 z-10  justify-around sm:py-8 sm:px-16 px-10 py-5">
      <div className="hidden sm:flex  ">
        <ul className="flex-row flex text-base p-4 gap-8">
          <li>
            <a href="#Hero"> Home </a>
          </li>
          <li>
            About Us
          </li>
          <li>
            Why Us
          </li>
          <li>
            Gallery
          </li>
        </ul>
      </div>
      <div className="flex flex-row justify-evenly items-center sm:hidden">
        <button><img src={dots} alt="cross"/></button>
        <img className="h-1/2 m-3" src={logo_small} alt="logo" />
      </div>
      <div className="navbar__logo flex items-center align-middle ">
        <img className="hidden sm:block" src={logo} alt="logo" />
      </div>
      <button className="pink px-4 py-2 sm:px-8 sm:py-4 rounded-lg text-base text-white">Get in Touch</button>
    </div>
  );
}

export default Navbar;