import { Outlet, Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCaretDown } from "react-icons/rx";
import { BsFillTelephoneInboundFill } from "react-icons/bs";


const Navbar = () => {
    return (
        <div className='flex mx-auto container'>
            <div className='flex items-center bg-red-500 text-white hover:text-red-200 px-4 py-2'>
                <div>All categories</div>
                <GiHamburgerMenu className='ml-4 ' />
            </div>
            <div className='grow flex'>
                <Link className="flex items-center px-4 py-2 bg-gray-50 hover:bg-gray-100" to="/"><div>Home</div> <div className="link-caret-icon"><RxCaretDown /></div></Link>
                <Link className="flex items-center px-4 py-2 bg-gray-50 hover:bg-gray-100" to="#"><div>Pages</div> <div className="link-caret-icon"><RxCaretDown /></div></Link>
                <Link className="flex items-center px-4 py-2 bg-gray-50 hover:bg-gray-100" to="/all-products"><div>Products</div> <div className="link-caret-icon"><RxCaretDown /></div></Link>
                <Link className="flex items-center px-4 py-2 bg-gray-50 hover:bg-gray-100" to="#"><div>Blog</div> <div className="link-caret-icon"><RxCaretDown /></div></Link>
                <Link className="flex items-center px-4 py-2 bg-gray-50 hover:bg-gray-100" to="#"><div>Shop</div> <div className="link-caret-icon"><RxCaretDown /></div></Link>
                <Link className="flex items-center px-4 py-2 bg-gray-50 hover:bg-gray-100" to="#"><div>Contact us</div> <div className="link-caret-icon"><RxCaretDown /></div></Link>
            </div>
            <div className="flex items-center">
                <BsFillTelephoneInboundFill className="text-red-500" />
                <span className="ml-2">(1234) 12345678</span>
            </div>
        </div>
    );
};

export default Navbar;