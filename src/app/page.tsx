import Image from "next/image";
import { TitleQuote } from "@/assets";
import { SubscribeForm } from "@/components/SubscribeForm";

export default function Home() {
    return (
        <>
            <section className="flex justify-center">
                <div className="body">
                    <h1>Inicio</h1>
                    <hr />
                    <h2 className="text-center">
                        Bienvenido a la wiki de Silent Hill 1
                        <br />
                        Aqui encontraras informacion sobre el juego
                    </h2>
                    <div className="grid grid-cols-5 mt-5 gap-5">
                        <div className="col-span-4 border-[1px] p-5 border-red-700 flex flex-col items-center">
                            <Image
                                className="p-6"
                                priority
                                src={TitleQuote}
                                alt="quote"
                            />
                            <p>
                                Silent Hill es la primera entrega de la serie de
                                videojuegos Silent Hill, una franquicia de gran
                                éxito de juegos de aventura y survival horror.
                                Silent Hill fue desarrollado por{" "}
                                <b>Team Silent</b> y publicado por <b>Konami</b>
                                . Fue publicado para la PlayStation de Sony en
                                Norteamérica el 31 de enero de 1999.
                            </p>
                            <p>
                                Es un juego de acción y Survival Horror que
                                cuenta con una cámara en tercera persona y
                                entornos tridimensionales en tiempo real. El
                                juego usa efectos de neblina y oscuridad para
                                ocultar las limitaciones de hardware que el
                                juego posee. Este aspecto, ha sido alabado por
                                la crítica ya que ayuda a alimentar la atmósfera
                                terrorífica del juego. La obra presenta a un
                                protagonista sin cualidades especiales o
                                destreza física por sobre lo normal, en
                                contraste con otras entregas de Survival Horror.
                            </p>
                        </div>
                        <div className="col-span-1 flex flex-col items-center">
                            <div>
                                <a
                                    target="_blank"
                                    href="https://www.konami.com/games/jp/ja/products/silenthill/"
                                >
                                    Pagina oficial de Silent Hill
                                </a>
                                <img src="https://ipfs.filebase.io/ipfs/QmNYbgzjoC9PChCif92bh2yw679wQvyH89X5b1V7HbkqCT"></img>
                            </div>
                            <div>
                                <SubscribeForm />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="format0">
                    Inicio
                    <hr />
                    <div className="format6">
                        <center>
                            Bienvenido a la wiki de Silent Hill
                            <br />
                            Aqui encontraras informacion sobre el juego
                        </center>
                    </div>
                    <div className="format">
                        <div className="format1">
                            <center>
                                <img src="Imagenes creadas\titulo\titulo.png" />
                            </center>
                        </div>
                        <br />
                        <p>
                            Silent Hill es la primera entrega de la serie de
                            videojuegos Silent Hill, una franquicia de gran
                            éxito de juegos de aventura y survival horror.
                            Silent Hill fue desarrollado por <b>Team Silent</b>{" "}
                            y publicado por <b>Konami</b>. Fue publicado para la
                            PlayStation de Sony en Norteamérica el 31 de enero
                            de 1999.
                            <p>
                                Es un juego de acción y Survival Horror que
                                cuenta con una cámara en tercera persona y
                                entornos tridimensionales en tiempo real. El
                                juego usa efectos de neblina y oscuridad para
                                ocultar las limitaciones de hardware que el
                                juego posee. Este aspecto, ha sido alabado por
                                la crítica ya que ayuda a alimentar la atmósfera
                                terrorífica del juego. La obra presenta a un
                                protagonista sin cualidades especiales o
                                destreza física por sobre lo normal, en
                                contraste con otras entregas de Survival Horror.
                            </p>
                        </p>
                    </div>
                    <div className="format2">
                        <center>
                            <p>Pagina Oficial de Silent Hill</p>
                            <a
                                href="https://www.konami.com/games/jp/ja/products/silenthill/"
                                target="_blank"
                            >
                                <img
                                    src="Imagenes\Silent-Hill-1.jpg"
                                    className="ajustarimagen"
                                />
                            </a>
                        </center>
                    </div>
                    <div className="format3">
                        <center>Inscribirse</center>
                        <form>
                            <label htmlFor="nombre">Nombre</label>
                            <input
                                type="text"
                                placeholder="Escribe tu nombre"
                                name="nombre"
                                id="nombre"
                            />
                            <label htmlFor="edad">Edad</label>
                            <input
                                type="text"
                                placeholder="Escribe tu edad"
                                name="edad"
                                id="edad"
                                maxLength={2}
                            />
                            <label htmlFor="sexo">Sexo</label>
                            <select name="sexo" id="sexo">
                                <option value="Hombre">Hombre</option>
                                <option value="Mujer">Mujer</option>
                            </select>
                            <br />
                            <label htmlFor="correo">Correo Electronico</label>
                            <input
                                type="email"
                                placeholder="ejemplo@ejemplo.com"
                                name="correo"
                                id="correo"
                            />
                            <input type="submit" />
                        </form>
                    </div>
                    <div className="format7">
                        <hr />
                        <center>
                            Categorias
                            <br />
                            <hr />
                            <div
                                className="format8"
                                style={{
                                    position: "absolute",
                                    left: "22%",
                                    top: "100px",
                                }}
                            >
                                <a href="Historia.html">
                                    <img
                                        className="ajustarimagen"
                                        src="Imagenes\historia.jpg"
                                    />
                                    <center>Historia</center>
                                </a>
                            </div>
                            <div
                                className="format8"
                                style={{
                                    position: "absolute",
                                    left: "42%",
                                    top: "100px",
                                }}
                            >
                                <a href="Personajes.html">
                                    <img
                                        className="ajustarimagen"
                                        src="Imagenes\personajes.png"
                                    />
                                    <center>Personajes</center>
                                </a>
                            </div>
                            <div
                                className="format8"
                                style={{
                                    position: "absolute",
                                    left: "62%",
                                    top: "100px",
                                }}
                            >
                                <a href="MonstruosComunes.html">
                                    <img
                                        className="ajustarimagen"
                                        src="Imagenes\monstruos.png"
                                    />
                                    <center>Monstruos</center>
                                </a>
                            </div>
                            <div
                                className="format8"
                                style={{
                                    position: "absolute",
                                    left: "22%",
                                    top: "300px",
                                }}
                            >
                                <a href="Jefes.html">
                                    <img
                                        className="ajustarimagen"
                                        src="Imagenes\jefes.png"
                                    />
                                    <center>Jefes</center>
                                </a>
                            </div>
                            <div
                                className="format8"
                                style={{
                                    position: "absolute",
                                    left: "42%",
                                    top: "300px",
                                }}
                            >
                                <a href="Armas.html">
                                    <img
                                        className="ajustarimagen"
                                        src="Imagenes\armas.jpg"
                                    />
                                    <center>Armas</center>
                                </a>
                            </div>
                            <div
                                className="format8"
                                style={{
                                    position: "absolute",
                                    left: "62%",
                                    top: "300px",
                                }}
                            >
                                <a href="Objetos.html">
                                    <img
                                        className="ajustarimagen"
                                        src="Imagenes\objetos.jpg"
                                    />
                                    <center>Objetos</center>
                                </a>
                            </div>
                        </center>
                    </div>
                </div> */}
            </section>
        </>
    );
}
