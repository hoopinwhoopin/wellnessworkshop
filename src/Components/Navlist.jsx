import React from 'react'
import Icon from '../assets/Icon.jsx'
import { Menu, MenuItem, styled, useMediaQuery } from "@mui/material";
import { useState } from "react";
import Aktiv from '../Fonts/AktivGrotesk-Regular.ttf'


const StyledButton = styled('a')({
    color: "black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    fontFamily: {Aktiv},
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
  

export default function Navlist({callback}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [filling,setFilling] = useState('#626262')
  const [w,setW] = useState('0')
  const openMenu = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='flex-col lg:flex-row flex gap-6 lg:gap-12 w-[100vw] lg:w-fit p-[7%] lg:p-0 mt-16 lg:mt-0'>
        <StyledButton onClick={()=>{callback(false)}} href="/#Home" className='font-semibold text-nowrap text-base max-md:text-3xl w-fit'>Home</StyledButton>
    <StyledButton onClick={()=>{callback(false)}} href="/#AboutUs" className='font-semibold text-nowrap text-base max-md:text-3xl w-fit'>About Us</StyledButton>
    <StyledButton onClick={()=>{callback(false)}} href="/#WhyUs" className='font-semibold text-base text-nowrap max-md:text-3xl w-fit'>Why Us</StyledButton>
    <StyledButton onClick={()=>{callback(false)}} href="/#Gallery" className='font-semibold text-nowrap text-base max-md:text-3xl w-fit'>Gallery</StyledButton>
    <StyledButton  onMouseOver={(e)=>{setAnchorEl(e.currentTarget)}} className='font-semibold text-base text-nowrap max-md:text-3xl h-full w-fit justify-between'>
        <div className='flex flex-row whitespace-break-spaces items-center gap-5' style={{color:openMenu? "#C94277":"black"}}> 
            <p>Packages</p>   
            <Icon openMenu={openMenu}/>
        </div>
    </StyledButton>
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      open={openMenu}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}            
      slotProps={{paper:{sx:{backgroundColor:'white',
        borderRadius:'10px',
        boxShadow:'0px 2px 4px rgba(0, 0, 0, 0.25)',
        width:window.innerWidth>768? '12rem':'90%'}}}}
      autoFocus={false}
      MenuListProps={{onMouseLeave:handleClose}}
      
      >
        <MenuItem onClick={handleClose}><StyledButton className='text-base max-md:text-2xl text-[#626262] -mb-1 font-medium ' href="/Packages" >Online</StyledButton></MenuItem>
        <MenuItem onClick={handleClose}><StyledButton className='text-base max-md:text-2xl text-[#626262] -mb-1 font-medium'>Offline</StyledButton></MenuItem>
        <MenuItem onClick={handleClose}><StyledButton className='text-base max-md:text-2xl text-[#626262] -mb-1 font-medium'>Consultation</StyledButton></MenuItem>
        <MenuItem onClick={handleClose}><StyledButton className='text-base max-md:text-2xl text-[#626262] font-medium'>1 on 1 Sessions</StyledButton></MenuItem>
      </Menu>
      </div>
  )
}
