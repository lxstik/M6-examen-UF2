import React from 'react';
import CuadriculaGenerar from "../components/Cuadricula";
import { cuadricula } from "../components/cuadricula";
import "../index.css";
import fondo from "../imgs/fondo.png"

export default function Partida() {
    return (
        <>
            <style>
                {`
                    body {
                        margin: 0;
                        padding: 0;
                        overflow: hidden;
                    }
                `}
            </style>
            <div
                style={{
                    backgroundImage: `url(${fondo})`,
                    backgroundSize: '100%',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '100vh',
                    width: '100vw',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    textAlign: 'center'
                }}
            >
                <CuadriculaGenerar cuadricula={cuadricula} />

            </div>
        </>
    );
}