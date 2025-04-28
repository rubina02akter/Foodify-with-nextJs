import Link from "next/link";

export default function Navbar() {

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
    </>
  );

  return (
    <div className="">
      <div className="navbar h-12 bg-[#ba0120] shadow-sm">
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
          <a className="text-white text-xl">Foodify</a>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          <div className="flex-none flex items-center">
            {/* Cart Dropdown */}
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn bg-white btn-circle">
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
                  <span className="badge badge-sm bg-red-700 text-white indicator-item">0</span>
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
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Avatar Dropdown */}
            <div className="dropdown dropdown-end ml-2">
              
               <div>
                <Link href='/login'><button>Login</button></Link>
               </div>
           
        
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
