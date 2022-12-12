/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import Button from '@/components/buttons/Button';

export default function Content() {
  return (
    <div className="text-base">
      {/* A */}
      <div className="flex flex-wrap space-y-2 lg:space-y-0 -mx-4">
        {/* 1 - Main bundle details */}
        <div className="w-full lg:w-1/2 px-[15px]">
          <h6 className="mb-4">Main bundle details</h6>
          <div className="border-[1px] rounded-xl p-[15px] bg-white relative">
            <h6 className="text-[1rem] mb-2">Monthly bundle details</h6>
            <div className="flex">
              {/* ** */}
              <div className="basis-[40%] text-center">
                <div className="mx-auto w-[100%]">
                  <div className="mb-2.5 bg-sc-guage rounded-tr-[150px] rounded-tl-[150px] text-center overflow-hidden relative h-[100px]">
                    <div className="absolute top-[20px] right-5 left-5 h-20 bg-white rounded-tr-[150px] rounded-tl-[150px]"></div>
                    <span className="absolute bottom-0 left-[30%]">
                      <img className="h-12 w-[42px]" src="images/needle@2x.png" alt="Chart" />
                    </span>
                  </div>
                </div>
                <h6 className="text-[#b2b2b2] ">
                  <span className='text-[#ff9c33]'>12</span>
                  /20 GB
                </h6>
                <p className="m-0 text-sm">Remaining</p>
              </div>

              {/* ** */}
              <div className='basis-[60%] pl-2.5'>
                <p className="m-o">
                  <small>Expires</small>
                </p>
                <p className='mb-4'>12th Jun 2022</p>
                <p className="m-o text-sm">Add-ons for this bundle</p>
                <h6 className="m-0">Youtube Night 0/20 GB</h6>
              </div>
            </div>

            <p className="absolute top-[15px] right-0 py-[2px] px-[15px] bg-[#e64c3c] text-white rounded-tl-[50px] rounded-bl-[50px] text-sm">Expired</p>
          </div>
        </div>
        
        {/* 2 - Bonus bundle details */}
        <div className="w-full lg:w-1/2 px-[15px]">
          <h6 className="mb-4">Bonus bundle details</h6>
          <div className="border-[1px] rounded-xl p-[15px] bg-white relative">
            <h6 className="text-[1rem] mb-2">Pulse bonus</h6>
            <div className="flex">
              {/* ** */}
              <div className="basis-[40%] text-center">
                <div className="mx-auto w-[100%]">
                  <div className="mb-2.5 bg-sc-guage rounded-tr-[150px] rounded-tl-[150px] text-center overflow-hidden relative h-[100px]">
                    <div className="absolute top-[20px] right-5 left-5 h-20 bg-white rounded-tr-[150px] rounded-tl-[150px]"></div>
                    <span className="absolute bottom-0 left-[30%]">
                      <img className="h-12 w-[42px]" src="images/needle@2x.png" alt="Chart" />
                    </span>
                  </div>
                </div>
                <h6 className="text-[#b2b2b2] ">
                  <span className='text-[#ff9c33]'>12</span>
                  /20 GB
                </h6>
                <p className="m-0 text-sm">Remaining</p>
              </div>

              {/* ** */}
              <div className='basis-[60%] pl-2.5'>
                <p className="mb-0 mt-[125px] text-[#b91f1f] text-sm inline-flex">
                  <span className="mr-2">
                    <img className="h-[16px] w-[19px]" src="images/icons-mike.png" alt="Microphone" />
                  </span>
                  Expires on 31st Jan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* B */}
      <div className="flex flex-wrap -mx-4">
        {/* 1 - Goodybag social bundle */}
        <div className="w-full lg:w-1/2 px-[15px]">
          <div className="bg-[#29668b] rounded-xl mt-[30px]">
            <div className="p-4">
              <h6 className="text-white mb-4">GoodyBag social bundle </h6>
              <div className="flex flex-wrap -mx-4">
                {/* 1a */}
                <div className="w-1/2 px-[15px] border-r-[1px] border-[#dee2e6]">
                  <p className="text-white m-0 text-sm">Unused</p>
                  <h6 className="text-white ">
                    <span className='text-primary'>12</span>
                    /20 GB
                  </h6>
                </div>

                {/* 1b */}
                <div className="w-1/2 px-[15px] text-white">
                  <p className=" m-0 text-sm">Rollover date</p>
                  <h6 className="m-o ">17th Jun 2022</h6>
                </div>
              </div>
            </div>
            <div className="flex bg-[#1a4b69] items-center rounded-bl-[15px] rounded-br-[15px] p-[10px]">
              <div className="basis-[10%]">
                <img className="h-[16px] w-[19px]" src="images/icons-mike-white.png" alt="Microphone white variant" />
              </div>
              <div className="basis-[70%]">
                <p className="m-0 text-white text-sm tracking-tight">
                  You can rollover the data by 
                  <br />
                  purchasing the same bundle
                </p>
              </div>
              <div className="basis-[25%]">
                <Button className='mx-0 text-[13px] py-[5px] px-[10px] rounded-[50px] tracking-tight'>
                  Buy now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
