"use client";
import { useState } from "react";
import Link from "next/link";
import { PropsWithChildren } from "react";

type NavItemProps = {
    text: string;
    href?: string;
    className?: string;
};

export const NavItem = ({
    text,
    href,
    children,
    className,
}: PropsWithChildren<NavItemProps>) => {
    const [isShowingChildren, setIsShowingChildren] = useState(false);

    return (
        <div
            onClick={() => setIsShowingChildren((value) => !value)}
            className={"nav-item " + (className ? className : "")}
        >
            {href ? <Link href={href}>{text}</Link> : <a>{text}</a>}
            {isShowingChildren && children}
        </div>
    );
};
