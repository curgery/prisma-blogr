// pages/api/auth/[...nextauth].ts
import { NextApiHandler } from 'next';
import NextAuth from 'next-auth';
import GithubProvider from "next-auth/providers/github"
// import Providers from 'next-auth/providers';
// import prisma from '../../../lib/prisma';

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;

const options = {
providers: [
GithubProvider({
clientId: process.env.GITHUB_ID,
clientSecret: process.env.GITHUB_SECRET,
}),
],
secret: process.env.SECRET,
};

