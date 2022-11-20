import React from 'react'
import ReactDOM from 'react-dom'
import Header from './component/Header'
import Body from './component/Body'

//import './css/box.css'
import './css/meme.css'

const Page1 = () => {
    const [darkMode, setDarkMode] = React.useState(false)

    const toggleDarkMode = () => {
        setDarkMode((prev) => !prev)
    }

    return (
        <div>
            <Header toggleDarkMode={toggleDarkMode}/>
            <Body darkMode={darkMode}/>
        </div>
    )
}

const Page2 = () => {
    return (
        <div>
            <Profile />
            <MainContent />
            <BottomBar />
        </div>
    )
}

const Airbnb = () => {
    const heroElements = heroData.map(hero => {
        return <Card 
            key = {hero.id}
            hero = {hero}>
        </Card>
    })
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <div className='cards'>
                {heroElements}
            </div>
        </div>
    )
}

const Travel = () => {
    const travelElements = TravelData.map(travel => {
        return <TravelCard
            key = {travel.id}
            travel = {travel}>
        </TravelCard>
    })

    return (
        <div>
            <Navbar></Navbar>
            <div className='travelCards'>
                {travelElements}
            </div>
        </div>
    )
}

const Meme = () => {
    const [count, setCount] = React.useState(0)

    function handlePlus() {
        setCount(prev => prev+1)
    }

    function handleMinus() {
        setCount(prev => prev-1)
    }

    return (
        <div>
            <div className="counter">
                <button onClick={handlePlus} className='counter--button'>+</button>
                <Counter number={count}/>
                <button onClick={handleMinus} className='counter--button'>-</button>
            </div>
        </div>
    )
}

const Boxx = () => {
    const [boxes, setBoxes] = React.useState(BoxData)

    function changeColor(id) {
        setBoxes(prevBoxes => {
            return prevBoxes.map(box => {
                return box.id === id ? {...box, on: !box.on} : box
            })
        })
    }

    const boxFrame = boxes.map(box => (
        <Box 
            key={box.id}
            on={box.on}
            handleClick={() => changeColor(box.id)}>
        </Box>
    ))

    return (
        <div>
            {boxFrame}
        </div>
    )
}

const ConditionRender = () => {
    const [messages, setMessages] = React.useState(['a','b'])

    function toggle(event){
        setMessages(prevMessages => prevMessages.length > 0 ? [] : ['a'])
    }

    return (
        <div>
            <div onClick={toggle}>{messages.length > 0 ? "Hide" : "Show"}</div>
            {
                messages.length === 0 ? 
                    <h1>You're all caught up!</h1> :
                    <h1>You have {messages.length} unread message{messages.length > 1 && 's'}</h1>
            }
        </div>
    )
}

const FormRender = () => {
    const [FormData, setFormData] = React.useState({
        firstName: "", 
        lastName: "", 
        email: "", 
        comment: "",
        isFriendly: true,
        employment: "",
        favColor: ""
    })

    console.log(FormData)

    function handleNameChange(event) {
        const {name, value, type, checked} = event.target
        setFormData( prevFormData => {
            return {
                ...prevFormData,
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }

    return (
        <div>
            <form>
                <input type="text" name="firstName" placeholder='Type something' onChange={handleNameChange} value={FormData.firstName}></input>
                <input type="text" name="lastName" placeholder='Type something' onChange={handleNameChange}></input>
                <div>{FormData.lastName}</div>
                <input type="text" name="email" placeholder='Type something' onChange={handleNameChange}></input>
                <div>{FormData.email}</div>
                <textarea name="comment" placeholder='Type comment' onChange={handleNameChange} value={FormData.comment}></textarea>
                <br/>
                <input name="isFriendly" type="checkbox" id="isFriendly" checked={FormData.isFriendly} onChange={handleNameChange}/>
                <label htmlFor='isFriendly'>Are you friendly</label>

                <fieldset>
                    <legend>Current employment status</legend>
                    <input name="employment" type="radio" id="unemployed" checked={FormData.employment === "unemployed"} value="unemployed" onChange={handleNameChange}/>
                    <label htmlFor='unemployed'>unemployed</label>
                    <br/>

                    <input name="employment" type="radio" id="part-time" checked={FormData.employment === "part-time"} value="part-time" onChange={handleNameChange}/>
                    <label htmlFor='part-time'>part-time</label>
                    <br/>

                    <input name="employment" type="radio" id="full-time" checked={FormData.employment === "full-time"} value="full-time" onChange={handleNameChange}/>
                    <label htmlFor='full-time'>full-time</label>
                    <br/>
                </fieldset>

                <select
                    id="favColor"
                    name="favColor"
                    onChange={handleNameChange}
                >
                    <option value="red">Red</option>
                    <option value="Orange">Orange</option>
                    <option value="Green">Green</option>
                    <option value="Blue">Blue</option>
                </select>
            </form>
        </div>
    )
}

const FormQuiz = () => {
    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
        confirmPassword: "",
        agreed: false
    })

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prev => {
            return {
                ...prev,
                [name]: type==="checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        if(formData.password === formData.confirmPassword) {
            console.log("Successfully signed up")
        } else {
            console.log("passwords do not match")
        }

        if(formData.agreed) { console.log("Thanks for signing for our newsletter") }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" placehold="enter your email" value={formData.email} onChange={handleChange}/><br/>
            <input type="password" name="password" placehold="enter your password" value={formData.password} onChange={handleChange}/><br/>
            <input type="password" name="confirmPassword" placehold="enter your password again" value={formData.confirmPassword} onChange={handleChange}/><br/>
            <input id="agreed" type="checkbox" name="agreed" checked={formData.agreed} onChange={handleChange}/>
            <lebel htmlFor="agreed">I want to join the newsletter</lebel>
            <br/>
            <button>Sign up</button>
        </form>
    )
}

ReactDOM.render(<Page1 />, document.getElementById('app'))
