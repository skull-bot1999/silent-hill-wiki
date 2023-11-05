"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import $ from "jquery";
import useMediaQuery from "@/hooks/useMediaQuery";

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
    const matches = useMediaQuery("(min-width: 768px)");
    const [isShowingChildren, setIsShowingChildren] = useState(false);

    useEffect(() => {
        if (matches) {
            const dropdowns = $("div.nav-item.dropdown").get();
            dropdowns.forEach((dropdown) => {
                const content: any =
                    dropdown.children[dropdown.children.length - 1];
                const elements: any =
                    content.getElementsByClassName("nav-item");
                for (let index = 0; index < elements.length; index++) {
                    console.log(dropdown.clientWidth);
                    elements[index].style =
                        "width:" + dropdown.clientWidth + "px";
                }
            });
        }
    }, [matches]);

    return (
        <div
            onClick={() => setIsShowingChildren((value) => !value)}
            className={"nav-item " + (className ? className : "")}
        >
            {href ? (
                <Link href={href}>{text}</Link>
            ) : (
                <a className="flex justify-center">
                    {text}
                    {children && isShowingChildren ? (
                        <ChevronUpIcon width={20} />
                    ) : (
                        <ChevronDownIcon width={20} />
                    )}
                </a>
            )}
            {isShowingChildren && children}
        </div>
    );
};
