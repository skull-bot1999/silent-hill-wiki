"use client";

import { NavItem } from "./NavItem";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import $ from "jquery";
import Link from "next/link";
import Image from "next/image";
import { Banner } from "@/assets";

export const Navbar = () => {
    const matches = useMediaQuery("(max-width: 768px)");
    const [isCollapsed, setIsCollapsed] = useState(true);

    useEffect(() => {
        setIsCollapsed(matches);
    }, [matches]);

    useEffect(() => {
        if (isCollapsed) {
            $("nav").addClass("collapsed");
        } else {
            $("nav").removeClass("collapsed");
        }
    }, [isCollapsed]);

    return (
        <>
            <nav>
                <div className="brand">
                    <Link href="/">
                        <Image src={Banner} alt="banner" />
                    </Link>
                </div>
                {matches && (
                    <button
                        className="hamburger"
                        onClick={() => setIsCollapsed((value) => !value)}
                    >
                        <Bars3Icon />
                    </button>
                )}
                {!isCollapsed && (
                    <ul className="menu-bar">
                        <NavItem href="/lore" text="Historia" />
                        <NavItem href="/characters" text="Personajes" />
                        <NavItem text="Monstruos" className="dropdown">
                            <div className="dropdown-content">
                                <NavItem
                                    href="/monsters/normal"
                                    text="Comunes"
                                />
                                <NavItem href="/monsters/bosses" text="Jefes" />
                            </div>
                        </NavItem>

                        <NavItem text="Contenido" className="dropdown">
                            <div className="dropdown-content">
                                <NavItem
                                    href="/content/objects"
                                    text="Objetos"
                                />
                                <NavItem href="/content/weapons" text="Armas" />
                            </div>
                        </NavItem>
                    </ul>
                )}
            </nav>
        </>
    );
};
