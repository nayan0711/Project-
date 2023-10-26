import React from 'react'
import SoundRadioBtn from './SoundRadioBtn'

import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'

export default function Sound_and_Vibrations() {
  const [automaticSlider2, SetAutomaticSlider2]= useState(0);
  const [automaticSlider3,SetAutomaticSlider3]= useState(0);
  const [automaticSlider4,SetAutomaticSlider4]= useState(0);
  const [automaticSlider5,SetAutomaticSlider5]= useState(0);
  const updateSliderValue2 = async (newValue) => {
    try {
      // Log the new value to check if it's received correctly
      console.log('New Slider Value:', newValue);
  
      // Update the slider value in the database
      const response_Ringtone = await axios.patch(
        "http://localhost:5000/slider/653a0bdd36d51a3e7211e677",
        {
          value: newValue,
        }
      );
  
      // Log the response from the database update
      console.log('Database Update Response:', response_Ringtone);
  
      // Update the slider value in your component state
      SetAutomaticSlider2(newValue);
    } catch (error) {
      console.error('Error updating slider value:', error);
    }
  };

  const updateSliderValue3 = async (newValue) => {
    try {
      // Log the new value to check if it's received correctly
      console.log('New Slider Value:', newValue);
  
      // Update the slider value in the database
      const response_Nsound = await axios.patch(
        "http://localhost:5000/slider/653a45e301a928dd7633d7f4",
        {
          value: newValue,
        }
      );
  
      // Log the response from the database update
      console.log('Database Update Response:', response_Nsound);
  
      // Update the slider value in your component state
      SetAutomaticSlider3(newValue);
    } catch (error) {
      console.error('Error updating slider value:', error);
    }
  };

  const updateSliderValue4 = async (newValue) => {
    try {
      // Log the new value to check if it's received correctly
      console.log('New Slider Value:', newValue);
  
      // Update the slider value in the database
      const response_Ssound = await axios.patch(
        "http://localhost:5000/slider/653a467f01a928dd7633d7f6",
        {
          value: newValue,
        }
      );
  
      // Log the response from the database update
      console.log('Database Update Response:', response_Ssound);
  
      // Update the slider value in your component state
      SetAutomaticSlider4(newValue);
    } catch (error) {
      console.error('Error updating slider value:', error);
    }
  };

  const updateSliderValue5 = async (newValue) => {
    try {
      // Log the new value to check if it's received correctly
      console.log('New Slider Value:', newValue);
  
      // Update the slider value in the database
      const response_Vintensity = await axios.patch(
        "http://localhost:5000/slider/653a47c38f5eb7ea24d9c4df",
        {
          value: newValue,
        }
      );
  
      // Log the response from the database update
      console.log('Database Update Response:', response_Vintensity);
  
      // Update the slider value in your component state
      SetAutomaticSlider5(newValue);
    } catch (error) {
      console.error('Error updating slider value:', error);
    }
  };


  useEffect(() => {
    const fatchData = async () => {
      const response_Ringtone=await axios.get(
        "http://localhost:5000/slider/653a0bdd36d51a3e7211e677"
      )
      SetAutomaticSlider2(response_Ringtone.data.value);
      const response_Nsound=await axios.get(
        "http://localhost:5000/slider/653a45e301a928dd7633d7f4"
      )
      SetAutomaticSlider3(response_Nsound.data.value);
      const response_Ssound=await axios.get(
        "http://localhost:5000/slider/653a467f01a928dd7633d7f6"
      )
      SetAutomaticSlider4(response_Ssound.data.value);
      const response_Vintensity=await axios.get(
        "http://localhost:5000/slider/653a47c38f5eb7ea24d9c4df"
      )
      SetAutomaticSlider5(response_Vintensity.data.value);
    };
    fatchData();
  }, []);


  return (
    <div>
      <div className='bg-black w-full h-screen'>
        <div className="bg-black text-white text-center text-4xl py-16">Sound and Vibrations</div>
        <div className='flex justify-between mx-4'>
          <div className='text-white m-2'><Link to={'/'}><i class="fas fa-arrow-left"></i></Link></div>
          <div><i className="fa-solid fa-magnifying-glass p-2 m-2wh text-white right border-white shadow-md rounded-full bg-neutral-800"></i></div>
        </div>
        <div>
          <SoundRadioBtn />
        </div>
        <div className='bg-neutral-900 m-3 rounded-lg flex justify-between'>
          <div className='text-white p-4'>Ringtone</div>
          <div>
            <main className='p-4'>
              <section>
                <input
                  type="range"
                  min={0}
                  max={100}
                  step={0.02}
                  value={automaticSlider2}
                  onChange={event => {
                    const newValue = event.target.valueAsNumber;
                    updateSliderValue2(newValue)
                  }}
                />

              </section>

            </main>
          </div>
        </div>
        <div className='bg-neutral-900 m-3 rounded-lg flex justify-between'>
          <div className='text-white p-4'>Notification sound</div>
          <div>
          <main className='p-4'>
              <section>
                <input
                  type="range"
                  min={0}
                  max={100}
                  step={0.02}
                  value={automaticSlider3}
                  onChange={event => {
                    const newValue = event.target.valueAsNumber;
                    updateSliderValue3(newValue)
                  }}
                />

              </section>

            </main>
          </div>
        </div>
        <div className='bg-neutral-900 m-3 rounded-lg flex justify-between'>
          <div className='text-white p-4'>System sound</div>
          <div>
          <main className='p-4'>
              <section>
                <input
                  type="range"
                  min={0}
                  max={100}
                  step={0.02}
                  value={automaticSlider4}
                  onChange={event => {
                    const newValue = event.target.valueAsNumber;
                    updateSliderValue4(newValue)
                  }}
                />

              </section>

            </main>
          </div>
        </div>
        <div className='bg-neutral-900 m-3 rounded-lg flex justify-between'>
          <div className='text-white p-4'>Vibration Intensity</div>
          <div>
          <main className='p-4'>
              <section>
                <input
                  type="range"
                  min={0}
                  max={100}
                  step={0.02}
                  value={automaticSlider5}
                  onChange={event => {
                    const newValue = event.target.valueAsNumber;
                    updateSliderValue5(newValue)
                  }}
                />

              </section>

            </main>
          </div>
        </div>
        <div className='bg-neutral-900 m-3 rounded-lg flex justify-between'>
          <div className='text-white p-4'>Sound Quality and effect</div>

        </div>
      </div>
    </div>
  )
}
