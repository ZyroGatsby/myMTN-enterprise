import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

export default function Banner() {
  return (
    <div className="fixed inset-x-0 bottom-0">
        <div className="bg-dark">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
            <div className="">
              <p className="font-medium text-white text-center text-xs md:text-sm leading-7 md:leading-[54px]">
                <span>Exclusive savings when you buy SIM only or Socialmedia bundles.</span>{" "}
                <span className="text-primary ml-2">
                  <UnstyledLink href='#'>
                  Login to get your discount.
                  </UnstyledLink>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}
