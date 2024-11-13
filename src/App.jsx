import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from './button'
import Otp from './Otp'
import './App.css'

function App() {
  const [disable, setdisable] = useState(false);
  const [year, setYear] = useState(0);
  function onchange(e)
  {
    if(e.target.value >= 1800 && e.target.value <=2100) 
    {
      setdisable(false);
    }
    else{
      setdisable(true);
    }
  }
  return (
   <div className='bg-[#00274E] min-h-screen flex items-start justify-center'>
          <div className='flex-col text-center items-between p-20 space-y-6'>
        <h1 className='mt-10 mb-10 text-white text-[#449CB0] text-xl font-bold'>Webinar.gg</h1>
        <h1 className='mt-10 text-2xl font-bold text-white'>Verify your age</h1>
        
        <div className="secondpart">
          <h1 className='mt-5  text-white text-sm'>Please confirm your DOB. This data will not be stored</h1>
          <input type='number' onChange={onchange} className=' mt-2 bg-[#18395F] focus:outline-none  p-1 pt-2 pb-2 rounded-lg w-80  text-white' placeholder="Your birth year"/>
        </div>
        <Button disabled={disable} children={"Continue"}></Button>
      </div>
   </div> 
  )
}

export default App
