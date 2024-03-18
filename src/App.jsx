import React,{useState,useEffect} from 'react'

import Background from './component/background/Background'
import Navbar from './component/navbar/Navbar'
import Hero from './component/hero/Hero'
 const App = () => {
  let heroData=[
    {text1:"Dive into",text2:"What you love"},
    {text1:"Indulge",text2:"your passion"},
    {text1:"Give in to",text2:"your passions"}
  ]
  const[heroCount,setHeroCount]=useState(0);
  const[playStatus,setPlayStatus]=useState(false)
  useEffect(()=>
  {
    setInterval(()=>
    {
      setHeroCount((count)=>{return count===2?0:count+1})
    },3000)
  },[])
  return (
  
    <div>
      <Background heroCount={heroCount} playStatus={playStatus}/>
      <Navbar/>
      <Hero setPlayStatus={setPlayStatus} playStatus={playStatus} heroData={heroData} heroCount={heroCount[heroCount]} setHeroCount={setHeroCount}/> 
    </div>
  )
}

export default App
