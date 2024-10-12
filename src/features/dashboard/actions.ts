"use server";

import { env } from "@/env.js";

export async function runWordware() {
  try {
    const res = await fetch(
      "https://app.wordware.ai/api/released-app/318cfdc8-ebf9-46a6-beb3-3b1953926f93/run",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${env.WORDWARE_API_KEY}`,
        },
        body: JSON.stringify({
          inputs: {
            company_list: "Example Company List", // You might want to replace this with actual input
          },
          version: "^1.2",
        }),
      },
    );
    const data = await res.json();
    return JSON.stringify(data, null, 2);
  } catch (error) {
    console.error("Error calling Wordware API:", error);
    throw new Error("Error occurred while fetching data");
  }
}
