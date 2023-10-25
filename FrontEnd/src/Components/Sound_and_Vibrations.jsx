import React from 'react'
import SoundRadioBtn from './SoundRadioBtn'
import Slider from './Slider'
import { Link } from 'react-router-dom'

export default function Sound_and_Vibrations() {
  return (
    <div>
      <div className='bg-black w-full h-screen'>
        <div className="bg-black text-white text-center text-4xl py-16">Sound and Vibrations</div>
        <div className='flex justify-between mx-4'>
          <div className='text-white m-2'><Link to={'/'}><i class="fas fa-arrow-left"></i></Link></div>
          <div><i className="fa-solid fa-magnifying-glass p-2 m-2wh text-white right border-white shadow-md rounded-full bg-neutral-800"></i></div>
        </div>
        <div>
          <SoundRadioBtn/>
        </div>
        <div className='bg-neutral-900 m-3 rounded-lg flex justify-between'>
                  <div className='text-white p-4'>Ringtone</div>
                  <div><Slider/></div>
        </div>
        <div className='bg-neutral-900 m-3 rounded-lg flex justify-between'>
                  <div className='text-white p-4'>Notification sound</div>
                  <div><Slider/></div>
        </div>
        <div className='bg-neutral-900 m-3 rounded-lg flex justify-between'>
                  <div className='text-white p-4'>System sound</div>
                  <div><Slider/></div>
        </div>
        <div className='bg-neutral-900 m-3 rounded-lg flex justify-between'>
                  <div className='text-white p-4'>Vibration Intensity</div>
                  <div><Slider/></div>
        </div>
        <div className='bg-neutral-900 m-3 rounded-lg flex justify-between'>
                  <div className='text-white p-4'>Sound Quality and effect</div>
  
        </div>
      </div>
    </div>
  )
}
