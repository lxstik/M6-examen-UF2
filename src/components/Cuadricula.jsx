import React, { useState, useEffect } from 'react';
import '../index.css';
import { colorCuadrado } from './functions';
import Fantasma from './fantasma';

export default function CuadriculaGenerar({ cuadricula }) {
    const [posicionComecocos, setPosicionComecocos] = useState({ fila: 11, columna: 11 });
    const [fantasmas, setFantasmas] = useState([]);

    useEffect(() => {
        const generarFantasmas = () => {
            const nuevasFantasmas = [];
            while (nuevasFantasmas.length < 5) {
                const nuevoFantasma = new Fantasma();
                let posicionValida = true;

                // condicionales para que no se generen dentro de la div de comecocos
                if (nuevoFantasma.x == posicionComecocos.fila && nuevoFantasma.y == posicionComecocos.columna) {
                    posicionValida = false;
                }

                // Condicionales para que las fantasmas no coincidan de posiciones
                for (let i = 0; i < nuevasFantasmas.length; i++) {
                    if (nuevasFantasmas[i].x == nuevoFantasma.x && nuevasFantasmas[i].y == nuevoFantasma.y) {
                        posicionValida = false;
                    }
                }

                // si la posición es válida, crea fantasma
                if (posicionValida) {
                    nuevasFantasmas.push(nuevoFantasma);
                }
            }
            setFantasmas(nuevasFantasmas);
        };

        generarFantasmas();
    }, []); // solo se ejecuta una vez cuando el componente se monta

    useEffect(() => {
        const handleKeyDown = (event) => {
            let nuevaFila = posicionComecocos.fila;
            let nuevaColumna = posicionComecocos.columna;

            switch (event.key) {
                case 'ArrowUp':
                    if (nuevaFila > 1) nuevaFila -= 1;
                    break;
                case 'ArrowDown':
                    if (nuevaFila < cuadricula.length - 2) nuevaFila += 1;
                    break;
                case 'ArrowLeft':
                    if (nuevaColumna > 1) nuevaColumna -= 1;
                    break;
                case 'ArrowRight':
                    if (nuevaColumna < cuadricula[0].length - 2) nuevaColumna += 1;
                    break;
                default:
                    break;
            }

            setPosicionComecocos({ fila: nuevaFila, columna: nuevaColumna });
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [posicionComecocos, cuadricula]);

    return (
        <div className='campo' style={{ padding: '10px' }}>
            {cuadricula.map((fila, i) => (
                <div key={i} style={{ display: 'flex' }}>
                    {fila.map((numero, y) => {
                        if (i == posicionComecocos.fila && y == posicionComecocos.columna) {
                            return (
                                <div key={y} className={`casilla ${colorCuadrado(numero)}`}>
                                    <div className="comecocos"></div>
                                </div>
                            );
                        } else {
                            let esFantasma = false;
                            for (let j = 0; j < fantasmas.length; j++) {
                                if (fantasmas[j].x == i && fantasmas[j].y == y) {
                                    esFantasma = true;
                                    break;
                                }
                            }
                            if (esFantasma == true) {
                                return (
                                    <div key={y} className={`casilla ${colorCuadrado(numero)}`}>
                                        <div className="fantasma"></div>
                                    </div>
                                );
                            } else {
                                return (
                                    <div key={y} className={`casilla ${colorCuadrado(numero)}`}>
                                        {numero}
                                    </div>
                                );
                            }
                        }
                    })}
                </div>
            ))}
        </div>
    );
}