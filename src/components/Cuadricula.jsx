import React, { useState } from 'react';
import '../index.css';
import { colorCuadrado } from './functions';

export default function CuadriculaGenerar({ cuadricula }) {
    const [posicionComecocos, setPosicionComecocos] = useState({ fila: 11, columna: 11 });

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
                            return (
                                <div key={y} className={`casilla ${colorCuadrado(numero)}`}>
                                    {numero}
                                </div>
                            );
                        }
                    })}
                </div>
            ))}
        </div>
    );
}