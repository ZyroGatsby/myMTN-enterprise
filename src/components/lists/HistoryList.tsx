/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';
import * as React from 'react';

import Button from '@/components/buttons/Button';



type HistoryListProps = {
  type?: string;
  name?: string;
  day?: string;
  date?: string;
  amount?: string;
  description?: string;
  paidVia?: string;
  transactionId?: string;
  expired?: boolean;
} & React.ComponentProps<any>;

const HistoryList: React.FunctionComponent<HistoryListProps> = 
  (
    {
      // eslint-disable-next-line unused-imports/no-unused-vars
      children,
      type,
      name,
      day,
      date,
      amount,
      description,
      paidVia,
      transactionId,
      expired = false,
    }
  ) => {

    return (
      <>
        <div className="bg-[#eef3f6] flex flex-row rounded-lg p-5 mt-[30px] relative">
          <div className="basis-full pl-[15px] flex flex-wrap -mx-4">
            <div className="basis-full md:basis-1/12 px-4">
              <p className="m-0 text-[#000000b3]">
                <small>{day}</small>
              </p>
              <h6 className="m-0 text-dark">{date}</h6>
            </div>
            <div className="basis-full lg:basis-1/3 px-4">
              <div className="flex flex-row items-center">
                <div className="block">
                  <span
                    className='bg-[#006891] text-white h-10 w-10 text-center leading-10 rounded-[50%] inline-block mr-[10px]'
                  >{name.charAt(0)}</span>
                </div>
                <div className="block">
                  <p className="m-0 text-[#000000b3]">
                    <small>{description}</small>
                  </p>
                  <Button className='text-[#29668b] border-[#29668b] text-[13px] rounded-[50px] py-[2px] px-2' variant='outline'>{description.split(' ')[0]} again</Button>
                </div>
              </div>
            </div>
            <div className="basis-[50%] md:basis-1/3 lg:basis-1/6 px-4">
              <p className="m-0 text-[#000000b3]">
                <small className='inline-flex items-center'>
                  <img
                    className="w-4 h-3 mr-[2px]"
                    src="/images/icons-calendar-event_2.png"
                    alt="icon"
                  />
                  Amount
                </small>
              </p>
              <h6 className="m-0 text-dark">{amount}</h6>
            </div>
            <div className="basis-[50%] md:basis-1/3 lg:basis-1/6 px-4">
              <p className="m-0 text-[#000000b3]">
                <small className='inline-flex items-center'>
                  <img
                    className="w-3 h-3 mr-[2px]"
                    src="/images/pay-bill.png"
                    alt="icon"
                  />
                  Paid via
                </small>
              </p>
              <h6 className="m-0 text-dark">{paidVia}</h6>
            </div>
            <div className="basis-full md:basis-1/3 lg:basis-1/4 px-4">
            <p className="m-0 text-[#000000b3]">
                <small className='inline-flex items-center'>
                  <img
                    className="w-3 h-3 mr-[2px]"
                    src="/images/icons-transaction.png"
                    alt="icon"
                  />
                  Transaction id
                </small>
              </p>
              <h6 className="m-0 text-dark">{transactionId}</h6>
            </div>
          </div>
            <span className={clsx(expired ? "bg-[#e64c3c]" : "bg-dark", "absolute py-[3px] px-2.5 rounded-[50px] text-white text-sm left-[30px] -top-3")}>
              {type}
            </span>
        </div>
      </>
    );
  }

export default HistoryList;
