import React from 'react'

import { useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


export default function Connections() {
  const [automaticRestore1, SetAutomaticRestore1] = useState(false);
  const [automaticRestore2, SetAutomaticRestore2] = useState(false);
  const [automaticRestore3, SetAutomaticRestore3] = useState(false);
  const [automaticRestore4, SetAutomaticRestore4] = useState(false);
  const [automaticRestore5, SetAutomaticRestore5] = useState(false);
  useEffect(() => {
    const fatchData = async () => {
      const response_WIFI = await axios.get(
        "http://localhost:5000/6538d09d52bf1b49a387e3b7"
      );
      SetAutomaticRestore1(response_WIFI.data.value);
      const response_WIFICALL = await axios.get(
        "http://localhost:5000/6538d2cf5989dcece39bcb3e"
      );
      SetAutomaticRestore2(response_WIFICALL.data.value);
      const response_Bluthooth = await axios.get(
        "http://localhost:5000/6538d920b745488197e0ff66"
      );
      SetAutomaticRestore3(response_WIFI.data.value);
      const response_Flight = await axios.get(
        "http://localhost:5000/6538dc6979020246b4ec4ba4"
      );
      SetAutomaticRestore4(response_WIFI.data.value);
      const response_Hotspot = await axios.get(
        "http://localhost:5000/6538dcf779020246b4ec4ba5"
      );
      SetAutomaticRestore5(response_WIFI.data.value);
    };
    fatchData();
  },[]);

  const handleToggle1 = async () => {
    SetAutomaticRestore1(!automaticRestore1);
    const response = await axios.patch(
      "http://localhost:5000/6538d09d52bf1b49a387e3b7",
      {
        value: !automaticRestore1,
      }
    );
    console.log(response);
  };
  const handleToggle2 = async () => {
    SetAutomaticRestore2(!automaticRestore2);
    const response = await axios.patch(
      "http://localhost:5000/6538d2cf5989dcece39bcb3e",
      {
        value: !automaticRestore2,
      }
    );
    console.log(response);
  };
  const handleToggle3 = async () => {
    SetAutomaticRestore3(!automaticRestore3);
    const response = await axios.patch(
      "http://localhost:5000/6538d2cf5989dcece39bcb3e",
      {
        value: !automaticRestore3,
      }
    );
    console.log(response);
  };
  const handleToggle4 = async () => {
    SetAutomaticRestore4(!automaticRestore4);
    const response = await axios.patch(
      "http://localhost:5000/6538dc6979020246b4ec4ba4",
      {
        value: !automaticRestore4,
      }
    );
    console.log(response);
  };
  const handleToggle5 = async () => {
    SetAutomaticRestore5(!automaticRestore5);
    const response = await axios.patch(
      "http://localhost:5000/6538dcf779020246b4ec4ba5",
      {
        value: !automaticRestore5,
      }
    );
    console.log(response);
  };

  return (

    <div className='bg-black w-full h-full pb-9'>
      {/* Header of a Page */}
      <div className='bg-black w-full h-full '>
        <div className="bg-black text-white text-center text-4xl py-16">Connections</div>
        <div className='flex justify-between mx-4'>
          <div className='text-white m-2'><Link to={'/'}><i class="fas fa-arrow-left"></i></Link></div>
          <div><i className="fa-solid fa-magnifying-glass p-2 m-2wh text-white right border-white shadow-md rounded-full bg-neutral-800"></i></div>
        </div>
      </div>



      <div>
        <div>
          <div className='bg-neutral-900 m-3 rounded-lg flex justify-between'>
            <div className='text-white p-4'>Wi-Fi</div>
            <div className='text-gray-400 p-4 text-sm'>
              {/* Toggle button Code */}
              <label className="flex cursor-pointer select-none items-center">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={automaticRestore1}
                    onChange={handleToggle1}
                    className="sr-only"
                  />
                  <div className={`box block h-8 w-14 rounded-full ${automaticRestore1 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                  <div className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition-transform ${automaticRestore1 ? 'translate-x-full' : ''}`}></div>
                </div>
              </label>
            </div>
          </div>

          <div className='bg-neutral-900 m-3 rounded-lg flex justify-between'>
            <div className='text-white p-4'>Wi-Fi Calling</div>
            <div className='text-gray-400 p-4 text-sm'>
               {/* Toggle button Code */}
               <label className="flex cursor-pointer select-none items-center">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={automaticRestore2}
                    onChange={handleToggle2}
                    className="sr-only"
                  />
                  <div className={`box block h-8 w-14 rounded-full ${automaticRestore2 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                  <div className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition-transform ${automaticRestore2 ? 'translate-x-full' : ''}`}></div>
                </div>
              </label>
            </div>
          </div>

          <div className='bg-neutral-900 m-3 rounded-lg flex justify-between'>
            <div className='text-white p-4'>Bluetooth</div>
            <div className='text-gray-400 p-4 text-sm'>
              {/* Toggle button Code */}
              <label className="flex cursor-pointer select-none items-center">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={automaticRestore3}
                    onChange={handleToggle3}
                    className="sr-only"
                  />
                  <div className={`box block h-8 w-14 rounded-full ${automaticRestore3 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                  <div className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition-transform ${automaticRestore3 ? 'translate-x-full' : ''}`}></div>
                </div>
              </label>
            </div>
          </div>

          <div className='bg-neutral-900 m-3 rounded-lg flex justify-between'>
            <div className='text-white p-4'>Flight Mode</div>
            <div className='text-gray-400 p-4 text-sm'>
            <label className="flex cursor-pointer select-none items-center">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={automaticRestore4}
                    onChange={handleToggle4}
                    className="sr-only"
                  />
                  <div className={`box block h-8 w-14 rounded-full ${automaticRestore4 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                  <div className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition-transform ${automaticRestore4 ? 'translate-x-full' : ''}`}></div>
                </div>
              </label>
            </div>
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
            <div className='text-gray-400 p-4 text-sm'>
            <label className="flex cursor-pointer select-none items-center">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={automaticRestore5}
                    onChange={handleToggle5}
                    className="sr-only"
                  />
                  <div className={`box block h-8 w-14 rounded-full ${automaticRestore5 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                  <div className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition-transform ${automaticRestore5 ? 'translate-x-full' : ''}`}></div>
                </div>
              </label>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
