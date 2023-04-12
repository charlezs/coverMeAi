import { NextApiRequest, NextApiResponse } from "next";
import openai from "../../utils/openai";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { prompt } = req.body;

  if (req.method !== "POST") {
    return res.status(400).json({ error: "Invalid request" });
  }

  const response = await openai.createCompletion({
    prompt,
    model: "text-davinci-003",
    max_tokens: 1000,
  });

  const firstResponse = response.data.choices[0];

  return res.status(200).json({
    data: {
      text: firstResponse.text,
      confidence: firstResponse.confidence,
    },
  });
}
