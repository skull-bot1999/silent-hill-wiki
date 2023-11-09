import Image from "next/image";

export const SilentHillPage = () => {
    return (
        <div className="card ">
            <a
                className="text-center"
                target="_blank"
                href="https://www.konami.com/games/jp/ja/products/silenthill/"
            >
                Pagina oficial de Silent Hill
                <Image
                    className="rounded-lg mt-2"
                    width={200}
                    height={200}
                    alt="silent hill"
                    src="https://ipfs.filebase.io/ipfs/QmNYbgzjoC9PChCif92bh2yw679wQvyH89X5b1V7HbkqCT"
                />
            </a>
        </div>
    );
};
