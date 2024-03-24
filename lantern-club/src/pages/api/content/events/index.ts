// pages/api/events/index.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { handleAddEvent } from "../../../../../prisma/insert-data";
import { handleFetchEvents } from "../../../../../prisma/read-data";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const responseData = await handleFetchEvents();
    res.status(200).json(responseData);
  } else if (req.method === "POST") {
    const responseData = await handleAddEvent(req.body);
    res.status(200).json(responseData);
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
