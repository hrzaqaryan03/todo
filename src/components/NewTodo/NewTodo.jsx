import React from 'react'
import style from "./style.module.scss"
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
const NewTodo = ({items  , setItems}) => {
    const [val , setVal] = useState("")
   

    function handleClick() {
        if(val < 2) return 
        const newItem = {
          id:uuidv4(),
          title:val.trim(),
          edit:false,
          done:false,
          selected:false
        }
        setItems((prev) => [...prev  , newItem])
        setVal("")
        
    }

  return (
    <div className={style.newTodo}>
        <input type="text" value={val} onChange={(e) => setVal(e.target.value)} className={style.input}/>
        <button onClick={handleClick} className={style.button}>Add</button>
    </div>
  )
}

export default NewTodo