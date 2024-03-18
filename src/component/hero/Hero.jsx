import React from 'react'
import './Hero.css'
import arrow_btn from '../../assets/arrow_btn.png'
import pause_icon from '../../assets/pause_icon.png'
import play_icon from '../../assets/play_icon.png'
 const Hero = ({heroCount,heroData,setPlayStatus,playStatus,setHeroCount}) => {
  return (
    <div className='hero'>
        <div className="hero-text">
            <p>{heroData.text1}</p>
            <p>{heroData.text2}</p>
            <p>Best time to buy</p>
            <p>India's #1 EV</p>

        </div>
        <div className="hero-explore">
            <p>Buy Now</p>
            <img src={arrow_btn} alt="" srcset="" />
        </div>
        <div className="hero-dot-play">
            <ul className="hero-dots">
                <li onClick={()=>setHeroCount(0)} className={heroCount===0?"hero-dot orange":"hero-dot"}></li>
                <li onClick={()=>setHeroCount(1)} className={heroCount===1?"hero-dot orange":"hero-dot"}> </li>
                <li onClick={()=>setHeroCount(2)} className={heroCount===2?"hero-dot orange":"hero-dot"}></li>
            </ul>
            <div className="hero-play">
                <img onClick={()=>setPlayStatus(!playStatus)} src={playStatus?pause_icon:play_icon} alt="" srcset="" />
                <p>See the video</p>
            </div>
        </div>
    </div>
  )
}

export default Hero