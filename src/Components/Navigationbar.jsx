import logo from "../assets/Logo.svg";
import logo_small from "../assets/Logo_small.svg";
import x_circle from "../assets/x-circle-fill 1.svg";
import dots from "../assets/dots.svg";
import { Box, Button, Drawer, styled } from "@mui/material";
import { content } from "flowbite-react/tailwind";
import { useState } from "react";

const StyledButton = styled('a')({
  color: "black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  "::after": {
    content: "''",
    display: "flex",
    height: "2px",
    width: "0",
    background: "#C94277",
    transition: "width 0.3s",
    alignSelf: "center",
  },
  ":hover": {
    color: "#C94277",
    "::after":{
      width: "80%",
  }
  }, 
  
});


function Navigationbar() {
  const [open, setOpen] = useState(false);
  return (
    <div>
    <div className="navbar max-sm:sticky w-full top-0 flex Atvik-Regular font-medium backdrop-blur-sm bg-white bg-opacity-50 z-10  justify-around sm:py-8 sm:px-16 px-10 py-5">
      <div className="hidden sm:flex  ">
        <ul className="flex-row flex text-base p-4 gap-8">
          <StyledButton href="/#Home">Home</StyledButton>
          <StyledButton href="/#AboutUs">About Us</StyledButton>
          <li>
          <StyledButton href="/#WhyUs">Why Us</StyledButton>
          </li>
          <li>
          <StyledButton href="/#Gallery">Gallery</StyledButton>
          </li>
        </ul>
      </div>
      <div className="flex flex-row justify-evenly items-center sm:hidden">
        <button><img onClick={()=>{setOpen(!open);}} src={open? x_circle:dots} alt="cross"/></button>
        <img className="h-1/2 m-3" src={logo_small} alt="logo" />
      </div>
      <button className="navbar__logo flex items-center align-middle ">
        <img className="hidden sm:block" src={logo} alt="logo" />
      </button>
      <button className="pink px-4 py-2 sm:px-8 sm:py-4 rounded-lg text-base text-white">Get in Touch</button>
    </div>
    <Drawer open={open} onClose={()=>{setOpen(false)}} role="presentation" sx={{width:'80%',height:'80vh',backgroundColor:'',zIndex:'0'}}>
      <Box></Box>
    </Drawer>
    </div>
  );
}

export default Navigationbar;