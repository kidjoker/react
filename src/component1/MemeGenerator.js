import React from 'react';
import ReactDOM from 'react-dom';
import MemesData from './memesData';

export default function MemesGenerator() {
    let [counter, setCounter] = React.useState(0);
    let [array, setUrlArray] = React.useState([]);
    let [flag, setFlag] = React.useState(true);
    let [imgObj, setImgUrl] = React.useState(
        {
            topText: "Top text",
            bottomText: "bottom text",
            randomImage: "http://i.imgflip.com/1bij.jpg"
        }
    );

    function handleClick(e) {
        e.preventDefault();
        const memesArray = MemesData.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        
        setUrlArray(oldArray => [...oldArray, memesArray[randomNumber].url]);
        console.log(urlElements);
    }

    function changeImage(e) {
        e.preventDefault();
        const memesArray = MemesData.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        setImgUrl(prevObj => ({
            ...prevObj,
            randomImage: memesArray[randomNumber].url
        }));
    }

    function handlePlus(e) {
        e.preventDefault();
        setCounter(oldvalue => oldvalue + 1);
    }

    function handleMinus(e) {
        e.preventDefault();
        setCounter(oldvalue => oldvalue - 1);
    }

    function flipBollean(e) {
        e.preventDefault();
        setFlag(prev => !prev)
    }

    return (
        <div>
            <form className="form">
                <input type="text" placeholder={imgObj.topText} className='form--input'></input>
                <input type="text" placeholder={imgObj.bottomText} className='form--input'></input>
                {/*<button onClick={handleClick} className='form--button'>Get a new meme image</button>*/}
                <img className="form--img" src={imgObj.randomImage} onClick={changeImage}/>

                {/*<button onClick={handlePlus} className='form--button'>+</button>*/}
                {/*<button onClick={handleMinus} className='form--button'>-</button>*/}
                {/*<p>{counter}</p>*/}
                {/*<p onClick={flipBollean}>{flag?"Yes":"No"}</p>*/}
             </form>
        </div>
    )
}