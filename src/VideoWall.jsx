import React, {useRef, useState} from 'react';
import {useVideoTexture} from '@react-three/drei';
import { DoubleSide } from 'three';

const VideoWall = () => {
    const textureRef = useRef();
    const [playingVideo, setPlayingVideo] = useState(false);

    const [video] = useState(() => {
        const hermes_vid = document.createElement('video');
        hermes_vid.src = '/static/Hermes.mp4';
        hermes_vid.crossOrigin = 'anonymous';
        hermes_vid.loop = true;
        hermes_vid.muted = true;
        return hermes_vid;
    });

    const handleOnClick = (event) => {
        event.stopPropagation();
        if(playingVideo) {
            setPlayingVideo(!playingVideo);
            video.pause();
        }else{
            setPlayingVideo(!playingVideo);
            video.play();
            video.muted = false;
        }
    };

    return (
        <mesh onDoubleClick={handleOnClick} receiveShadow position-z={5} rotation-x={Math.PI} rotation-z={Math.PI}>
            <planeGeometry args={[7,7]}/>
            <meshBasicMaterial side={DoubleSide} toneMapped={false}>
                <videoTexture attach="map" args={[video]} ref={textureRef}/>
            </meshBasicMaterial>
        </mesh>
    );
};

export default VideoWall;