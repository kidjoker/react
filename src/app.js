import React from "react";
import ReactDOM from 'react-dom'
import WindowTracker from "./component/WindowTracker";

const Counter = () => {
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(1)
    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch(`https://swapi.dev/api/people/${count}`)
            .then(res => res.json())
            .then(data => setStarWarsData(data))
    },[count])

    React.useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then((data) => {
                setAllMemes(data.data.memes)
            })  
    },[])

    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
            <h2>The count is {count}</h2>
            <button onClick={() => {setCount(prev => prev+1)}}>Add</button>
            <img src={allMemes[count]?.url}/>
        </div>
    )
}

const Windows = () => {
    const [show, setShow] = React.useState(true)
    
    return (
        <div className="container">
            <button onClick={() => setShow((prev) => !prev)}>
                Toggle WindowTracker
            </button>
            {show && <WindowTracker/>}
        </div>
    )
}

ReactDOM.render(<Windows />, document.getElementById('app'))