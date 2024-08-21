import React from 'react'

export default function Icon({openMenu}) {
  return (
    <svg width="16" height="10" transform={openMenu? "rotate(0 0 0)":"rotate(180 0 0)"} viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 8.5L8 1.5L1 8.5" stroke={openMenu? "#C94277":"#211E1D"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
}


