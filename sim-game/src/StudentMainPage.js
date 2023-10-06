import homeIcon from './assets/home_icon.png';
import './StudentMainPage.css';
import bankIcon from './assets/bank_icon.png';
import superMarketIcon from './assets/supermarket_icon.png';
import StudentNavBar from './StudentNavBar';
import { useState } from 'react';
import townImg from './assets/town_img.jpg';

const StudentMainPage = () => {

    const ClickHomeIcon = () => {
        console.log("clicked")
    }

    const ClickBankIcon = () => {
        console.log("bank")
    }

    const ClickLeaderBoard = () => {
        
    }

    const ClickSuperMarket = () => {

    }

    return (
        <div> 
            <StudentNavBar />
            <div className='page-container'>
                <img src={townImg} className='townImg'/>
                <button className='MapButton' id='HomeBtn' onClick={ClickHomeIcon}> <img src={homeIcon} alt="Button Image" className='ButtonIcon'/> </button>
                <button className='MapButton' id='BankBtn' onClick={ClickBankIcon}> <img src={bankIcon} alt="Button Image" className='ButtonIcon'/></button>
                <button className='MapButton' id='LeaderBoardBtn' onClick={ClickLeaderBoard}>  ClickLeaderBoard </button>
                <button className='MapButton' id='SuperMarketBtn' onClick={ClickSuperMarket}> <img src={superMarketIcon} alt="Button Image" className='ButtonIcon'/></button>
            </div>
        </div>
    );
}

export default StudentMainPage;