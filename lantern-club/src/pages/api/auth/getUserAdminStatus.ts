import prisma from '../../../../prisma/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    isAdmin: Boolean;
    error?: string;
}

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { email } = req.query;

  try {
    const user = await prisma.user.findUnique({ where: { email: String(email) } });
    res.status(200).json({ isAdmin: user?.admin ?? false });
  } catch (error) {
    res.status(500).json({ isAdmin: false, error: "An error occurred while fetching the user." });
}
};

