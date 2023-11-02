import Image from "next/image";
import { Footer as FooterImage } from "@/assets";

export const Footer = () => {
    return (
        <footer>
            <Image src={FooterImage} alt="footer" />
        </footer>
    );
};
