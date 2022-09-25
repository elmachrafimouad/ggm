import React from 'react';
import { RiTelegramLine, RiTwitterLine } from 'react-icons/ri'

function Footer() {
  const goToLink = (link) => {
    window.open(link , '_blank')
  }

  return (
    <div className='bg-primary p-8 w-full h-full '>
      <div className="container ">
        <div className="flex justify-between items-center">
          <div className='flex'>
            <h6 className='text-white text-xs'>ShibaPlayer  </h6>
            <h6 className='text-white text-xs'> © 2022 All rights reserved.  </h6>
          </div>
          <div className="flex">
            <button onClick={() => goToLink("https://twitter.com/Dogexstar")}>
              <RiTwitterLine fontSize={20} color="white" className='mr-3' />
            </button>
            <button onClick={() => goToLink("https://t.me/ShibaPlayerofficial")}>
              <RiTelegramLine fontSize={20} color="white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer