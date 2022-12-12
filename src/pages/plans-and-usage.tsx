/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import { FaChevronRight } from 'react-icons/fa';

import PlanAndUsageData from '@/components/contents/PlanAndUsageData';
import DashboardLayout from '@/components/layout/Layout';
import ManageSubscriptionNavbar from '@/components/layout/ManageSubscriptionNavbar';
import PageHeader from '@/components/layout/PageHeader';
import ProfileSidebar from '@/components/layout/Sidebar';
import Seo from '@/components/Seo';
import TabGroup from '@/components/tabs/TabGroup';

const pages = [
  { name: 'Account', current: true },
];

const lists = [
  { id: 1, label: 'Data' },
  { id: 2, label: 'Airtime' },
  { id: 3, label: 'Other balance' },
  { id: 4, label: 'Play services' },
];

const panels = [
  { id: 1, content: <PlanAndUsageData /> },
  { id: 2, content: 'Data not available ! Airtime' },
  { id: 3, content: 'Data not available ! Other balance' },
  { id: 4, content: 'Data not available ! Play services' },
];

export default function PlansAndUsagePage() {

  return (
    <DashboardLayout>
      <Seo templateTitle='Plans & usage' />

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
              {/* Plan and Usage */}
              <PageHeader 
                page="plans-and-usage" 
                label="Plans & usage"
              />

              <ManageSubscriptionNavbar />

              <div className="flex flex-wrap -mx-4">
                {/* 1 */}
                <div className="w-full lg:w-1/2 px-[15px]">
                  <div className="flex flex-row bg-[#eadec4] p-2.5 rounded-[10px] mt-[30px] shadow-sm ">
                    <div className="basis-[10%]">
                      <img className="h-3.5 w-5 mt-2" src="images/icons-chart.png" alt="Chart" />
                    </div>

                    <div className="basis-[45%] leading-snug">
                      <p className="m-0 text-[#000000b3]">
                        <small className='text-[11.2px]'>Data Balance</small>
                      </p>
                      <h6 className="m-0">542/550 MB</h6>
                    </div>

                    <div className="basis-[45%] leading-snug">
                      <p className="m-0 text-[#000000b3]">
                        <small className='text-[11.2px]'>Bonus</small>
                      </p>
                      <h6 className="m-0">86/100 MB</h6>
                    </div>
                  </div>
                </div>

                {/* 2 */}
                <div className="w-full lg:w-1/2 px-[15px]">
                  <div className="flex flex-row bg-[#eadec4] p-2.5 rounded-[10px] mt-[30px] shadow-sm ">
                    <div className="basis-[10%]">
                      <img className="h-3.5 w-5 mt-2" src="images/icons-chart.png" alt="Chart" />
                    </div>

                    <div className="basis-[45%] leading-snug">
                      <p className="m-0 text-[#000000b3]">
                        <small className='text-[11.2px]'>Airtime Balance</small>
                      </p>
                      <h6 className="m-0">₦100</h6>
                    </div>

                    <div className="basis-[45%] leading-snug">
                      <p className="m-0 text-[#000000b3]">
                        <small className='text-[11.2px]'>Bonus</small>
                      </p>
                      <h6 className="m-0">₦50</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="my-4">
                <TabGroup
                  list={lists}
                  panel={panels}
                  variant="primary"
                />
              </div>
            </div>
          </div>

        </div>

      </main>
    </DashboardLayout>
  );
}
