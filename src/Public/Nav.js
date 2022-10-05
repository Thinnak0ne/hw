import React from "react";
import './Nav.css'

import MenuOpenIcon from "@mui/icons-material/MenuOpen";

export default function HomePage() {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        backgroundColor: "red",
        height: "10vh",
        
      }}
    >
      <div style={{flex:1,width: "50%",cursor: "pointer",
            padding: "1.5% 3%",}}>
        <MenuOpenIcon />
      </div>

      
        
        <div className='N' style={{width:'80%'}} >
          <div >Home</div>
          <div>Contact</div>
          <div>About</div>
          <div>Help</div>
        </div>
          
        
      
      <div style={{ width: "100%", backgroundColor: "purple" }}>
        
      </div>
    </div>
  );
}

