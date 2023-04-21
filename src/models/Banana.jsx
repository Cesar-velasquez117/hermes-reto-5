/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Banana(props) {
    const bananaRef = useRef(null)

    const { nodes, materials } = useGLTF("/static/banana.glb");

    const [rotateBanana, setRotateBanana] = useState(false)

    useFrame((state,delta)=> {
        if(rotateBanana) {
            bananaRef.current.rotation.x += Math.sin(state.clock.elapsedTime) * delta
            bananaRef.current.position.y += Math.sin(state.clock.elapsedTime) * delta
        }
    })

    const onHandleBanana = (ev)=>{
        setRotateBanana(true)
        //console.log("distance", e.distance); // Distancia entre la cámara y el punto de contacto del rayo.
        //console.log("point", e.point); // Punto de coordenadas en 3D de donde hizo el contacto del rayo en el objeto. 
        //console.log("uv", e.uv); // Punto de coordenadas en 2D de donde hizo el contacto el rayo con la geometría.
        //console.log("object", e.object); // Retorna el objeto que fue interceptado. 
        //console.log("eventObject", e.eventObject); // Retorna el objeto que escucho el evento.
        //console.log("x", e.x); // Retorna las coordenadas 2D del puntero del mouse en la posición x.
        //console.log("y", e.y); // Retorna las coordenadas 2D del puntero del mouse en la posición y.
        //console.log("shiftKey", e.shiftKey); // retorna true si el evento fue realizado presionando la tecla shiftKey.
        //console.log("ctrlKey", e.ctrlKey); // retorna true si el evento fue realizado presionando la tecla ctrlKey.
        //console.log("metaKey", e.metaKey); // retorna true si el evento fue realizado presionando la tecla metaKey.
        bananaRef.current.children[0].material.color.set(`hsl(${Math.random()*360},100%, 50%)`)
    }
    return (
        <group ref={bananaRef} {...props} dispose={null} onClick={onHandleBanana}>
            <mesh
                geometry={nodes.Cube.geometry}
                material={materials.Material}
                position={[-4.65, 2.46, 0]}
                rotation={[0, 0, -0.68]}
            />
        </group>
    );
}

useGLTF.preload("/static/banana.glb");