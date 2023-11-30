import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import NavMenu from "@/Components/NavMenu";

export default function Authenticated({ user, header, children, menus }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-base-100">
            <Navbar title={header}>
                {menus}
                <NavMenu title={user.name}>
                    <ResponsiveNavLink
                        method="post"
                        href={route("logout")}
                        as="button"
                    >
                        Log Out
                    </ResponsiveNavLink>
                    <NavMenu title={"Profil"} link={"/profile"}></NavMenu>
                    
                </NavMenu>
            </Navbar>

            <div className="flex-1 bg-base-100 p-2">{children}</div>
        </div>
    );
}
