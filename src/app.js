import ReactDOM from 'react-dom';
import React from 'react';
import BottomBar from './component/BottomBar';
import Profile from './component/Profile';
import MainContent from './component/MainContent';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Card from "./component/Card";
import heroData from './component/HeroData';
import TravelData from './component/TravelData';
import TravelCard from './component/TravelCard';

import './css/main.css'
impo	
const Page1 = () => {
    return (
        <div>
            <Header />
            <Body />
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

ReactDOM.render(<Travel />, document.getElementById('app'))
