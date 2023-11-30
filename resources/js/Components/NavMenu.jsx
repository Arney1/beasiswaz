const NavMenu = ({ title, image, link, children, onClick }) => {
    if (!children) {
        return (
            <li>
                <a href={link} onClick={onClick}>
                    {title}
                </a>
            </li>
        );
    } else {
        if (image) {
            const imagez = (
                <img className="w-6 mask mask-circle mr-1" src={image} />
            );
            return imagez;
        }
        return (
            <li>
                <details>
                    <summary>
                        <div className="flex flex-row items-center">
                            {image}
                            {title}
                        </div>
                    </summary>
                    <ul className="rounded-none p-2 right-[0.125rem] bg-primary">
                        {children}
                    </ul>
                </details>
            </li>
        );
    }
};

export default NavMenu;
