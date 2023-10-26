import React from 'react'

import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Display_and_Brightness() {
  const [automaticRestore6, SetAutomaticRestore6] = useState(false);
  const [automaticRestore7, SetAutomaticRestore7] = useState(false);
  const [automaticRestore8, SetAutomaticRestore8] = useState(true);
  // for slider
  const [automaticSlider, SetAutomaticSlider]= useState(0);
  const updateSliderValue1 = async (newValue) => {
    try {
      // Log the new value to check if it's received correctly
      console.log('New Slider Value:', newValue);
  
      // Update the slider value in the database
      const response_Brightness = await axios.patch(
        "http://localhost:5000/slider/653a0bdd36d51a3e7211e677",
        {
          value: newValue,
        }
      );
  
      // Log the response from the database update
      console.log('Database Update Response:', response_Brightness);
  
      // Update the slider value in your component state
      SetAutomaticSlider(newValue);
    } catch (error) {
      console.error('Error updating slider value:', error);
    }
  };
  

  useEffect(() => {
    const fatchData = async () => {
      const response_Mode = await axios.get(
        "http://localhost:5000/653910664c72f97e9b22166f"
      );
      SetAutomaticRestore6(response_Mode.data.value);
      const response_adtBrightness = await axios.get(
        "http://localhost:5000/653910b44c72f97e9b221670"
      );
      SetAutomaticRestore7(response_adtBrightness.data.value);
      const response_EyeShield = await axios.get(
        "http://localhost:5000/653910fc4c72f97e9b221671"
      );
      SetAutomaticRestore8(response_EyeShield.data.value);
      const response_Brightness=await axios.get(
        "http://localhost:5000/slider/653a0bdd36d51a3e7211e677"
      )
      SetAutomaticSlider(response_Brightness.data.value);
    };
    fatchData();
  }, []);
  const handleToggle6 = async () => {
    SetAutomaticRestore6(!automaticRestore6);
    const response = await axios.patch(
      "http://localhost:5000/653910664c72f97e9b22166f",
      {
        value: !automaticRestore6,
      }
    );
    console.log(response);
  };
  const handleToggle7 = async () => {
    SetAutomaticRestore7(!automaticRestore7);
    const response = await axios.patch(
      "http://localhost:5000/653910b44c72f97e9b221670",
      {
        value: !automaticRestore7,
      }
    );
    console.log(response);
  };
  const handleToggle8 = async () => {
    SetAutomaticRestore8(!automaticRestore8);
    const response = await axios.patch(
      "http://localhost:5000/653910fc4c72f97e9b221671",
      {
        value: !automaticRestore8,
      }
    );
    console.log(response);
  };

  


  return (
    <div className='text-white bg-black w-full h-full pb-9'>
      <div className="bg-black text-white text-center text-4xl py-16">Display</div>
      <div className='flex justify-between mx-4'>
        <div className='text-white m-2'><Link to={'/'}><i class="fas fa-arrow-left"></i></Link></div>
        <div><i className="fa-solid fa-magnifying-glass p-2 m-2wh text-white right border-white shadow-md rounded-full bg-neutral-800"></i></div>
      </div>
      <div className='bg-neutral-900 m-3 rounded-lg flex justify-between'>
        <div className='text-white p-4'>Dark Mode</div>
        <div className='p-4 text-sm'>
          <label className="flex cursor-pointer select-none items-center">
            <div className="relative">
              <input
                type="checkbox"
                checked={automaticRestore6}
                onChange={handleToggle6}
                className="sr-only"
              />
              <div className={`box block h-8 w-14 rounded-full ${automaticRestore6 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
              <div className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition-transform ${automaticRestore6 ? 'translate-x-full' : ''}`}></div>
            </div>
          </label>
        </div>
      </div>
      <div className='bg-neutral-900 m-3 rounded-lg flex justify-between'>
        <div className='text-white p-4'>Brightness</div>
        <div>
        <main className='p-4'>
        <section>
          <input
            type="range"
            min={0}
            max={100}
            step={0.02}
            value={automaticSlider}
            onChange={event => {
              const newValue = event.target.valueAsNumber;
              updateSliderValue1(newValue)
            }}
          />
         
        </section>
        
      </main>
        </div>
      </div>
      <div className='bg-neutral-900 m-3 rounded-lg flex justify-between'>
        <div className='text-white p-4'>Adaptive brightness</div>
        <div className='p-4 text-sm'>
        <label className="flex cursor-pointer select-none items-center">
            <div className="relative">
              <input
                type="checkbox"
                checked={automaticRestore7}
                onChange={handleToggle7}
                className="sr-only"
              />
              <div className={`box block h-8 w-14 rounded-full ${automaticRestore7 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
              <div className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition-transform ${automaticRestore7 ? 'translate-x-full' : ''}`}></div>
            </div>
          </label>
        </div>
      </div>
      <div className='bg-neutral-900 m-3 rounded-lg flex justify-between'>
        <div className='text-white p-4'>Motion smoothness</div>
      </div>
      <div className='bg-neutral-900 m-3 rounded-lg flex justify-between'>
        <div className='text-white p-4'>Eye comfort sheild</div>
        <div className='p-4 text-sm'>
        <label className="flex cursor-pointer select-none items-center">
            <div className="relative">
              <input
                type="checkbox"
                checked={automaticRestore8}
                onChange={handleToggle8}
                className="sr-only"
              />
              <div className={`box block h-8 w-14 rounded-full ${automaticRestore8 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
              <div className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition-transform ${automaticRestore8 ? 'translate-x-full' : ''}`}></div>
            </div>
          </label>
        </div>
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
