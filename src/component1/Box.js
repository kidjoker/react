import React from 'react'
import BoxData from './boxes'

export default function Box(props) {
    return (
        <div>
            {props.on && <p>test on props</p>}
            <div
                className='box' 
                style={{backgroundColor: props.on ? '#222222' : 'transparent'}}
                onClick={() => props.handleClick()}>
            </div>
        </div>
    )
}