import { Link } from "@inertiajs/react";

export default function ResponsiveNavLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <li>
            <Link {...props}>{children}</Link>
        </li>
    );
}
