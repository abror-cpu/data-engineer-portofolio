"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

function DataNetwork(){
  const group=useRef<THREE.Group>(null);
  const points=useMemo(()=>Array.from({length:42},(_,i)=>new THREE.Vector3(Math.sin(i*1.91)*5.2+(i%3),Math.cos(i*1.37)*3.3,Math.sin(i*.73)*2.2)),[]);
  const links=useMemo(()=>points.slice(0,-1).map((p,i)=>[p,points[i+1]]),[points]);
  useFrame((state,delta)=>{if(!group.current)return;group.current.rotation.y+=delta*.035;group.current.rotation.x=THREE.MathUtils.lerp(group.current.rotation.x,state.pointer.y*.1,.03);group.current.position.x=THREE.MathUtils.lerp(group.current.position.x,state.pointer.x*.3,.02)});
  return <group ref={group}>{links.map((line,i)=><Line key={i} points={line} color={i%2?"#3b82f6":"#8b5cf6"} transparent opacity={.18} lineWidth={.6}/>)}{points.map((p,i)=><mesh key={i} position={p}><sphereGeometry args={[i%7===0?.075:.035,10,10]}/><meshBasicMaterial color={i%3===0?"#22d3ee":"#6d7dff"} transparent opacity={.72}/></mesh>)}</group>;
}
export function HeroScene(){return <div className="hero-canvas" aria-hidden="true"><Canvas dpr={[1,1.5]} gl={{antialias:false,alpha:true}}><PerspectiveCamera makeDefault position={[0,0,8]} fov={48}/><Suspense fallback={null}><DataNetwork/></Suspense></Canvas></div>}

const nodes=[{label:"Source",color:"#22d3ee",x:-4},{label:"Ingest",color:"#3b82f6",x:-2},{label:"Process",color:"#8b5cf6",x:0},{label:"Warehouse",color:"#a855f7",x:2},{label:"Dashboard",color:"#ec4899",x:4}];
function PipelineObject(){
  const pulse=useRef<THREE.Mesh>(null);useFrame(({clock})=>{if(pulse.current)pulse.current.position.x=-4+((clock.elapsedTime*1.1)%8)});
  return <group rotation={[.12,-.12,0]}><Line points={nodes.map(n=>[n.x,0,0] as [number,number,number])} color="#5562a9" lineWidth={1.5}/>{nodes.map((n,i)=><Float key={n.label} speed={1.4+i*.1} rotationIntensity={.22} floatIntensity={.22}><mesh position={[n.x,0,0]}>{i===0?<cylinderGeometry args={[.42,.42,.65,18]}/>:i===4?<octahedronGeometry args={[.5]}/>:<boxGeometry args={[.72,.72,.72]}/>}<meshStandardMaterial color={n.color} roughness={.28} metalness={.55} emissive={n.color} emissiveIntensity={.16}/></mesh></Float>)}<mesh ref={pulse} position={[-4,0,0]}><sphereGeometry args={[.11,12,12]}/><meshBasicMaterial color="#fff"/></mesh></group>;
}
export function PipelineScene(){return <div className="pipeline-canvas" aria-label="Visualisasi 3D aliran data dari source ke dashboard"><Canvas dpr={[1,1.5]}><PerspectiveCamera makeDefault position={[0,4.2,10]} fov={42}/><ambientLight intensity={1.2}/><pointLight position={[0,4,5]} intensity={22} color="#668cff"/>{/* Node geometris terhubung dengan partikel pulse yang mengikuti render loop. */}<Suspense fallback={null}><PipelineObject/></Suspense><OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI/3.3} maxPolarAngle={Math.PI/2.2}/></Canvas><div className="pipeline-labels" aria-hidden="true">{nodes.map(n=><span key={n.label}>{n.label}</span>)}</div></div>}
