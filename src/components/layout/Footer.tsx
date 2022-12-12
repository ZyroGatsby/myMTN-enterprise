/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Disclosure, Transition } from '@headlessui/react';
import * as React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FiPlus } from 'react-icons/fi';

import Button from '@/components/buttons/Button';
import Banner from '@/components/layout/Banner';
import UnstyledLink from '@/components/links/UnstyledLink';

const navigation = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  companies: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
}

const socials = [
  {
    name: 'Facebook',
    href: '#',
    icon: FaFacebookF,
  },
  {
    name: 'Twitter',
    href: '#',
    icon: FaTwitter,
  },
  {
    name: 'Instagram',
    href: '#',
    icon: FaInstagram,
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: FaLinkedinIn,
  },
  {
    name: 'Youtube',
    href: '#',
    icon: FaYoutube,
  },
]

export default function Footer() {
  return (
    <div className='bg-dark pb-10'>
      <div className="container px-[15px] mx-auto">
        {/* Get in touch */}
        <div className="mt-12 pt-12">
          <div className="flex flex-wrap md:-mx-[15px]">
            <div className="flex md:flex-1 flex-col md:px-[15px]">
              <h5 className='text-xl text-[#ffffffb3]'>Get In Touch </h5>
              <p className='text-white text-[15px] pt-[5px]'> Get purchase notifications, new arrivals and exclusive offers & deal</p>
            </div>
            <div className="flex md:flex-1 md:px-[15px]">
              <form>
                <div className="mb-4">
                  <label className='text-white mb-2 text-base inline-block' htmlFor="exampleInputEmail1">Sign up for emails</label>
                  <input
                    type="text"
                    className="mt-0 bg-dark text-[17px] text-white
                      w-full
                      px-0.5 py-[6px]
                      border-0 border-b-[1px] border-white
                      focus:ring-0 focus:border-[#ffffff80]
                    "
                    placeholder="xyz@gmail.com"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Footer links Desktop */}
        <div className="hidden lg:block mt-12 py-[50px] border-y-[1px] border-white/20">

          <div className="pb-8 xl:grid xl:grid-cols-6 xl:gap-8">
            <div className="grid grid-cols-2 gap-8 lg:gap-4 xl:gap-8 xl:col-span-6">
              <div className="md:grid md:grid-cols-3 md:gap-8 lg:gap-4 xl:gap-8">
                <div>
                  <h3 className="text-[17px] font-semibold text-white tracking-wider">
                    Solutions
                    <span className='bg-primary w-11 block h-[2px] mt-1'></span>
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">

                    {navigation.solutions.map((item) => (
                      <li key={item.name}>
                        <UnstyledLink href={item.href} className="text-sm text-[#ffffff80]">
                          {item.name}
                        </UnstyledLink>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-[17px] font-semibold text-white tracking-wider">
                    Support
                    <span className='bg-primary w-11 block h-[2px] mt-1'></span>
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">

                    {navigation.support.map((item) => (
                      <li key={item.name}>
                        <UnstyledLink href={item.href} className="text-sm text-[#ffffff80]">
                          {item.name}
                        </UnstyledLink>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-[17px] font-semibold text-white tracking-wider">
                    Support
                    <span className='bg-primary w-11 block h-[2px] mt-1'></span>
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">

                    {navigation.support.map((item) => (
                      <li key={item.name}>
                        <UnstyledLink href={item.href} className="text-sm text-[#ffffff80]">
                          {item.name}
                        </UnstyledLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-3 md:gap-8 lg:gap-4 xl:gap-8">
                <div>
                  <h3 className="text-[17px] font-semibold text-white tracking-wider">
                    Company
                    <span className='bg-primary w-11 block h-[2px] mt-1'></span>
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">

                    {navigation.company.map((item) => (
                      <li key={item.name}>
                        <UnstyledLink href={item.href} className="text-sm text-[#ffffff80]">
                          {item.name}
                        </UnstyledLink>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-[17px] font-semibold text-white tracking-wider">
                    Legal
                    <span className='bg-primary w-11 block h-[2px] mt-1'></span>
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">

                    {navigation.legal.map((item) => (
                      <li key={item.name}>
                        <UnstyledLink href={item.href} className="text-sm text-[#ffffff80]">
                          {item.name}
                        </UnstyledLink>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-[17px] font-semibold text-white tracking-wider mb-2">
                    Feedback
                    <span className='bg-primary w-11 block h-[2px] mt-1'></span>
                  </h3>
                  <p className='text-[#ffffff80] pt-[14px] text-[15px] leading-snug mb-4'>Your Comments help <br />us improve our <br /> website and services</p>
                  <Button variant='primary' type="submit" className="text-[15px] rounded-[21px] py-[6px] px-[15px]">Leave feedback</Button>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer links Mobile */}
        <div className="block lg:hidden mt-12 lg:border-y-[1px] border-white/20">

          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between border-t-[1px] border-white/20 pl-2 pt-3 pb-4 cursor-pointer text-left text-sm font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                  <span className='text-[15px]'>Quick links</span>
                  <FiPlus
                    className={`${
                      open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-white`}
                  />
                </Disclosure.Button>

                <Transition
                  enter="transition duration-25 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-25 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >

                  <Disclosure.Panel className="px-4 pb-2 text-sm text-[#ffffff80]">
                    <ul role="list" className="space-y-2">
                      {navigation.support.map((item) => (
                        <li key={item.name}>
                          <UnstyledLink href={item.href} className="text-sm">
                            {item.name}
                          </UnstyledLink>
                        </li>
                      ))}
                    </ul>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>

          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between border-t-[1px] border-white/20 pl-2 pt-3 pb-4 cursor-pointer text-left text-sm font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                  <span className='text-[15px]'>Entertainment</span>
                  <FiPlus
                    className={`${
                      open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-white`}
                  />
                </Disclosure.Button>

                <Transition
                  enter="transition duration-25 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-25 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >

                  <Disclosure.Panel className="px-4 pb-2 text-sm text-[#ffffff80]">
                    <ul role="list" className="space-y-2">
                      {navigation.support.map((item) => (
                        <li key={item.name}>
                          <UnstyledLink href={item.href} className="text-sm">
                            {item.name}
                          </UnstyledLink>
                        </li>
                      ))}
                    </ul>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>

          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between border-t-[1px] border-white/20 pl-2 pt-3 pb-4 cursor-pointer text-left text-sm font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                  <span className='text-[15px]'>Account services</span>
                  <FiPlus
                    className={`${
                      open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-white`}
                  />
                </Disclosure.Button>

                <Transition
                  enter="transition duration-25 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-25 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >

                  <Disclosure.Panel className="px-4 pb-2 text-sm text-[#ffffff80]">
                    <ul role="list" className="space-y-2">
                      {navigation.support.map((item) => (
                        <li key={item.name}>
                          <UnstyledLink href={item.href} className="text-sm">
                            {item.name}
                          </UnstyledLink>
                        </li>
                      ))}
                    </ul>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>

          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between border-t-[1px] border-white/20 pl-2 pt-3 pb-4 cursor-pointer text-left text-sm font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                  <span className='text-[15px]'>Help & Support</span>
                  <FiPlus
                    className={`${
                      open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-white`}
                  />
                </Disclosure.Button>

                <Transition
                  enter="transition duration-25 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-25 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >

                  <Disclosure.Panel className="px-4 pb-2 text-sm text-[#ffffff80]">
                    <ul role="list" className="space-y-2">
                      {navigation.support.map((item) => (
                        <li key={item.name}>
                          <UnstyledLink href={item.href} className="text-sm">
                            {item.name}
                          </UnstyledLink>
                        </li>
                      ))}
                    </ul>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>

          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between border-t-[1px] border-white/20 pl-2 pt-3 pb-4 cursor-pointer text-left text-sm font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                  <span className='text-[15px]'>MTN Nigeria</span>
                  <FiPlus
                    className={`${
                      open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-white`}
                  />
                </Disclosure.Button>

                <Transition
                  enter="transition duration-25 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-25 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >

                  <Disclosure.Panel className="px-4 pb-2 text-sm text-[#ffffff80]">
                    <ul role="list" className="space-y-2">
                      {navigation.support.map((item) => (
                        <li key={item.name}>
                          <UnstyledLink href={item.href} className="text-sm">
                            {item.name}
                          </UnstyledLink>
                        </li>
                      ))}
                    </ul>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>

          <div className="flex w-full justify-between border-t-[1px] border-white/20 pl-2 pt-3 pb-4 cursor-pointer text-left text-sm font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
            <span className='text-[15px]'>Feedback</span>
            <FiPlus
              className='h-5 w-5 text-white'
            />
          </div>
          <p className='text-[#ffffff80] pt-[14px] text-[15px] leading-snug mb-4'>Your Comments help <br />us improve our <br /> website and services</p>
          <Button variant='primary' type="submit" className="text-[15px] rounded-[21px] py-[6px] px-[15px]">Leave feedback</Button>
        </div>

        {/* Socials */}
        <div className="pt-[15px] lg:py-12 pb-4">
          <div className="flex flex-col md:flex-row flex-wrap md:-mx-[15px]">
            <div className="flex md:flex-1 flex-col md:px-[15px]">
              <div className="flex flex-col lg:flex-row items-center mb-[30px]">
                <div className="mr-[15px]">
                  <img src="images/logo-ft.png" alt="MTN logo" />
                </div>
                <div className="text-[13px] max-w-xs text-white/50 leading-normal"> © 2022 MTN Nigeria Communications PLC, All rights reserved. Privacy Policy &
                  Data Protection 
                </div>
              </div>
              <div>
                <ul className='divider-horizontal'>
                  <li>
                    <UnstyledLink className='text-[#ffffffab] hover:text-[#ffffff80] text-[13px] lg:text-[15px] float-left mr-5' href="#"> Privacy policy & Data protection</UnstyledLink>
                  </li>
                  <li>
                    <UnstyledLink className='text-[#ffffffab] hover:text-[#ffffff80] text-[13px] lg:text-[15px] float-left mr-5' href="#">Accessibility</UnstyledLink>
                  </li>
                  <li>
                    <UnstyledLink className='text-[#ffffffab] hover:text-[#ffffff80] text-[13px] lg:text-[15px] float-left mr-5' href="#">Sitemap</UnstyledLink>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex md:flex-1 flex-col md:px-[15px]">
              <div className="mt-[10px]">
                <div className="flex justify-center lg:justify-end space-x-2">
                  {socials.map((item) => (
                    <a key={item.name} href={item.href} className="text-dark bg-white rounded-full p-2 hover:bg-gray-400">
                      <span className="sr-only">{item.name}</span>
                      <item.icon className="h-5 w-5" aria-hidden="true" />
                    </a>
                  ))}
                </div>
                <div className="flex sm:justify-center lg:block mt-[20px] lg:mt-[60px] text-right text-[#ffffff80]">
                  <div className="lg:float-right relative mx-auto">
                    <label htmlFor="country" className="hidden text-sm font-medium text-gray-700">
                      Country
                    </label>
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="mt-1 block bg-dark border-[1px] border-gray-300 rounded-[18px] shadow-sm py-2 px-3 focus:outline-none sm:text-sm w-36 truncate"
                    >
                      <option>Nigeria</option>
                      <option>Afghanistan</option>
                      <option>Benin</option>
                      <option>Botswana</option>
                      <option>Guinea Bissau</option>
                      <option>Cameroon</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <Banner />
    </div>
  );
}
