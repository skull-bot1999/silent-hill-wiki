import Image from "next/image";

export const SilentHillPage = () => {
    return (
        <div id="silent-hill-page" className="card full-image">
            <a
                className="text-center"
                target="_blank"
                href="https://www.konami.com/games/jp/ja/products/silenthill/"
            >
                Pagina oficial de Silent Hill
                <Image
                    className="rounded-lg mt-2 sm:w-full"
                    width={200}
                    height={200}
                    alt="silent hill"
                    src="https://www.dropbox.com/scl/fi/nykbdq342z3kgqcr35so5/Silent-Hill-1.jpg?rlkey=h27hkumr6bidytc0i8ae15i8i&dl=0&raw=1"
                />
            </a>
        </div>
    );
};
