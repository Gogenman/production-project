import { useState } from "react"
import style from  './Counter.module.scss'

export const Counter = () => {
    const [count, setCount] = useState(0)

    const inc = () => {
        setCount(count + 1)
    }

    const dec = () => {
        setCount(count - 1)
    }
    return (
        <div>
            <h1>{count}</h1>
            <div className="btns">
                <button className={style.btn} onClick={inc}>+</button>
                <button className={style.btn} onClick={dec}>-</button>
            </div>
        </div>

    )
}

