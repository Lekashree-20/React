import React from 'react'
import { useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";
const Content=() => {
    const [items,setItems]=useState(
        [
            { id:1,
            checked:true,
            item:"Practice Coding"
            },

            { id:1,
            checked:true,
            item:"Play games"
            },

            {id:1,
            checked:true,
            item:"Study"
            }
                
        ]);

        
    
  
return (
     <main>
      <ul>
        {items.map((item)=>(
          <li>
            <input
            type="checkbox"
            checked={item.checked}
            />
            <label>{item.item}</label>
            <FaTrashAlt/>
          </li>
        ))}
      </ul>
     </main>
  )
}

export default Content