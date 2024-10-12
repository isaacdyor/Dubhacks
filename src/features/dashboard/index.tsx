"use client";

import { useState } from "react";
import { runWordware } from "./actions";

export const DashboardClient = () => {
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleRunWordware = async () => {
    setIsLoading(true);
    try {
      const result = await runWordware();
      setResponse(result);
    } catch (error) {
      console.error("Error calling Wordware API:", error);
      setResponse("Error occurred while fetching data");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleRunWordware}
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "Run Wordware"}
      </button>
      {response && (
        <div className="mt-4">
          <h2 className="mb-2 text-xl font-semibold">Response:</h2>
          <div className="rounded p-4">{response}</div>
        </div>
      )}
    </div>
  );
};
