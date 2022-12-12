import { useRouter } from 'next/router';
import * as React from 'react';

import Button from '@/components/buttons/Button';
import Seo from '@/components/Seo';

export default function NotFoundPage() {
  const router = useRouter();
  const href = '/';

  const HandleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <main
      className='min-h-screen bg-cover bg-top sm:bg-top'
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75")',
      }}
    >
      <Seo templateTitle='Page Not Found' />
      <div className='mx-auto max-w-7xl px-4 py-16 text-center font-primary sm:px-6 sm:py-24 lg:px-8 lg:py-48'>
        <p className='text-sm font-semibold uppercase tracking-wide text-black text-opacity-50'>
          404 error
        </p>
        <h1 className='mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl'>
          Uh oh! This is not the way.
        </h1>
        <p className='mt-2 text-lg font-medium text-black text-opacity-50'>
          It looks like the page you’re looking for doesn't exist.
        </p>
        <div className='mt-6'>
          <Button
            variant='primary'
            className='mt-4 md:text-lg'
            onClick={HandleClick}
          >
            Back to Home
          </Button>
        </div>
      </div>
    </main>
  );
}
