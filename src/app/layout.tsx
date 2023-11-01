import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/styles.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Silent Hill Wiki",
    description: "Wiki de Silent Hill 1",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
