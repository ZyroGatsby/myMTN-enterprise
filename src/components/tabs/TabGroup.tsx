/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import { Tab } from '@headlessui/react';
import clsx from 'clsx';
import * as React from 'react';

import clsxm from '@/lib/clsxm';

import Button from '@/components/buttons/Button';

enum TabVariant {
  'primary',
  'secondary',
}

type TabGroupProps = {
  // list?: object;
  list?: string;
  panel?: object;
  // panel?: string;
  variant?: keyof typeof TabVariant;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
} & React.ComponentProps<any>;

const TabGroup: React.FunctionComponent<TabGroupProps> = 
  (
    {
      // eslint-disable-next-line unused-imports/no-unused-vars
      children,
      list,
      panel,
      variant,
    }
  ) => {
    return (
      <>
        {/* <Tab.Group> */}
        <Tab.Group as="div" className="flex flex-wrap w-full">
        {/* <Tab.List as="div" className="my-4 border-b-2 border-[#ddd] mb-5 text-[15px] lg:text-base"> */}
          <Tab.List 
            as="div"
            className={clsxm(
              "mt-4 mb-0 lg:mb-3.5 text-[15px] lg:text-base",
              //#region  //*=========== Variants ===========
              [
                variant === 'primary' && [
                  'border-b-2 border-[#ddd]',
                ],
                variant === 'secondary' && [
                  '',
                ],
              ],
              //#endregion  //*======== Variants ===========
              [
                variant === 'primary' && [
                  'basis-full',
                ],
                variant === 'secondary' && [
                  // 'basis-full lg:basis-5/6',
                  'basis-full md:basis-[90%]',
                ],
              ],
              // className
              )}
              >
            {list.map((_item: any) => (
              <Tab key={_item.id}  className={({ selected }) =>
                clsx(
                  'lg:mr-[20px] mt-3 md:mt-0',
                  [
                    variant === 'secondary' && [
                      'px-[15px] py-[8px] mr-[10px] border-[1px] rounded-[50px]',
                      selected
                        ? 'text-[#006891] border-[#006891]'
                        : 'border-[#adb1b5]'
                    ],
                    variant === 'primary' && [
                      'focus:ring-0 py-[10px] mr-[10px]',
                      selected
                        ? 'text-[#006891] border-b-2 border-b-[#006891]'
                        : ''
                    ],
                  ],
                )
              } >{_item.label}</Tab>
            ))}
          </Tab.List>
          {/* <div className={clsx(variant == 'secondary' ? "mt-4 mb-3 basis-full lg:basis-1/6 text-right" : "hidden")}> */}
          <div className={clsx(variant == 'secondary' ? "mt-4 mb-3 basis-full md:basis-[10%] text-right" : "hidden")}>
            <Button className="rounded-[10px] bg-[#e0d4a7] border-none p-[6px]">
              <img className="h-6 w-6" src="images/icons-list.png" alt="filter" />
            </Button>
          </div>
          <Tab.Panels className="text-sm text-[#000000b3] basis-full">
            {panel.map((_item: any) => (
              <Tab.Panel key={_item.id}>{_item.content}</Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </>
    );

  }

export default TabGroup;
