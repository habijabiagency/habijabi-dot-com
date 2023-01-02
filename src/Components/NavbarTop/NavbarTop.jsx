import React from "react";
import { AiOutlineShoppingCart} from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";

const NavbarTop = () => {
  return (
    <div className="flex justify-between py-2">
      <div className="flex align-middle text-3xl">
        <div>
          <AiOutlineShoppingCart />
        </div>
        <div className="text-2xl">Habijabi.com</div>
      </div>
      <div className="flex">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search our store"
            className="input input-bordered rounded-none border-red-200  outline-red-200 focus:outline-red-200 hover:border-red-200"
          />
        </div>
        <button className="btn btn-primary rounded-none border-red-300 focus:border-red-400 hover:border-red-400 bg-red-500 hover:bg-red-700 text-white ">
          Button
        </button>
      </div>
      <div className="flex">
        <div className="btn btn-ghost rounded-none"><FaRegUser /></div>
        <div className="btn btn-ghost rounded-none"><FiHeart /></div>
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost rounded-none">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>{" "}
              <span className="bg-red-700 p-0.5 rounded-full text-white fs-06 indicator-item">8</span>
            </div>
          </label>{" "}
          <div
            tabIndex="0"
            className="mt-3 card card-compact w-52 dropdown-content bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>{" "}
              <span className="text-info">Subtotal: $999</span>{" "}
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
