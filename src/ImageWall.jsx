import React, {useRef, useState} from 'react';
import { DoubleSide, MeshStandardMaterial, TextureLoader } from 'three';
import {useLoader} from '@react-three/fiber';

export default function ImageWall(props){
    const imgWallRef = useRef(null);
    const hermes_img = 'static/hermes1.jpg';
    const flash_img = 'static/flash1.jpg';
    const texture_hermes = useLoader(TextureLoader, hermes_img);
    const texture_flash = useLoader(TextureLoader, flash_img);

    const [currentTexture, setCurrentTexture] = useState(texture_hermes);

    const handleImage = (event) => {
        event.stopPropagation();
        if(currentTexture == texture_hermes){
            setCurrentTexture(texture_flash);
        }else{
            setCurrentTexture(texture_hermes);
        }
    };

    return (
        <mesh {...props} ref={imgWallRef} receiveShadow position-z={-5} rotation-y={Math.PI * 1} dispose={null} onPointerOver={handleImage}>
                <planeGeometry args={[7,7]} />
                <meshStandardMaterial map={currentTexture} color="whitered" side={DoubleSide}/>
        </mesh>
    );
}