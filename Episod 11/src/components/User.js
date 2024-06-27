import { useEffect, useState } from "react";

const User = ({name}) => {
    const [count, setCount] = useState(0);


    useEffect(() => {
        const timer = setInterval(() => {
            console.log("chal")
        }, 1000);

        console.log('useEffect')

        return () => {
            clearInterval(timer)
            console.log("useEfect return")
        }

    }, [count])
    console.log("render")
    return (
        <div className="user">
            <h1>Count = {count}</h1>
            <button onClick={() => {
                setCount(count)
            }}>Increacse Count</button>
            <h2>Name: {name}</h2>
            <h3>Location: Dhanbad</h3>
            <h4>Contact: @priyehraut5</h4>
        </div>
    )
}


export default User;