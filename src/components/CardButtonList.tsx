import React from "react";
import { CardButton } from "./CardButton";

const itemsArray = [
    {
        href: "/lore",
        imageUrl:
            "https://www.dropbox.com/scl/fi/btsmq19i0ee72p7lnb10h/historia.jpg?rlkey=vlyw7o69gmwiuhkc47xmppi6j&dl=0",
        title: "Historia",
    },
    {
        href: "/characters",
        imageUrl:
            "https://www.dropbox.com/scl/fi/0ddzkod9zqgge4elhhbyg/Personajes.png?rlkey=uauu1akrz16xbmd7ri9cxnchs&dl=0",
        title: "Personajes",
    },
    {
        href: "/monsters",
        imageUrl:
            "https://www.dropbox.com/scl/fi/9riklpx2vm2x9uufjisj7/monstruos.png?rlkey=p4abx3gk7rerlcgdeqzwc22zn&dl=0",
        title: "Monstruos",
    },
    {
        href: "/bosses",
        imageUrl:
            "https://www.dropbox.com/scl/fi/dciamr4z8yp77y2exw2j0/jefes.png?rlkey=su6roi5baag7qy686q1y69f6t&dl=0",
        title: "Jefes",
    },
    {
        href: "/weapons",
        imageUrl:
            "https://www.dropbox.com/scl/fi/6y3ryymwdd7kbhen03ow8/armas.jpg?rlkey=f7g6rpl1vd5l333gphpblcymt&dl=0",
        title: "Armas",
    },
    {
        href: "/objects",
        imageUrl:
            "https://www.dropbox.com/scl/fi/7defc2okyf4dy42yt5byi/objetos.jpg?rlkey=q1uvno3j4jhzd6rywkbtg11l1&dl=0",
        title: "Objetos",
    },
];

export const CardButtonList = () => {
    return (
        <div className="grid grid-cols-6 gap-4 justify-items-center">
            {itemsArray.map(({ href, imageUrl, title }) => (
                <CardButton
                    href={href}
                    imageUrl={imageUrl + "&raw=1"}
                    title={title}
                />
            ))}
        </div>
    );
};
