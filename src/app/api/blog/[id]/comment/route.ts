import { userIdInApi } from '@/app/api/(lib)/userIdInApi';
import { createComment } from '@/app/api/(Repository)/blog';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest, { params }: { params: { id: string } }) => {
  try {
    const blogId = params.id;
    const userId = await userIdInApi();

    // リクエストボディからcontentを取得
    const { content } = await req.json();

    const newComment = await createComment(blogId, userId, content);

    // 204 No Content を返す
    return NextResponse.json(newComment, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'failed to post comment' }, { status: 500 });
  }
};
