import { BasePage } from "@/components/BasePage";
import { CardButtonList } from "@/components/CardButtonList";

const subtitle = (
    <h2 className="text-center">
        Bienvenido a la wiki de Silent Hill 1
        <br />
        Aqui encontraras informacion sobre el juego
    </h2>
);

export default function Home() {
    return (
        <>
            <BasePage title="Inicio" subtitle={subtitle}>
                <q className="mb-3">
                    El miedo a la sangre tiende a crear miedo a la carne
                </q>
                <p>
                    Silent Hill es la primera entrega de la serie de videojuegos
                    Silent Hill, una franquicia de gran éxito de juegos de
                    aventura y survival horror. Silent Hill fue desarrollado por{" "}
                    <b>Team Silent</b> y publicado por <b>Konami</b>. Fue
                    publicado para la PlayStation de Sony en Norteamérica el 31
                    de enero de 1999.
                </p>
                <p>
                    Es un juego de acción y Survival Horror que cuenta con una
                    cámara en tercera persona y entornos tridimensionales en
                    tiempo real. El juego usa efectos de neblina y oscuridad
                    para ocultar las limitaciones de hardware que el juego
                    posee. Este aspecto, ha sido alabado por la crítica ya que
                    ayuda a alimentar la atmósfera terrorífica del juego. La
                    obra presenta a un protagonista sin cualidades especiales o
                    destreza física por sobre lo normal, en contraste con otras
                    entregas de Survival Horror.
                </p>
                <div className="w-full text-center mt-8">
                    <h2>Categorias</h2>
                    <hr />
                    <CardButtonList />
                </div>
            </BasePage>
        </>
    );
}
