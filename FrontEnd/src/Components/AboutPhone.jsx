import React from 'react'
import AboutPhn from './AboutPhn.jpg'
import {Link} from 'react-router-dom'
export default function AboutPhone() {
  return (
    <div className='text-white bg-black w-full h-full pb-9'>
      <div className="bg-black text-white text-center text-4xl py-16">About Phone</div>
      <div className='flex justify-between mx-4'>
        <div className='text-white m-2'><Link to={'/'}><i class="fas fa-arrow-left"></i></Link></div>
        <div><i className="fa-solid fa-magnifying-glass p-2 m-2wh text-white right border-white shadow-md rounded-full bg-neutral-800"></i></div>
      </div>

      <div class="h-32 w-32 mx-auto">
        <img src={AboutPhn} alt="" class="align-middle" />
      </div>

      <div>
        <div className='flex justify-between mx-10'>
          <div className='text-neutral-400'>Phone number</div>
          <div>919109365511</div>
        </div>
        <div className='flex justify-between mx-10'>
          <div className='text-neutral-400'>Product name</div>
          <div>Galaxy M32</div>
        </div>
        <div className='flex justify-between mx-10'>
          <div className='text-neutral-400'>Model name</div>
          <div>SM-M********</div>
        </div>
        <div className='flex justify-between mx-10'>
          <div className='text-neutral-400'>Serial number</div>
          <div>RZ8R*********</div>
        </div>
        <div className='flex justify-between mx-10'>
          <div className='text-neutral-400'>IMEI (slot 1)</div>
          <div>35096*************</div>
        </div>
        <div className='flex justify-between mx-10'>
          <div className='text-neutral-400'>IMEI (slot 2)</div>
          <div>34416*************</div>
        </div>
      </div>

      <div>
      <div className='bg-neutral-900 m-3 rounded-lg justify-between'>
                  <Link to={'/'}> <div className='text-white p-4'>Status Information</div></Link>
                  <hr  className='mx-4'/>
                  <div className='text-white p-4'>Status Information</div>
                  <hr  className='mx-4'/>
                  <Link to={'/'}> <div className='text-white p-4'>Legal Information</div></Link>
                  <hr  className='mx-4'/>
                  <Link to={'/'}> <div className='text-white p-4'>Regulatory Information</div></Link>
                  <hr  className='mx-4'/>
                  <Link to={'/'}> <div className='text-white p-4'>Software Information</div></Link>
                  <hr  className='mx-4'/>
                  <Link to={'/'}> <div className='text-white p-4'>Battery Information</div></Link>
        </div>
      </div>




    </div>
  )
}
