import React from 'react'
import { Avatar, Input } from 'antd'
import { PiWindowsLogo } from "react-icons/pi";
import { TbScreenshot } from "react-icons/tb";
import { PiPaintBrushBroad } from "react-icons/pi";

const Home = () => {
  return (
    <div className=' py-3'>
    <div className=' flex justify-between px-3'>
      <div className=' flex gap-1.5'>
        <h1><Avatar className=' h-6 w-6'><PiWindowsLogo/></Avatar></h1>
        <h1><Avatar className=' h-6 w-6'><TbScreenshot/></Avatar></h1>
        <h1><Avatar className=' h-6 w-6'><PiPaintBrushBroad/></Avatar></h1>
      </div>
      <div>
        <Input className=' w-28 h-9 rounded-3xl bg-slate-200 border-none' placeholder='Search'></Input>
      </div>
    </div>
       <h1 className=' text-center font-varela'>NOthing to see Here</h1>
    </div>
  )
}

export default Home

