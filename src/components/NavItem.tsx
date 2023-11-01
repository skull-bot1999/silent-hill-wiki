import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";

type NavItemProps = {
    image: StaticImport;
    hoverImage: StaticImport;
    href?: string;
};

export const NavItem = ({
    image,
    hoverImage,
    href,
    children,
}: PropsWithChildren<NavItemProps>) => {
    const Images = () => (
        <>
            <Image alt="lore hover" src={hoverImage} />
            <Image src={image} alt="lore" className="top" />
        </>
    );

    return (
        <li>
            <div className="item-container">
                {href ? (
                    <Link href={href}>
                        <Images />
                    </Link>
                ) : (
                    <Images />
                )}
            </div>
            {children}
        </li>
    );
};
