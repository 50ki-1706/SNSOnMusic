import { prisma } from '@/lib/prisma';

export const getSpecificBlog = async (blogId: string) => {
  const blog = await prisma.blog.findUnique({
    where: { id: blogId },
    select: {
      title: true,
      content: true,
      user: {
        select: {
          id: true,
          name: true,
          image: true,
        },
      },
      BlogLike: {
        select: {
          user: {
            select: {
              id: true,
              name: true,
              image: true,
            },
          },
        },
      },
    },
  });

  return blog;
};

export const findBlog = async (blogId: string) => {
  const blog = await prisma.blog.findUnique({
    where: { id: blogId },
    select: { userId: true },
  });

  return blog;
};

export const updateBlog = async (blogId: string, title: string, content: string) => {
  await prisma.blog.update({
    where: { id: blogId },
    data: { title, content },
  });
};

export const deleteBlog = async (blogId: string) => {
  await prisma.blog.delete({
    where: { id: blogId },
  });
};

export const likeBlog = async (blogId: string, userId: string) => {
  await prisma.blogLike.create({
    data: {
      blogId,
      userId,
    },
  });
};

export const findBlogLike = async (blogId: string, userId: string) => {
  const blog = await prisma.blogLike.findUnique({
    where: { blogId_userId: { blogId, userId } },
  });

  return blog;
};

export const deleteBlogLike = async (blogId: string, userId: string) => {
  await prisma.blogLike.delete({
    where: {
      blogId_userId: {
        blogId,
        userId,
      },
    },
  });
};
