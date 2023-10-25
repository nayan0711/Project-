import React from 'react'
import ToggleBtn from './ToggleBtn'
import Slider from './Slider'
import { Link } from 'react-router-dom'

export default function Display_and_Brightness() {
  return (
    <div className='text-white bg-black w-full h-full'>
      <div className="bg-black text-white text-center text-4xl py-16">Display</div>
        <div className='flex justify-between mx-4'>
          <div className='text-white m-2'><Link to={'/'}><i class="fas fa-arrow-left"></i></Link></div>
          <div><i className="fa-solid fa-magnifying-glass p-2 m-2wh text-white right border-white shadow-md rounded-full bg-neutral-800"></i></div>
        </div>
        <div className='bg-neutral-900 m-3 rounded-lg flex justify-between'>
                  <div className='text-white p-4'>Dark Mode</div>
                  <div className='p-4 text-sm'><ToggleBtn/></div>
        </div>
        <div className='bg-neutral-900 m-3 rounded-lg flex justify-between'>
                  <div className='text-white p-4'>Brightness</div>
                  <div><Slider/></div>
        </div>
        <div className='bg-neutral-900 m-3 rounded-lg flex justify-between'>
                  <div className='text-white p-4'>Adaptive brightness</div>
                  <div className='p-4 text-sm'><ToggleBtn/></div>
        </div>
        <div className='bg-neutral-900 m-3 rounded-lg flex justify-between'>
                  <div className='text-white p-4'>Motion smoothness</div>
        </div>
        <div className='bg-neutral-900 m-3 rounded-lg flex justify-between'>
                  <div className='text-white p-4'>Eye comfort sheild</div>
                  <div className='p-4 text-sm'><ToggleBtn/></div>
        </div>
        <div className='bg-neutral-900 m-3 rounded-lg flex justify-between'>
                  <div className='text-white p-4'>Screen mode</div>
        </div>
        <div className='bg-neutral-900 m-3 rounded-lg flex justify-between'>
                  <div className='text-white p-4'>Font size and style</div>
        </div>
        <div className='bg-neutral-900 m-3 rounded-lg flex justify-between'>
                  <div className='text-white p-4'>Screen zoom</div>
        </div>
        <div className='bg-neutral-900 m-3 rounded-lg flex justify-between'>
                  <div className='text-white p-4'>Full screen apps</div>
        </div>
        <div className='bg-neutral-900 m-3 rounded-lg flex justify-between'>
                  <div className='text-white p-4'>Camera cutout</div>
        </div>

    </div>
  )
}
