/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Card } from './ui/card';
import Image from 'next/image';

import { AspectRatio } from '@/components/ui/aspect-ratio';

export default function PostCard() {
  return (
    <article className="flex items-start p-2 border-neutral-50 flex-col space-y-3">
      <Card className="w-full max-w-lg mx-auto">
        <div className="p-4 space-y-4">
          <div className="flex space-x-4">
            <div className="flex-shrink-0">
              <Avatar>
                <AvatarImage
                  width={48}
                  height={48}
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="space-y-1">
              <div className="flex items-center space-x-2 text-sm">
                <div className="font-bold">Jane Doe</div>
                <div className="text-gray-500 dark:text-gray-400">@janedoe</div>
                <div className="text-gray-500 dark:text-gray-400">1m</div>
              </div>
              <p className="text-base leading-snug">
                Just published my first novel! Its been a long journey, but Im
                so proud of the result. I hope you all enjoy reading it as much
                as I enjoyed writing it. 📚❤️
              </p>
            </div>
          </div>
          <div className="w-full">
            <div className="aspect-w-16 aspect-h-8">
              <img
                src="https://pbs.twimg.com/media/GKUrFZtW4AAxz0M?format=jpg&name=medium"
                alt="Image"
                className="rounded-md object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </Card>
    </article>
  );
}
