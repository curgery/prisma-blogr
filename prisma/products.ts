export const products =
[
    {
      name: 'Alice',
      email: 'alice@prisma.io',
      posts: {
        create: [
          {
            title: 'Join the Prisma Slack',
            content: 'https://slack.prisma.io',
            published: true,
          },
        ],
      },
    },
    {
      name: 'Nilu',
      email: 'nilu@prisma.io',
      posts: {
        create: [
          {
            title: 'Follow Prisma on Twitter',
            content: 'https://www.twitter.com/prisma',
            published: true,
            viewCount: 42,
          },
        ],
      },
    },
    {
      name: 'Mahmoud',
      email: 'mahmoud@prisma.io',
      posts: {
        create: [
          {
            title: 'Ask a question about Prisma on GitHub',
            content: 'https://www.github.com/prisma/prisma/discussions',
            published: true,
            viewCount: 128,
          },
          {
            title: 'Prisma on YouTube',
            content: 'https://pris.ly/youtube',
          },
        ],
      },
    },
  ]