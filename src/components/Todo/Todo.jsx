import React from 'react'
import { useState, useEffect} from 'react'
import TodoItem from '../TodoItem/TodoItem'
import style from "./style.module.scss"
import NewTodo from '../NewTodo/NewTodo'
import { v4 as uuidv4 } from 'uuid';
import Counter from '../Counter/Counter'
const Todo = () => {
  const [id, setId] = useState("0")
  const [items, setItems] = useState([])
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    const saved = localStorage.getItem('items')
    if (saved) {
      setItems(JSON.parse(saved))
    }
  }, [])

  useEffect(() => {
    if (items.length > 0) {
      localStorage.setItem("items", JSON.stringify(items))
    }
  }, [items])

  const filterItems = items.filter((elem) => {
    if (filter === 'done') {
      return elem.done
    } else if (filter === "not") {
      return !elem.done
    } else if (filter === "all") {
      return true
    }

  })


  return (
    <section className={style.todo}>
      <div className={style.top}>
        <NewTodo items={items} setItems={setItems} className={style.newTodo} />

        {filterItems.map((elem, index) => {
          return <TodoItem key={index} data={elem} setItems={setItems} />
        })}

      </div>
      <div className={style.bottom}>
        <div>
          <Counter items={items} />
        </div>
        <div className={style.controls} onChange={(e) => {
          setFilter(() => {
            const newFilter = e.target.id
            return newFilter
          })
        }}>
          <div className={style.filters}>
            <label htmlFor="all">
              Show all
              <input type="radio" name="filter" id="all" />
            </label>
            <label htmlFor="done">
              Show done
              <input type="radio" name="filter" id='done' />
            </label>
            <label htmlFor="not">
              Not done
              <input type="radio" name="filter" id="not" />
            </label>
          </div>

          <div className={style.btns} onClick={(e) => {
 

          }}>
            <button onClick={() => setItems((prev) => {
              return prev.filter((el) => {
                  if(el.done) {
                    return el !== el
                  }else return el
              })
            })}>Delete done's</button>
            <button onClick={() => setItems([])}>Delete All</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Todo
