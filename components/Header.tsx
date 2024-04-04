import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

const Header = () => {
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="sm:ml-6 flex justify-center">
              <div className="flex space-x-4">
                <SignedOut>
                  {' '}
                  <Link
                    href={'/sign-in'}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    {' '}
                    Sign in
                  </Link>{' '}
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
