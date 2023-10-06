import homeIcon from './assets/home_icon.png';
import './StudentMainPage.css';
import bankIcon from './assets/bank_icon.png';
import superMarketIcon from './assets/supermarket_icon.png';
import { useState } from 'react';
import townImg from './assets/town_img.jpg';
import { useNavigate } from 'react-router-dom';

const StudentMainPage = () => {
    const navigate = useNavigate();

    const ClickHomeIcon = () => {
        console.log("clicked")
        navigate("/")
    }

    const ClickBankIcon = () => {
        console.log("bank")
        navigate("/Bank")
    }

    const ClickLeaderBoard = () => {
        
    }

    const ClickSuperMarket = () => {
        navigate("/GroceryGame")

    }

    return (
        <div> 
            <div className='page-container'>
                <img src={townImg} className='townImg'/>
                <button className='MapButton' id='HomeBtn' onClick={ClickHomeIcon}> <img src={homeIcon} alt="Button Image" className='ButtonIcon'/> </button>
                <button className='MapButton' id='BankBtn' onClick={ClickBankIcon}> <img src={bankIcon} alt="Button Image" className='ButtonIcon'/></button>
                <button className='MapButton' id='LeaderBoardBtn' onClick={ClickLeaderBoard}>  ClickLeaderBoard </button>
                <button className='MapButton' id='SuperMarketBtn' onClick={ClickSuperMarket}> <img src={superMarketIcon} alt="Button Image" className='ButtonIcon'/></button>
                <div className="bg-yellow-200 text-yellow-800 p-4 rounded-lg shadow w-1/2">
                    <p className="text-lg font-bold">New Task !!</p>
                    <p>Visit the supermarket</p>
                </div>
            </div>
        </div>
    );
}

export default StudentMainPage;