import { OrbitControls, Sky, useHelper } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import ImageWall from './ImageWall'
import VideoWall from './VideoWall'
import { SpotLightHelper } from 'three'
import { useRef } from 'react'

export default function Experience() {
    const spotLightRef = useRef()
    //useHelper(spotLightRef, SpotLightHelper, 3)

    return <>
        <Perf position="top-left" />
        <OrbitControls makeDefault />
        <spotLight ref={spotLightRef} castShadow position={[1,8,-5]}/>
        <ambientLight intensity={0.5} />
        <Sky />
        <ImageWall/>
        <VideoWall/>
    </>
}