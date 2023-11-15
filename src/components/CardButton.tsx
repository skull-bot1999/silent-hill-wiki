import Image from "next/image";
import React from "react";

export const CardButton = ({
    imageUrl,
    title,
    href,
}: {
    imageUrl: string;
    title: string;
    href: string;
}) => {
    return (
        <a className="card btn solid" href={href}>
            <img src={imageUrl} alt={title.toLowerCase()} />
            <span>{title}</span>
        </a>
    );
};
