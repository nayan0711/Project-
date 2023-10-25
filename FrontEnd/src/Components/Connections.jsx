import React from 'react'
import ToggleBtn from './ToggleBtn'



export default function Connections() {

  

  return (
    

    
    <div className='bg-black'>
      {/* Header of a Page */}
      <div className='bg-black w-full h-full'>
        <div className="bg-black text-white text-center text-4xl py-16">Connections</div>
        <div className='flex justify-between mx-4'>
          <div className='text-white m-2'><i class="fas fa-arrow-left"></i></div>
          <div><i className="fa-solid fa-magnifying-glass p-2 m-2wh text-white right border-white shadow-md rounded-full bg-neutral-800"></i></div>
        </div>
      </div>



      <div>
        <div>
        <div className='bg-neutral-900 m-3 rounded-lg flex justify-between'>
                  <div className='text-white p-4'>Wi-Fi</div>
                  <div className='text-gray-400 p-4 text-sm'><ToggleBtn/></div>
        </div>

        <div className='bg-neutral-900 m-3 rounded-lg flex justify-between'>
                  <div className='text-white p-4'>Wi-Fi Calling</div>
                  <div className='text-gray-400 p-4 text-sm'><ToggleBtn/></div>
        </div>
        
        <div className='bg-neutral-900 m-3 rounded-lg flex justify-between'>
                  <div className='text-white p-4'>Bluetooth</div>
                  <div className='text-gray-400 p-4 text-sm'><ToggleBtn/></div>
        </div>

        <div className='bg-neutral-900 m-3 rounded-lg flex justify-between'>
                  <div className='text-white p-4'>Flight Mode</div>
                  <div className='text-gray-400 p-4 text-sm'><ToggleBtn/></div>
        </div>
        <div className='bg-neutral-900 m-3 rounded-lg flex justify-between'>
                  <div className='text-white p-4'>SIM manager</div>
                  
        </div>
        <div className='bg-neutral-900 m-3 rounded-lg flex justify-between'>
                  <div className='text-white p-4'>Mobile Networks</div>
                 
        </div>
        <div className='bg-neutral-900 m-3 rounded-lg flex justify-between'>
                  <div className='text-white p-4'>Data Usage</div>
                  
        </div>
        <div className='bg-neutral-900 m-3 rounded-lg flex justify-between'>
                  <div className='text-white p-4'>Mobile Hotspot and Tethering</div>
                  <div className='text-gray-400 p-4 text-sm'><ToggleBtn/></div>
        </div>
        </div>

      </div>
      </div>
      )
}
