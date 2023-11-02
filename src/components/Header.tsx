import Image from "next/image";
import Link from "next/link";
import { Banner } from "@/assets";
import {
    BasicMonsters,
    BasicMonstersHover,
    BossMonsters,
    BossMonstersHover,
    Characters,
    CharactersHover,
    Content,
    ContentHover,
    ContentObjects,
    ContentObjectsHover,
    ContentWeapons,
    ContentWeaponsHover,
    Lore,
    LoreHover,
    Monsters,
    MonstersHover,
} from "@/assets/menu-buttons";
import { NavItem } from "./NavItem";

export const Header = () => {
    return (
        <>
            <header>
                <div>
                    <Link href="/home">
                        <Image src={Banner} alt="banner" />
                    </Link>
                </div>
            </header>
            <nav className="flex justify-center">
                <div className="format5">
                    <ul className="menu-bar">
                        <NavItem
                            href="/lore"
                            image={Lore}
                            hoverImage={LoreHover}
                        />
                        <NavItem
                            href="/characters"
                            image={Characters}
                            hoverImage={CharactersHover}
                        />
                        <NavItem image={Monsters} hoverImage={MonstersHover}>
                            <ul>
                                <NavItem
                                    href="/monsters/normal"
                                    image={BasicMonsters}
                                    hoverImage={BasicMonstersHover}
                                />
                                <NavItem
                                    href="/monsters/bosses"
                                    image={BossMonsters}
                                    hoverImage={BossMonstersHover}
                                />
                            </ul>
                        </NavItem>

                        <NavItem image={Content} hoverImage={ContentHover}>
                            <ul>
                                <NavItem
                                    href="/content/objects"
                                    image={ContentObjects}
                                    hoverImage={ContentObjectsHover}
                                />
                                <NavItem
                                    href="/content/weapons"
                                    image={ContentWeapons}
                                    hoverImage={ContentWeaponsHover}
                                />
                            </ul>
                        </NavItem>
                    </ul>
                </div>
            </nav>
        </>
    );
};
