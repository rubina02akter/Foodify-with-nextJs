"use client";
import Link from "next/link";
import UseAuth from "../ContextApi/UseAuth";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from '../../../public/logo/Yellow_Abstract_Cooking_Fire_Free_Logo__1_-removebg-preview.png'

export default function Navbar() {
  const { cart, user, signOutUser } = UseAuth();
  const router = useRouter();

  const handleLogOut = () => {
    signOutUser();
    router.push("/login");
  };

  const links = (
    <>
      <li>
        <Link href="/" className="btn mr-2">
          Home
        </Link>
      </li>
      <li>
        <Link href="/about" className="btn mr-2">
          About
        </Link>
      </li>
      <li>
        <Link href="/menu" className="btn mr-2">
          Menu
        </Link>
      </li>
      <li>
        <Link href="/chefs" className="btn mr-2">
          Chefs
        </Link>
      </li>
      <li>
        <Link href="/contact" className="btn mr-2">
          Contact
        </Link>
      </li>
      {user && (
        <li>
          <Link href="/dashboard" className="btn mr-2">
            Dashboard
          </Link>
        </li>
      )}
    </>
  );

  return (
    <nav className="text-white fixed w-full z-50 bg-opacity-40 bg-[#6d34214b]">
      <div className="navbar h-20  shadow-sm">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 w-52 p-2 shadow bg-base-100 rounded-box z-10"
            >
              {links}
            </ul>
          </div>
          <Image
          width={500}
          height={500}
          alt="Photo"
          src={logo}
          className='w-48 h-60 mt-8'
          />
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          <div className="flex-none flex items-center gap-3">
            {/* Cart Dropdown */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn bg-white btn-circle"
              >
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
                    />
                  </svg>
                  <span className="badge badge-sm bg-red-700 text-white indicator-item">
                    <button>{cart.length}</button>
                  </span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="card card-compact dropdown-content mt-3 w-52 shadow bg-base-100 z-10"
              >
                <div className="card-body">
                  <span className="text-lg font-bold"></span>
                  <span className="text-info"></span>
                  <div className="card-actions">
                    <Link href="/view-cart">
                      <button className="btn btn-primary btn-block">
                        View cart
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Avatar Dropdown */}
            <div>
              {user ? (
                <div className="dropdown dropdown-end z-50">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div
                      title={user?.displayName || "User"}
                      className="w-10 rounded-full tooltip"
                      data-tip={user?.displayName}
                    >
                      <Image
                        width={200}
                        height={200}
                        alt="Photo"
                        src=''
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box md:w-52 w-32 text-xs"
                  >
                    <li>
                      <Link href="/dashboard/profile" className="btn mr-2">
                        My Profile
                      </Link>
                    </li>
                    <li>
                      <Link href="/dashboard" className="btn mr-2">
                        Dashboard
                      </Link>
                    </li>
                    <li className="mt-2">
                      <button
                        onClick={() => handleLogOut()}
                        className="bg-gray-200 block text-center"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <>
                  <Link className="btn btn-outline mr-2" href="/login">
                    Log in
                  </Link>
                </>
              )}
            </div>

            {/* <div className="dropdown dropdown-end ml-2">
              {user ? (
                <div>
                  <button onClick={() => handleLogOut()}>Logout</button>
                </div>
              ) : (
                <div>
                  <Link href="/login">
                    <button>Login</button>
                  </Link>
                </div>
              )}
            </div> */}
          </div>
        </div>
      </div>
    </nav>
  );
}
