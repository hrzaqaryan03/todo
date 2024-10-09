import React from 'react'
import style from "./Counter.module.scss"
import { useState, useEffect } from 'react'
const Counter = ({ items }) => {

    return (
        <div className={style.counter}>
            <span>Done {items.filter((el)=> {
                return el.done
            }).length} of {items?.length}</span>
        </div>
    )
}

export default Counter