import React, {useState} from "react";
import "./Counter.css"


export function Counter () {
    //const resBtnClasses =
    let [count, setCount] = useState(0)

    let clickHandler = () => {
        if (count < 5) {
            count++
            setCount(count)
        }
    }
    let res = () => {
        setCount(0)
    }

    const countClassName = (count === 5) ? "limClicks" : ""
    const incClassName = (count === 5) ? "notActive" : ""
    const resClassName = (count === 0) ? "notActive" : ""

    return (
        <div>
            <div>
                <button className={countClassName}>{count}</button>
            </div>
            <div>
                <button className={incClassName} onClick={clickHandler}>inc</button>
                <button className={resClassName} onClick={res}>reset</button>
            </div>
        </div>
    )
}