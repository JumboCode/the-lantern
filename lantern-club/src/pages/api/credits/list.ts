import { getServerSession } from "next-auth/next"
import authOptions from "../auth/[...nextauth]"
// import { authOptions } from "../auth/[...nextauth]"

import { NextApiRequest, NextApiResponse } from "next"
export default async function listMovies(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions)

  if (session) {
    res.status(200).json({
      students: [
        { name: "Thomas Lai", id: 1 },
      ]
    })
  } else {
    res.status(401).json({
      error: "You must sign in to view movies.",
    })
  }
}

// import { NextApiRequest, NextApiResponse } from "next";
// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//     res.status(200).json({text: 'Hello'});
// }