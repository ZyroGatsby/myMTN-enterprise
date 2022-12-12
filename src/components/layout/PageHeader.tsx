/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';
import * as React from 'react';

import Button from '@/components/buttons/Button';

type PageHeaderProps = {
  page?: string;
  label?: string;
  handler?: () => void;
  cta?: boolean;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
} & React.ComponentProps<any>;

const PageHeader: React.FunctionComponent<PageHeaderProps> = 
  (
    {
      // eslint-disable-next-line unused-imports/no-unused-vars
      page,
      label,
      handler,
      cta,
    }
  ) => {
    return (
      <>
        <span className="sr-only">{page}</span>
        <h6 className='text-[#000000b3]'>
          {label}
          <span className={clsx(cta ? "float-right" : "hidden")}>
            <Button variant='ghost' onClick={handler} className="text-[#29668b] text-[13px] py-0">
              {cta}
            </Button>
          </span>
        </h6>
      </>
    );

  }

export default PageHeader;
