import { OrbitControls, Sky } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Banana from './models/Banana'
import Lemon from './models/Lemon'
import Hamburguer from './models/Hamburguer'

export default function Experience() {
    return <>
        <Perf position="top-left" />
        <OrbitControls makeDefault />
        <directionalLight castshadow shadow-normalBias={0.04} position={[1, 2, 3]} intensity={1.5} />
        <ambientLight intensity={0.5} />
        <Sky />
        <Banana position-x = {-1} scale={0.1}/>
        <Lemon position-x = {1} scale={0.1}/>
        <Hamburguer position-x={0} scale={0.08}/>
    </>
}