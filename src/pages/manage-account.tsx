/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import { FaChevronRight } from 'react-icons/fa';

import DashboardLayout from '@/components/layout/Layout';
import PageHeader from '@/components/layout/PageHeader';
import ProfileSidebar from '@/components/layout/Sidebar';
import Seo from '@/components/Seo';

const pages = [
  { name: 'Account', current: true },
];

export default function ManageAccountPage() {
  return (
    <DashboardLayout>
      <Seo templateTitle='Manage Account' />

      {/* Content */}
      <main className='bg-gradient-to-b from-background to-white'>
        <div className='container mx-4 md:mx-auto pt-[15px]'>
          {/* Breadcrumb */}
          <nav className="flex" aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-4 text-[13px]">
              <li>
                <div>
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <span className="">Home</span>
                  </a>
                </div>
              </li>
              {pages.map((page) => (
                <li key={page.name}>
                  <div className="flex items-center">
                    <FaChevronRight className="flex-shrink-0 h-2 w-2 text-gray-400" aria-hidden="true" />
                    <p
                      className="ml-2 text-[13px] font-medium text-dark hover:text-gray-700"
                      aria-current={page.current ? 'page' : undefined}
                    >
                      {page.name}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </nav>

          {/* Content */}
          <div className="flex flex-col md:flex-row sm:border-t-[1px] border-[#dddddd] mt-[30px]">
            <div className="basis-[33%] lg:basis-[30%] border-r-0 md:border-r-[1px] border-[#dddddd] pt-[15px] pr-0 md:pr-[10px]">
              {/* Profile Column */}
              <ProfileSidebar />
            </div>
            <div className="basis-4/5 pt-[15px] pl-0 md:pl-[15px]">
              {/* Manage Account */}
              <PageHeader 
                page="manage-account" 
                label="Manage Account"
              />

              <div className="flex items-center justify-center w-full">
                <div className="w-full flex flex-col justify-center mx-auto">
                  <div className="space-y-4"></div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </main>
    </DashboardLayout>
  );
}
