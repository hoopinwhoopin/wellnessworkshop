import logo from "../assets/Logo.svg";
import logo_small from "../assets/Logo_small.svg";
import x_circle from "../assets/x-circle-fill 1.svg";
import dots from "../assets/dots.svg";
import { Drawer } from "@mui/material";
import Vector from "../assets/Vector \(1\).svg";
import { useState } from "react";
import Navlist from "./Navlist";



function Navigationbar() {
  const [open, setOpen] = useState(false);
  return (
    <div>
    <div className="navbar max-sm:fixed w-full top-0 flex Atvik-Regular font-medium backdrop-blur-sm bg-white bg-opacity-50 z-10  justify-around sm:py-8 sm:px-16 px-10 py-5">
      <div className="hidden md:flex flex-1 ">
          <Navlist  callback={setOpen}/>
      </div>
      <div className="flex flex-row justify-evenly flex-1 items-center lg:hidden">
        <button className="flex flex-1"><img onClick={()=>{setOpen(!open);}} src={open? x_circle:dots} alt="cross"/></button>
        <img className="h-1/2 m-3" src={logo_small} alt="logo" />
      </div>
      <button className="navbar__logo flex-1 flex items-center align-middle ">
        <img className="hidden sm:block" src={logo} alt="logo" />
      </button>
      <button className="pink px-4 py-2 sm:px-8 sm:py-4 rounded-lg text-base text-white">Get in Touch</button>
    </div>
    <Drawer open={open} 
    onClose={()=>{setOpen(false)}} 
    role="presentation" 
    sx={{width:'100%',height:'100%',backgroundColor:'white',zIndex:'0',overflow:'hidden'}}
    slotProps={{backdrop:{invisible:true}}}
    >
      <div className="flex flex-col top-0 justify-start h-[100vh] overflow-hidden">
       <Navlist  callback={setOpen}/>
       <img className="absolute bottom-0 right-0 -z-10" src={Vector} alt=""/>
      </div>
    </Drawer>
    </div>
  );
}

export default Navigationbar;