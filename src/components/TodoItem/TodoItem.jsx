import React from 'react'
import { CiEdit } from "react-icons/ci";
import { FaRegSave } from "react-icons/fa";
import { MdDelete, MdFileDownloadDone } from "react-icons/md";
import style from "./style.module.scss"
import { useState } from 'react';
const TodoItem = ({ data, setItems }) => {

  const [isEditing, setIsEditing] = useState(false)
  const [newTitle, setNewtitle] = useState(data.title)

  const handleDelete = (id) => {
    setItems((prev) => {
      return prev.filter((el) => {
        return el.id !== id
      })
    })
  }

  const handleDone = (id) => {
    setItems((prev) => {
      return prev.map((elem) => {
        if (elem.id == id) {
          return { ...elem, done: !elem.done }
        } return elem
      })
    })
  }

  const toggleEdit = () => {
    setIsEditing(!isEditing)
  }

  const handleSave = (id, newTitle) => {
    setItems((prev) => {
      return prev.map((el) => el.id === id ? { ...el, title: newTitle } : el)
    })
    toggleEdit()
  }

  return (
    <div className={`${style.todo} ${data.done ? style.done : ""}`} style={isEditing ? { padding: "0px" } : { padding: "10px" }} >
      {isEditing ?
        <div className={style.editingBox}>
          <input type="text" className={style.editInput} value={newTitle} onChange={(e) => {
            setNewtitle(e.target.value)
          }} />
          <FaRegSave size={26} onClick={() => handleSave(data.id, newTitle)
          } />
        </div>
        :
        <>
          <div className={style.right}>
            <MdFileDownloadDone size={26} onClick={() => handleDone(data.id)} />
            <h2>{data.title}</h2>
          </div>
          <div className={style.controls}>
            <CiEdit size={20} onClick={toggleEdit} />
            <MdDelete size={20} onClick={() => handleDelete(data.id)} />
          </div>
        </>
      }
    </div>
  )
}

export default TodoItem

