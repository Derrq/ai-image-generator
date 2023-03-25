'use client'

import fetchSuggestionFromChatGPT from "@/lib/fetchSuggestionFromChatGPT";
import { useState } from "react";
import useSWR from "swr";

function PromptInput() {
  const [input, setInput] = useState("");

  const { data: suggestion, isLoading, mutate, isValidating } = useSWR(
    "api/suggestion",
    fetchSuggestionFromChatGPT,
    {
      revalidateOnFocus: false,
    });

    const loading = isLoading || isValidating;

  return (
    <div className="m-10">
        <form className="flex flex-col lg:flex-row shadow-md shadow-slate-400/10 border rounded-md lg:divide-x">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={(loading && "ChatGPT is thinking up a suggestion...") || suggestion || "Enter a prompt ..."}
              className="flex-1 p-4 outline-none rounded-md"
            />
            <button
              type="submit"
              disabled={!input}
              className={`p-4 font-bold ${
                input
                ? 'bg-green-500 text-white transition-colors duration-200'
                : 'text-gray-300 cursor-not-allowed'
              }`}
            >Generate
            </button>
            <button
              type="button"
              className="p-4 bg-green-400 text-white transition-colors duration-200 font-bold disabled:text-gray-300 disabled:cursor-not-allowed disabled:bg-grey-400">Use Suggestion</button>
            <button
              type="button"
              onClick={mutate}
              className="p-4 bg-white text-green-500 border-none transition-colors duration-200 rounded-b-md md:rounded-r-md md:rounded-bl-none font-bold disabled:text-gray-300">New Suggestion</button>
        </form>

        {input &&(
          <p> Suggestion: {" "}
          <span className="text-green-500">
            {loading ? "ChatGPT is thinking . . ." : suggestion}
          </span>
          </p>
        )}
    </div>
  );
}

export default PromptInput