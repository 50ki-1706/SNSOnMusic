import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { userIdInApi } from '../(lib)/userIdInApi';

export async function POST(request: NextRequest) {
  try {
    const userId = await userIdInApi();
    const { title, content } = await request.json();

    const blog = await prisma.blog.create({
      data: {
        title,
        content,
        userId,
      },
    });

    return NextResponse.json(blog, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to create blog' }, { status: 500 });
  }
}
