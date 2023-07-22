import React from 'react'
import "./style.css"
import { useState } from 'react';
const Collapse = ({ collapsed, children }) => {
    const [isCollapsed, setIsCollapsed] = useState(!collapsed);
    // const text = children;
   
  return (
    <>
  
    <div
      className={`collapse-content ${isCollapsed ? 'collapsed' : 'expanded'}`}
      aria-expanded={isCollapsed}
    >
      {children}
    </div>
    <button
      className="collapse-button text-[14px] font-semibold font-montseorrat text-[#329BFA] cursor-pointer ml-auto mt-2"
      onClick={() => setIsCollapsed(!isCollapsed)}
    >
      {isCollapsed ? 'Read more' : 'Read less'}
    </button>
  </>
  )
}

export default Collapse
