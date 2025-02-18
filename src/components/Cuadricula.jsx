import React from 'react';
import '../index.css';
import { colorCuadrado } from './functions';

export default function CuadriculaGenerar({ cuadricula }) {
    return (
        <div className='campo' style={{ padding: '10px' }}>
            {cuadricula.map((fila, i) => (
                <div key={i} style={{ display: 'flex' }}>
                    {fila.map((numero, y) => (
                        <div key={y} className={`casilla ${colorCuadrado(numero)}`}>
                            {numero}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}