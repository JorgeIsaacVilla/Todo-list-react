import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import render from "./office.gltf";

export function Office(props) {
  const { nodes, materials } = useGLTF(render)
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={0.329}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group rotation={[-Math.PI / 2, 0, Math.PI]} scale={380}>
            <mesh geometry={nodes.Small_Office_Floor_0.geometry} material={materials.Floor} />
            <mesh geometry={nodes.Small_Office_WindowFrame_0.geometry} material={materials.WindowFrame} />
            <mesh geometry={nodes.Small_Office_Window_0.geometry} material={materials.Window} />
            <mesh geometry={nodes.Small_Office_Wall_0.geometry} material={materials.Wall} />
            <mesh geometry={nodes.Small_Office_Roof_0.geometry} material={materials.Roof} />
            <mesh geometry={nodes.Small_Office_Table_0.geometry} material={materials.Table} />
            <mesh geometry={nodes.Small_Office_SkirtingBoard_0.geometry} material={materials.SkirtingBoard} />
            <mesh geometry={nodes.Small_Office_Chair_0.geometry} material={materials.Chair} />
            <mesh geometry={nodes.Small_Office_BlackTrim_0.geometry} material={materials.BlackTrim} />
            <mesh geometry={nodes.Small_Office_Chrome_0.geometry} material={materials.Chrome} />
            <mesh geometry={nodes.Small_Office_Plug_0.geometry} material={materials.Plug} />
            <mesh geometry={nodes.Small_Office_WallPictureFrames_0.geometry} material={materials.WallPictureFrames} />
            <mesh geometry={nodes.Small_Office_Painting3_0.geometry} material={materials.Painting3} />
            <mesh geometry={nodes.Small_Office_Painting_0.geometry} material={materials.Painting} />
            <mesh geometry={nodes.Small_Office_Painting2_0.geometry} material={materials.Painting2} />
            <mesh geometry={nodes.Small_Office_Pot_0.geometry} material={materials.material} />
            <mesh geometry={nodes.Small_Office_Dirt_0.geometry} material={materials.Dirt} />
            <mesh geometry={nodes.Small_Office_Keyboard_0.geometry} material={materials.Keyboard} />
            <mesh geometry={nodes.Small_Office_Screen_0.geometry} material={materials.Screen} />
            <mesh geometry={nodes.Small_Office_DeskPaintingFrame_0.geometry} material={materials.DeskPaintingFrame} />
            <mesh geometry={nodes.Small_Office_DeskPainting_0.geometry} material={materials.DeskPainting} />
            <mesh geometry={nodes.Small_Office_Bin_0.geometry} material={materials.material_22} />
            <mesh geometry={nodes.Small_Office_Towel_0.geometry} material={materials.Towel} />
            <mesh geometry={nodes.Small_Office_NotepadBook_0.geometry} material={materials.NotepadBook} />
            <mesh geometry={nodes.Small_Office_Notepad_0.geometry} material={materials.Notepad} />
            <mesh geometry={nodes.Small_Office_Curtain_0.geometry} material={materials.Curtain} />
            <mesh geometry={nodes.Small_Office_LightSurround_0.geometry} material={materials.LightSurround} />
            <mesh geometry={nodes.Small_Office_LightEmissive_0.geometry} material={materials.LightEmissive} />
            <mesh geometry={nodes.Small_Office_Cupboard_0.geometry} material={materials.Cupboard} />
            <mesh geometry={nodes.Small_Office_ClockOutside_0.geometry} material={materials.ClockOutside} />
            <mesh geometry={nodes.Small_Office_ClockWindow_0.geometry} material={materials.ClockWindow} />
            <mesh geometry={nodes.Small_Office_Clockface_0.geometry} material={materials.Clockface} />
            <mesh geometry={nodes.Small_Office_Leaves_0.geometry} material={materials.Leaves} />
          </group>
          <mesh geometry={nodes.Backdrop_Backdrop_0.geometry} material={materials.Backdrop} position={[529.896, 120.434, 0]} rotation={[0, -Math.PI / 2, 0]} scale={50} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload(render)
