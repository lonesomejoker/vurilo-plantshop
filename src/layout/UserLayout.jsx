import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { TbPlant } from "react-icons/tb";
import { RiShoppingCartFill } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { Content} from 'antd/es/layout/layout';
import { Layout } from 'antd';
import { Link, Outlet } from 'react-router-dom';

const UserLayout = () => {
    const itemInfo=[
        {
          icon:<IoHomeOutline size={25}/>,
          name:"Home",
          link:"/home",
          key:54
         },
        { 
          icon:<TbPlant size={25}/>,
          name:"Plant",
          link:"/",
          key:45
         },
        { 
          icon:<RiShoppingCartFill size={25}/>,
          name:"Cart",
          link:"/cart",
          key:25
         },
    
        { icon:<IoSettingsOutline size={25}/>,
          name:"Setting",
          link:"/setting",
          key:234
         }, 
      ]
  return (
    <div> 
    <Layout className=' bg-[url("https://png.pngtree.com/background/20230616/original/pngtree-interior-room-with-green-plant-3d-rendered-background-picture-image_3653278.jpg")]
     min-h-screen items-center pt-24'>
     <div>
        <input type="url" className=' rounded-2xl w-96 h-8 bg-slate-200 backdrop-blur-md
        bg-opacity-50'></input>
     </div>
    <div className=' flex'>
    <div className=' max-h-[150px] bg-gray-300 bg-opacity-40 rounded-3xl backdrop-blur
     py-2 mt-20 mr-4 px-1.5'>
    
    {
      itemInfo.map((item)=>{
        return(
          <div className=' py-1' key={item.key}>
           <Link to={item.link}> <h1>{item.icon}</h1></Link>
          </div>
        )
      })
    }
    
    </div>
    <div>
    <Content className=' bg-slate-200 backdrop-blur-md min-w-[1000px] rounded-3xl
     bg-opacity-50 min-h-[400px] mt-3'>
        <Outlet/>
    </Content>
    </div>
    </div>
    
    </Layout>
      
    </div>
  )
}

export default UserLayout
