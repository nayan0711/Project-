import React from 'react';
import { Link } from 'react-router-dom';


export default function Settings() {

  return (
    <div className='container bg-black h-screen'>

      <div className='bg-black h-fit'>
        <div className="bg-black text-white text-center text-4xl py-16">Settings</div>
        <div className="flex w-full p-1 h-15 bg-black">
          <input type="text" className="w-full justify-center py-1.5 px-3.5 rounded-full text-white bg-neutral-800" placeholder='Search Setting' />
          <i className="fa-solid fa-magnifying-glass p-2 mx-1 text-white right border-white shadow-md rounded-full bg-neutral-800"></i>
        </div> 

      <div>
          <ul>
            <li>
              <Link to={'./Details'} className="Link">
                <div className='bg-neutral-900 m-3 rounded-lg'>
                  <div className='text-white px-4'>Nayan Verma </div>
                  <div className='text-gray-400 px-4 text-sm'>Samsung ~ na*************@gmail.com  </div>
                </div>
              </Link>
              <div className='bg-neutral-900 m-3 rounded-lg flex '>
                <div className='text-white p-4'>Access your pictures anywhere        ✨</div>
              </div>
            </li>

            <li>
              <Link to={'/Components/Connections'}>
                <div className='bg-neutral-900 m-3 rounded-lg flex items-center'>
                  <i className="fa-solid fa-wifi text-white p-4"></i>
                  <div className='text-white px-4'>Connections</div>
                  <br></br>
                  <div className='text-gray-400 text-sm px-4'>Wi-Fi . Blutooth . SIM Manager</div>
                </div>
              </Link>
            </li>

            <li>
              <Link to={'/Components/Sound_and_Vibrations'}>
                <div className='bg-neutral-900 m-3 rounded-lg flex items-center'>
                  <i class="fa-solid fa-volume-high text-white p-4"></i>
                  <div className='text-white px-4'>Sound and Vibrations</div>
                  <br></br>
                  <div className='text-gray-400 text-sm px-4'>Sound Mode . Ringtone</div>
                </div>
              </Link>

            </li>
            <li>
              <Link to={'/Components/Display_and_Brightness'}>
                <div className='bg-neutral-900 m-3 rounded-lg flex items-center'>
                  <i class="fa-solid fa-volume-high text-white p-4"></i>
                  <div className='text-white px-4'>Display</div>
                  <br></br>
                  <div className='text-gray-400 text-sm px-4'>Brightness . Eye comfort shield . Navigation bar</div>
                </div>
              </Link>
            </li>
            <li>
              <Link to={'/Components/AboutPhone'}>
                <div className='bg-neutral-900 m-3 rounded-lg flex items-center'>
                  <i class="fas fa-info-circle text-white p-4"></i>

                  <div className='text-white px-4'>About Phone</div>
                  <br></br>
                  <div className='text-gray-400 text-sm px-4'>Status . Legal Information . Phone name</div>
                </div>
              </Link>
            </li>

          </ul>
        </div> 



      </div>



{/* Header of a Page */}
       {/* <div className='bg-black w-full h-full'>
        <div className="bg-black text-white text-center text-4xl py-16">Connections</div>
        <div className='flex justify-between'>
          <div className='text-white m-2'><i class="fas fa-arrow-left"></i></div>
          <div><i className="fa-solid fa-magnifying-glass p-2 m-2wh text-white right border-white shadow-md rounded-full bg-neutral-800"></i></div>
        </div>
      </div> */}



    </div>
  )
}
