import { connectToDatabase } from '@/lib/database/mongoose';
import Post from '@/lib/models/post.model';
import User from '@/lib/models/user.model';
import { NextRequest, NextResponse } from 'next/server';

type Data = {
  clerkId: string;
  content: any;
};

export async function POST(request: NextRequest) {
  await connectToDatabase();
  const { clerkId, content } = (await request.json()) as Data;

  try {
    console.log('Finding user with clerkId:', clerkId);
    const user = await User.findOne({ clerkId });

    if (!user) {
      return NextResponse.json({ message: 'No user' }, { status: 404 });
    }

    const newPost = new Post({
      content,
      author: clerkId,
    });

    const savedPost = await newPost.save();

    const populatedPost = await savedPost.populate('author').execPopulate();

    return NextResponse.json({ message: 'succ', populatedPost });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ success: false, error });
  }
}
