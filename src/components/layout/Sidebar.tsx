/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';
import { useRouter } from 'next/router';
import * as React from 'react';
import { FaPencilAlt } from 'react-icons/fa';

import Button from '@/components/buttons/Button';
import UnstyledLink from '@/components/links/UnstyledLink';

const links = [
  { href: '/manage-account', label: 'Manage account', icon: "images/m-icons-my-account.png"  },
  { href: '#', label: 'Rewards rooms', icon: "images/icons-briefcase.png"  },
  { href: '/plans-and-usage', label: 'Plan & usage', icon: 'images/icons-usage.png' },
  { href: '/manage-subscriptions', label: 'Manage subscriptions', icon: 'images/icons-subscription-profile.png' },
  { href: '#', label: 'Manage numbers', icon: 'images/icons-manage-numbers-profile.png' },
  { href: '/transaction-history', label: 'Transaction history', icon: 'images/icons-history.png' },
];

const orderLinks = [
  { href: '#', label: 'My orders', icon: "images/cart.png"  },
  { href: '#', label: 'My wishlist', icon: "images/icons-briefcase.png"  },
  { href: '/manage-address', label: 'Manage address', icon: 'images/icons-usage.png' },
];

const paymentLinks = [
  { href: '/manage-payment-method', label: 'Manage payment methods', icon: "images/icons-payments.png"  },
];

const simServiceLinks = [
  { href: '#', label: 'Know your PUK', icon: "images/icons-puk.png"  },
  { href: '#', label: '4G sim upgrade', icon: "images/icons-manage-numbers.png"  },
];

const otherServiceLinks = [
  { href: '#', label: 'Track requests', icon: "images/icons-tracking.png"  },
  { href: '#', label: 'Scan', icon: "images/icons-scan.png"  },
];

export default function ProfileSidebar() {
  const router = useRouter();
  
  return (
    <>
      {/* Profile Column */}
      <div className="p-5 bg-gradient-to-br from-[#091d1d] to-[#0e2020] rounded-2xl">
        <div className="flex items-center mt-0">
          <img
            className="h-12 w-12 rounded-full"
            src="/images/user-profile.png"
            alt=""
          />
          <div className="flex mt-1">
            <div className="pl-[10px]">
              <p className="text-white text-[11.2px] leading-tight lg:tracking-normal">
                <span className="italics">Y'ello</span>
                , Abubakar
              </p>
              <h6 className="text-primary inline-flex items-center mb-1 tracking-tight lg:tracking-normal">
                Prestige Gold
                <span>
                  <img
                    className="h-[14px] w-[15px] mx-1 lg:mx-2"
                    src="/images/crown.png"
                    alt=""
                  />
                </span>
              </h6>
              <p className="text-white text-sm md:inline-flex items-center tracking-tight">
                Prestige Gold
                <Button variant='ghost' className='px-0 focus:bg-none'>
                  <FaPencilAlt className="h-3 w-3 mx-2" />
                </Button>
              </p>
            </div>
          </div>
        </div>
        <div className="flex mt-5">
          <div className="pr-[10px]">
            <img
              className="h-6 w-6 rounded-full"
              src="/images/icons-email.png"
              alt=""
            />
          </div>
          <div className='text-white text-sm'>
            <p className=''>abubakar.me@gmail.com</p>
            <p>
              <small>Email verified</small>
            </p>
          </div>
        </div>
      </div>

      <div className="hidden md:block mt-[30px]">
        {/* Profile Menus */}
        <h5 className='text-dark text-lg'>My account</h5>
        <ul>
          {links.map(({ href, label, icon }) => (
            <li key={`${href}${label}`}>
              <UnstyledLink
                href={href}
                className={clsx(router.pathname == href ? 'items-center group flex py-1 text-[16px] text-[#006891]' : 'items-center group flex py-1 text-[16px] text-dark hover:text-dark/50')}
              >
                <img 
                  className="mr-3 h-[18px] w-[18px]"
                  aria-hidden="true"
                  src={icon} alt="my account icon" 
                />
                {label}
              </UnstyledLink>
            </li>
          ))}
        </ul>

        <hr className='border-t-[1px] border-[#dddddd] my-4'/>

        {/* Orders Menus */}
        <h5 className='text-dark text-lg'>Orders</h5>
        <ul>
          {orderLinks.map(({ href, label, icon }) => (
            <li key={`${href}${label}`}>
              <UnstyledLink
                href={href}
                className={clsx(router.pathname == href ? 'items-center group flex py-1 text-[16px] text-[#006891]' : 'items-center group flex py-1 text-[16px] text-dark hover:text-dark/50')}
              >
                <img 
                  className="mr-3 h-[18px] w-[18px]"
                  aria-hidden="true"
                  src={icon} alt="my account icon" 
                />
                {label}
              </UnstyledLink>
            </li>
          ))}
        </ul>

        <hr className='border-t-[1px] border-[#dddddd] my-4'/>

        {/* Payment Menu */}
        <h5 className='text-dark text-lg'>Payments</h5>
        <ul>
          {paymentLinks.map(({ href, label, icon }) => (
            <li key={`${href}${label}`}>
              <UnstyledLink
                href={href}
                className={clsx(router.pathname == href ? 'items-center group flex py-1 text-[16px] text-[#006891]' : 'items-center group flex py-1 text-[16px] text-dark hover:text-dark/50')}
              >
                <img 
                  className="mr-3 h-[18px] w-[18px]"
                  aria-hidden="true"
                  src={icon} alt="my account icon" 
                />
                {label}
              </UnstyledLink>
            </li>
          ))}
        </ul>

        <hr className='border-t-[1px] border-[#dddddd] my-4'/>

        {/* SIM service Menu */}
        <h5 className='text-dark text-lg'>SIM services</h5>
        <ul>
          {simServiceLinks.map(({ href, label, icon }) => (
            <li key={`${href}${label}`}>
              <UnstyledLink
                href="#"
                className={clsx(router.pathname == href ? 'items-center group flex py-1 text-[16px] text-[#006891]' : 'items-center group flex py-1 text-[16px] text-dark hover:text-dark/50')}
              >
                <img 
                  className="mr-3 h-[18px] w-[18px]"
                  aria-hidden="true"
                  src={icon} alt="my account icon" 
                />
                {label}
              </UnstyledLink>
            </li>
          ))}
        </ul>

        <hr className='border-t-[1px] border-[#dddddd] my-4'/>

        {/* Other service Menu */}
        <h5 className='text-dark text-lg'>Other services</h5>
        <ul>
          {otherServiceLinks.map(({ href, label, icon }) => (
            <li key={`${href}${label}`}>
              <UnstyledLink
                href="#"
                className={clsx(router.pathname == href ? 'items-center group flex py-1 text-[16px] text-[#006891]' : 'items-center group flex py-1 text-[16px] text-dark hover:text-dark/50')}
              >
                <img 
                  className="mr-3 h-[18px] w-[18px]"
                  aria-hidden="true"
                  src={icon} alt="my account icon" 
                />
                {label}
              </UnstyledLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
