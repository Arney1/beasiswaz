import { ReactNode } from "react";

const Navbar = ({ children, title }) => {
    return (
        <>
            <div className="sticky top-0 z-20 navbar bg-gradient-to-r from-primary to-accent shadow-md text-black">
                <div className="navbar-start">
                    <a
                        className="btn btn-ghost normal-case text-xl myFont1"
                        href=""
                    >
                        {title}
                    </a>
                </div>
                <div className="navbar-end myFont2">
                    <div className="btn-ghost dropdown dropdown-end block lg:hidden">
                        <label tabIndex={0} className="btn btn-ghost">
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
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-primary rounded-box w-52"
                        >
                            {children}
                        </ul>
                    </div>
                    <ul className="hidden lg:flex menu menu-horizontal px-1">
                        {children}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;
