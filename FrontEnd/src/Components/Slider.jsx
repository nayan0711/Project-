import React from 'react'
import { useState } from 'react'

export default function Slider() {

    const [volume, setVolume] = useState(10)
    
  
    return (
    <div>
      <main className='p-4'>
        <section>
          <input
            type="range"
            min={0}
            max={100}
            step={0.02}
            value={volume}
            onChange={event => {
              setVolume(event.target.valueAsNumber)
            }}
          />
         
        </section>
        
      </main>
      </div>
  )
}
