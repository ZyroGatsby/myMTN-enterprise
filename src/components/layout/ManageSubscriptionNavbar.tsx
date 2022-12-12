/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';
import * as React from 'react';
import { FaPlusCircle } from 'react-icons/fa';

import UnstyledLink from '@/components/links/UnstyledLink';

const subNmaes = [
  { id:'1', name: 'John', active: true },
  { id:'2', name: 'Maria', active: false },
  { id:'3', name: 'Hynetflex', active: false },
  { id:'4', name: 'Son', active: false },
]

export default function ManageSubscriptionNavbar() {
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-[15px] mt-[30px]">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full lg:w-2/3 px-[15px]">
          <div className="flex items-center flex-row">
            {subNmaes.map(({ name, id, active }) => (
              <div className="mr-10 text-center text-sm" key={id}>
                <span 
                  // className="bg-[#006891] text-white h-10 w-10 text-center leading-10 rounded-[50%] block"
                  className={clsx(active ? 'bg-[#006891] text-white' : 'bg-[#eef3f6] text-dark', 'h-10 w-10 text-center leading-10 rounded-[50%] inline-block')}
                >{name.charAt(0)}</span>
                <p className='text-[#000000b3] '>{name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/3 px-[15px]">
          <p className="mb-0 lg:text-right mt-4">
            <UnstyledLink href='#' className='text-[#29668b] text-[13px] font-semibold inline-flex items-center'>
              {/* <FaPlusCircle className='mr-2' /> */}
              <span>
                <FaPlusCircle className='mr-2' />
              </span>
              Add new number
            </UnstyledLink>
          </p>
        </div>
      </div>
    </div>
  );
}
