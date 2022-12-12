/* eslint-disable @next/next/no-img-element */
import { Dialog, Menu, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import * as React from 'react';
import { FaTimes } from 'react-icons/fa';
import { FiChevronDown, FiSearch } from 'react-icons/fi';

import Button from '@/components/buttons/Button';
import UnstyledLink from '@/components/links/UnstyledLink';

import MTN from '~/Logo.svg';

const links = [
  { href: '/', label: 'Shop' },
  { href: '/', label: 'Play' },
  { href: '/', label: 'mPulse' },
  { href: '/', label: 'Help' },
  { href: '/', label: 'Offers' },
  // { href: '/manage-account', label: 'Manage Account' },
];

const linksDesktop = [
  { href: '/', label: 'Shop' },
  { href: '/', label: 'Play' },
  { href: '/', label: 'Business' },
  { href: '/', label: 'Offers' },
  // { href: '/manage-account', label: 'Manage Account' },
];

const exploreMtnLinks = [
  { href: '#', label: 'About MTN' },
  { href: '#', label: 'Investors' },
  { href: '#', label: 'Foundation' },
  { href: '#', label: 'Careers' },
  { href: '#', label: 'Events' },
];

export default function Header(): JSX.Element {
  const [mode, setMode] = React.useState<'dark' | 'light'>('light');
  function toggleMode() {
    return mode === 'dark' ? setMode('light') : setMode('dark');
  }
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [onTop, setOnTop] = React.useState(true);

  const handleScroll = () => {
    if (onTop !== (window.pageYOffset === 0)) {
      setOnTop(window.pageYOffset === 0);
    }
  };

  // const HandleSignOut = (e: { preventDefault: () => void; }) => {
  //   e.preventDefault()
  //   setCreateOrderSlideOverCloseFunction()
  //   router.push(href)
  // }

  // const HandleBackToWebsite = (e: { preventDefault: () => void; }) => {
  //   e.preventDefault()
  //   setCreateOrderSlideOverCloseFunction()
  //   router.push(href)
  // }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <div
      className={`${
        onTop ? '' : 'shadow-md'
      } sticky top-0 z-50 min-h-full bg-background`}
    >
      {/* Navigation */}
      <header className="relative z-10">
        <nav aria-label="Top">
          {/* Top navigation */}
          <div className="">
            <div className="container mx-auto h-10 flex items-center justify-between">
              <div></div>

              <div className="flex items-center space-x-4">
                <a href="#" className="text-[12px] font-medium text-[#000000cc]">
                  Help
                </a>
                <a href="#" className="text-[12px] font-medium text-[#000000cc]">
                  mPulse
                </a>
                {/* Dropdown */}
                <Menu as="div" className="relative flex-shrink-0">
                  <div>
                    <Menu.Button className="flex text-sm text-[#000000cc] focus:outline-none focus:ring-0 items-center">
                      <span className="text-[12px] mr-1.5">Explore MTN</span>
                      <FiChevronDown/>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={React.Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 my-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                      {exploreMtnLinks.map(({ href, label }) => (
                        <Menu.Item key={`${href}${label}`} >
                          {({ active }) => (
                            <a
                              href={href}
                              className={clsx(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-[13px] mt-[10px] text-dark')}
                            >
                              {label}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
                <Button 
                  onClick={toggleMode}
                  variant='ghost'
                  className='bg-transparent border-0 focus:border-0 focus:bg-transparent active:bg-transparent px-0'
                >
                  <img src="images/noun-moon-1780157.png" alt="Dark toggle icon" />
                </Button>
                <Button
                  onClick={toggleMode}
                  className='text-[12px]'
                  variant={mode === 'dark' ? 'light' : 'dark'}
                >
                  {mode === 'dark' ? 'light' : 'dark'}
                </Button>
              </div>
            </div>
          </div>

          <Transition.Root show={open} as={React.Fragment}>
            <Dialog as="div" className="relative z-50 lg:hidden" onClose={setOpen}>
              <Transition.Child
                as={React.Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              {/* <div className="fixed inset-0 z-50 flex"> */}
              <div className="fixed inset-y-0 right-0 flex w-full pl-16 sm:pl-20">
                <Transition.Child
                  as={React.Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="relative flex w-screen flex-col overflow-y-auto bg-white shadow-xl pt-10">
                    <div className="flex px-[30px] pt-5 pb-2">
                      <Button
                        variant='dark'
                        className="-m-2 inline-flex items-center justify-center p-2 text-white hover:text-gray-500 focus:outline-none focus:ring-0"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close menu</span>
                        <FaTimes className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* links */}
                    <nav className='flex flex-col px-[30px] py-[15px]'>
                      <ul className='flex flex-col items-start space-y-6'>
                        {links.map(({ href, label }) => (
                          <li key={`${href}${label}`}>
                            <UnstyledLink 
                              href={href} 
                              className={clsx(router.pathname == href ? 'text-primary text-[15px] font-semibold underline' : 'hover:text-gray-600 text-[15px]')}>
                              {label}
                            </UnstyledLink>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </Dialog.Panel>
                </Transition.Child>
              </div>


            </Dialog>
          </Transition.Root>

          {/* Secondary navigation */}
          {/* <nav className={clsx(open ? 'hidden' : 'block')}> */}
          <nav>
            <div className="container mx-auto bg-white rounded-lg px-3 md:px-[15px]">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <div className='flex flex-shrink-0 items-center pt-1'>
                    <MTN className='text-7xl' />
                  </div>
                  <div className="hidden lg:ml-6 lg:flex lg:space-x-6">
                    {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                    {linksDesktop.map(({ href, label }) => (
                      <UnstyledLink 
                        href={href}
                        key={`${href}${label}`}
                        className={clsx(router.pathname == href ? 'text-dark border-[#006891] inline-flex items-center px-1 pt-1 border-b-2 text-[15px] font-medium' : 'border-transparent text-dark hover:border-[#006891] inline-flex items-center px-1 pt-1 border-b-2 text-[15px] font-medium')}>
                        {label}
                      </UnstyledLink>
                    ))}
                  </div>
                </div>
                <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
                  <div className="max-w-md w-full lg:max-w-[203.5px]">
                    <label htmlFor="search" className="sr-only">
                      Search
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center cursor-pointer">
                        <FiSearch className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </div>
                      <input
                        id="search"
                        name="search"
                        className="block w-full pl-10 pr-3 py-2 border focus:border-0 border-gray-300 rounded-[25px] leading-5 bg-background focus:bg-white focus:ring-0 text-[13px]"
                        placeholder="Search Products"
                        type="search"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center lg:hidden">
                  <button
                    type="button"
                    className="flex-shrink-0 bg-white px-2 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span className="sr-only">View cart</span>
                    {/* <FiShoppingCart className="h-6 w-6" aria-hidden="true" /> */}
                    <img className="h-6 w-6 mr-4" src="images/cart.svg" alt="Cart" />
                  </button>

                  {/* Mobile menu button */}
                  <Button onClick={() => setOpen(true)} variant='dark' className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-none=">
                    <span className="sr-only">Open main menu</span>
                    <img className="h-5 w-5" src="images/toggle.svg" alt="Mobile Menu" />
                  </Button>
                </div>

                {/* Desktop view links */}
                <div className="hidden lg:ml-4 lg:flex lg:items-center">
                  <button
                    type="button"
                    className="flex-shrink-0 bg-white px-2 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    <span className="sr-only">View cart</span>
                    {/* <FiShoppingCart className="h-6 w-6" aria-hidden="true" /> */}
                    <img className="h-6 w-6" src="images/cart.svg" alt="Cart" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-4 relative flex-shrink-0">
                    <div>
                      <Menu.Button className="bg-white rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                        <img
                          className="h-10 w-10 rounded-full"
                          src="/images/user-profile.png"
                          // src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                        <span className="hidden lg:block text-[13px] px-3 text-left leading-snug w-[100px] truncate">
                          Abubakar
                          <span className="hidden lg:block text-[11px] text-[#00000099]">0806 677 6478 </span>
                        </span>
                        <FiChevronDown/>
                      </Menu.Button>
                    </div>
                    <Transition
                      as={React.Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <UnstyledLink
                              href="#"
                              className={clsx(active ? 'bg-gray-100' : '', 'items-center group flex px-4 py-2 text-[13px] text-dark hover:text-[#006891]')}
                            >
                              <img 
                                className="mr-3 h-4 w-4"
                                aria-hidden="true"
                                src="images/m-icons-my-account.png" alt="my account icon" 
                              />
                              Manage account
                            </UnstyledLink>
                          )}
                        </Menu.Item>

                        <Menu.Item>
                          {({ active }) => (
                            <UnstyledLink
                              href="#"
                              className={clsx(active ? 'bg-gray-100' : '', 'items-center group flex px-4 py-2 text-[13px] text-dark hover:text-[#006891]')}
                            >
                              <img 
                                className="mr-3 h-4 w-4"
                                aria-hidden="true"
                                src="images/m-icons-cart.png" alt="Dark toggle icon" 
                              />
                              My orders
                            </UnstyledLink>
                          )}
                        </Menu.Item>

                        <Menu.Item>
                          {({ active }) => (
                            <UnstyledLink
                              href="#"
                              className={clsx(active ? 'bg-gray-100' : '', 'items-center group flex px-4 py-2 text-[13px] text-dark hover:text-[#006891]')}
                            >
                              <img 
                                className="mr-3 h-4 w-4"
                                aria-hidden="true"
                                src="images/m-icons-subscription.png" alt="Dark toggle icon" 
                              />
                              My subscriptions
                            </UnstyledLink>
                          )}
                        </Menu.Item>

                        <Menu.Item>
                          {({ active }) => (
                            <UnstyledLink
                              href="#"
                              className={clsx(active ? 'bg-gray-100' : '', 'items-center group flex px-4 py-2 text-[13px] text-dark hover:text-[#006891]')}
                            >
                              <img 
                                className="mr-3 h-4 w-4"
                                aria-hidden="true"
                                src="images/m-icons-wishlist.png" alt="Dark toggle icon" 
                              />
                              My wishlist
                            </UnstyledLink>
                          )}
                        </Menu.Item>

                        <Menu.Item>
                          {({ active }) => (
                            <UnstyledLink
                              href="#"
                              className={clsx(active ? 'bg-gray-100' : '', 'items-center group flex px-4 py-2 text-[13px] text-dark hover:text-red-500')}
                            >
                              <img 
                                className="mr-3 h-4 w-4"
                                aria-hidden="true"
                                src="images/m-icons-borrow-airtime.png" alt="Dark toggle icon" 
                              />
                              Logout
                            </UnstyledLink>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </nav>
        </nav>
      </header>

    </div>
  );
}
