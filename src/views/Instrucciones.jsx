import '../styles/Instrucciones.css';

export default function Instrucciones() {
    return (
        <div className="instrucciones-container">
            <h1>Examen UF2</h1>
            <p>Objetivo:</p>
            <p>Crear un proyecto utilizando React y Vite que implemente un juego interactivo de Comecocos con las siguientes características:</p>
            <h2>Vista principal:</h2>
            <ul>
                <li>Una cuadrícula de 20x20.</li>
                <li>Un "Comecocos" que comienza en el centro de la cuadrícula.</li>
                <li>Cinco fantasmas posicionados aleatoriamente en la cuadrícula.</li>
                <li>El jugador puede mover al Comecocos utilizando las flechas del teclado.</li>
                <li>Cuando el Comecocos se encuentra en la misma posición que un fantasma, este es eliminado y se suma un punto al marcador.</li>
            </ul>
            <h2>Vista de instrucciones:</h2>
            <p>Explica cómo jugar y las reglas del juego, incluyendo el nuevo contador de puntos.</p>
            <h2>Puntos adicionales:</h2>
            <ul>
                <li>Mostrar un contador de puntos en la parte superior de la vista principal.</li>
                <li>El juego termina cuando no quedan fantasmas en la cuadrícula.</li>
            </ul>
            <h2>Requisitos técnicos:</h2>
            <ul>
                <li>Usar react-router-dom para la navegación entre las vistas.</li>
                <li>Organizar el código en componentes reutilizables.</li>
                <li>Escribir estilos básicos en un archivo CSS.</li>
                <li>Documentar claramente el código para facilitar su comprensión.</li>
            </ul>
            <h2>Ejercicios</h2>
            <h3>Entorno de desarrollo</h3>
            <p>Configurar el proyecto (1p):</p>
            <ul>
                <li>Crea un nuevo proyecto con Vite</li>
                <li>Instala las dependencias</li>
                <li>Instala react-router-dom</li>
                <li>Asegúrate de que la estructura del proyecto contenga carpetas organizadas, como:</li>
                <ul>
                    <li>src/views para las vistas del proyecto.</li>
                    <li>src/styles para los estilos.</li>
                    <li>src/components para componentes reutilizables.</li>
                </ul>
            </ul>
            <h3>Vistas principales</h3>
            <p>Crear las vistas del proyecto (1p):</p>
            <ul>
                <li>Vista de Juego (/): Crea la estructura básica para mostrar el tablero del juego. En esta vista:</li>
                <ul>
                    <li>Se debe visualizar una cuadrícula de 20x20.</li>
                    <li>Se mostrará el Comecocos y los fantasmas.</li>
                    <li>Se incluirá un contador de puntos en la parte superior.</li>
                </ul>
                <li>Vista de Instrucciones (/instrucciones): Crea una página con el enunciado del examen.</li>
            </ul>
            <p>Configuración de rutas:</p>
            <ul>
                <li>Utiliza react-router-dom para establecer la navegación entre las vistas (/ y /instrucciones).</li>
                <li>Agrega un enlace o botón en ambas vistas para moverse entre ellas.</li>
            </ul>
            <h3>Lógica del juego</h3>
            <ul>
                <li>Componente cuadrícula 20x20 (1p):</li>
                <ul>
                    <li>Utiliza un contenedor con display: flex en CSS para crear una cuadrícula de 20 filas y 20 columnas.</li>
                    <li>Cada celda debe ser un cuadrado de tamaño uniforme.</li>
                </ul>
                <li>Colocar al Comecocos en el centro (1p):</li>
                <ul>
                    <li>Define un estado inicial (useState) para almacenar la posición del Comecocos en el centro de la cuadrícula.</li>
                    <li>Representa al Comecocos visualmente en la cuadrícula (por ejemplo, con un color o un ícono).</li>
                </ul>
                <li>Agregar fantasmas en posiciones aleatorias (1p):</li>
                <ul>
                    <li>Crea una clase Fantasma para los fantasmas con las propiedades x,y,estado (vivo/muerto) y el método generaPosicionAleatoria()</li>
                    <li>Crea 5 instancias de Fantasma, ejecuta su método generaPosicionAleatoria() y guárdalos en un array dentro de un estado.</li>
                    <li>Representa los fantasmas visualmente en la cuadrícula.</li>
                </ul>
                <li>Hacer que el Comecocos se mueva (1p):</li>
                <ul>
                    <li>Implementa un controlador de eventos (onKeyDown) para capturar las teclas de flecha (ArrowUp, ArrowDown, ArrowLeft, ArrowRight).</li>
                    <li>Actualiza la posición del Comecocos en el estado.</li>
                    <li>Asegúrate de que el Comecocos no pueda salir de los límites de la cuadrícula.</li>
                </ul>
                <li>Comer fantasmas (1.5p):</li>
                <ul>
                    <li>Verifica si la posición del Comecocos coincide con la de un fantasma en cada movimiento.</li>
                    <li>Si coincide, elimina al fantasma de la lista almacenada en el estado.</li>
                </ul>
                <li>Añadir un contador de puntos (1.5p):</li>
                <ul>
                    <li>Crea un estado para llevar el puntaje del jugador.</li>
                    <li>Incrementa el puntaje en 1 cada vez que el Comecocos come un fantasma.</li>
                    <li>Muestra el puntaje en la parte superior de la vista de Juego.</li>
                </ul>
                <li>Terminar el juego (1p):</li>
                <ul>
                    <li>Comprueba después de cada movimiento si no quedan fantasmas en la lista.</li>
                    <li>Si no hay fantasmas restantes, muestra un mensaje de victoria (por ejemplo: "¡Ganaste!").</li>
                </ul>
            </ul>
        </div>
    );
}