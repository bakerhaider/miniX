import PostCard from '@/components/PostCard';
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';
import React from 'react';

const Home = () => {
  return (
    <main className="text-white pt-12 flex justify-center items-start">
      <PostCard />
    </main>
  );
};

export default Home;
