/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';
import * as React from 'react';
import { FaChevronRight, FaCircle, FaPlusCircle } from 'react-icons/fa';

import Button from '@/components/buttons/Button';
import Toggle from '@/components/Toggle';


enum ListVariant {
  'data',
  'subscription',
  'expired',
}

type ListProps = {
  // list?: object;
  interval?: string;
  label?: string;
  purchaseDate?: string;
  renewalDate?: string;
  renewalStatus?: boolean;
  dataBalance?: string;
  dataTalktime?: string;
  subscriptionPrice?: string;
  expired?: boolean;
  variant?: keyof typeof ListVariant;
} & React.ComponentProps<any>;

const List: React.FunctionComponent<ListProps> = 
  (
    {
      // eslint-disable-next-line unused-imports/no-unused-vars
      children,
      interval,
      label,
      purchaseDate,
      renewalDate,
      renewalStatus,
      dataBalance,
      dataTalktime,
      subscriptionPrice,
      expired = false,
      variant,
    }
  ) => {
    const [enabled, setEnabled] = React.useState(renewalStatus)

    return (
      <>
        <div className={clsx(expired ? "bg-expired-subscription" : "bg-[#eef3f6]", "flex flex-row rounded-lg p-5 mt-[30px] relative")}>
          <div className="basis-[18%] lg:basis-[10%]">
            <div className="rounded-lg bg-[#e0e7ec] text-center py-5 px-2.5">
              <img
                className={clsx(variant == "data" ? "" : "hidden")}
                src="/images/logo.png"
                alt="logo"
              />
              <img
                className={clsx(variant == "subscription" ? "" : "hidden")}
                src="/images/netf.png"
                alt="logo"
              />
            </div>
          </div>
          <div className="basis-[90%] pl-[15px]">
            <div className={clsx(expired ? "text-white" : "text-dark", "flex flex-wrap -mx-4")}>
              <div className="basis-full lg:basis-1/3 px-4">
                <h6 className="m-0">{label}</h6>
                <p className={clsx(expired ? "m-0 text-white" : "m-0 text-[#000000b3]")}>
                  <small>Purchase date : {purchaseDate}</small>
                </p>
              </div>
              <div className={clsx(!subscriptionPrice ? "basis-1/3 lg:basis-1/6 px-4" : "basis-1/3 lg:basis-1/6 px-4 invisible")}>
                <p className={clsx(expired ? "m-0 text-white" : "m-0 text-[#000000b3]")}>
                  <small className='inline-flex items-center'>
                    <img
                      className="w-4 h-3 mr-[2px]"
                      src="/images/icons-chart.png"
                      alt="icon"
                    />
                    Data
                  </small>
                </p>
                <h6>{dataBalance}</h6>
              </div>
              <div className="basis-1/3 lg:basis-1/6 px-4">
                <p className={clsx(expired ? "m-0 text-white" : "m-0 text-[#000000b3]")}>
                  <small className='inline-flex items-center'>
                    <img
                      className="w-4 h-3 mr-[2px]"
                      src={variant == "data" ? "/images/icons-contact-us.png" : "/images/credit-card-scan.png"}
                      alt="icon"
                    />
                    {variant == "data" ? "Talktime" : "Price"}
                  </small>
                </p>
                <h6 className="m-0">{variant == "data" ? dataTalktime : subscriptionPrice}</h6>
              </div>
              <div className="basis-1/3 lg:basis-1/3 px-4">
                <p className={clsx(expired ? "m-0 text-white" : "m-0 text-[#000000b3]")}>
                  <small className='inline-flex items-center'>
                    <img
                      className="w-4 h-3 mr-[2px]"
                      src="/images/icons-calendar-event_2.png"
                      alt="icon"
                    />
                    Renews on
                  </small>
                </p>
                <h6 className="m-0">{renewalDate}</h6>
              </div>
            </div>
            <hr
              className='border-t-[1px] my-4' 
            />
            <div className="flex flex-col lg:flex-row lg:items-center">
              <div className="basis-[30%]">
                <Button variant='outline' className={clsx(expired ? 'text-primary border-primary' : 'text-[#29668b] border-[#29668b]', 'active:bg-none focus:bg-none text-[13px] py-0.5 px-2 rounded-[50px] border-[1px]')}>
                  <FaPlusCircle className='mr-2 h-3 w-3' />
                  Buy for others
                </Button>
              </div>
              <div className="basis-[40%]">
                <div className="flex items-center w-full">
                  <p className={clsx(expired ? "text-white" : "text-[#000000b3]", "mb-[2px] mr-2 text-sm inline-flex items-center")}>
                    <FaCircle className='mr-1 h-3 w-3 text-[#28a745!important]' />
                    Auto renewal status
                  </p>
                  <Toggle
                    enabled={enabled}
                    setEnabled={setEnabled}
                  />
                </div>
              </div>
              <div className="basis-[30%]">
                <Button variant={expired ? 'primary' : 'ghost'} className={clsx(expired ? 'text-dark text-base px-[30px] py-1.5' : 'text-[13px] text-[#29668b] py-0.5 px-2')}>
                  {expired ? 'Buy again' : 'Cancel subscriptions' }
                  <FaChevronRight className={clsx(expired ? 'hidden' : 'mr-2 h-3 w-3')} />
                </Button>
              </div>
            </div>
            <span className={clsx(expired ? "bg-[#e64c3c]" : "bg-dark", "absolute py-[3px] px-2.5 rounded-[50px] text-white text-sm left-[30px] -top-3")}>
              {!expired ? interval : "Expired"}
            </span>
            <span className="absolute flex justify-center items-center h-9 w-9 text-center bg-[#dfe6eb] top-0 right-0 rounded-bl-[22px] leading-8">
              <img
                className="w-[23px] h-[23px] align-middle"
                src="/images/i-con.png"
                alt="icon"
              />
            </span>
          </div>
        </div>
      </>
    );
  }

export default List;
