import React from 'react'
import { HiOutlineChatAlt, HiOutlineBell } from 'react-icons/hi';
import { Popover } from '@headlessui/react';

const Header = () => {
  return (
    <div className='bg-white h-16 px-4 flex justify-between items-center'>
    <div></div>
    <div className='flex flex-cols gap-5 mr-2'>
    <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className='inline-flex items-center'
            >
                <HiOutlineChatAlt fontSize={24}/>
            </Popover.Button>
            </> )}
    </Popover>
        <HiOutlineBell fontSize={24} />
      </div>
    </div>
  )
}

export default Header;
