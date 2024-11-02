"use client";

import { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const handleInput = (value: string) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
    setResult(null);
  };

  const handleCalculate = () => {
    try {
      // Using eval is not recommended for production
      const calculation = eval(input); // Be cautious with this
      setResult(calculation);
    } catch {
      setResult(null);
      alert("Invalid expression");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-yellow-500">
      <h1 className="text-3xl font-bold mb-4">Calculator</h1>

      <div className="mb-2 p-4 bg-gray-900 rounded-md w-full max-w-xs text-right text-yellow-300 text-xl">
        {input || "0"}
      </div>

      <div className="mb-4 text-2xl font-semibold text-yellow-300">
        {result !== null ? result : ""}
      </div>

      <div className="grid grid-cols-4 gap-2 w-full max-w-xs">
        {["7", "8", "9", "/"].map((char) => (
          <button
            key={char}
            className="bg-yellow-500 text-black font-semibold hover:bg-yellow-600 rounded-md p-4"
            onClick={() => handleInput(char)}
          >
            {char}
          </button>
        ))}
        {["4", "5", "6", "*"].map((char) => (
          <button
            key={char}
            className="bg-yellow-500 text-black font-semibold hover:bg-yellow-600 rounded-md p-4"
            onClick={() => handleInput(char)}
          >
            {char}
          </button>
        ))}
        {["1", "2", "3", "-"].map((char) => (
          <button
            key={char}
            className="bg-yellow-500 text-black font-semibold hover:bg-yellow-600 rounded-md p-4"
            onClick={() => handleInput(char)}
          >
            {char}
          </button>
        ))}
        {["0", ".", "=", "+"].map((char) => (
          <button
            key={char}
            className="bg-yellow-500 text-black font-semibold hover:bg-yellow-600 rounded-md p-4"
            onClick={() => (char === "=" ? handleCalculate() : handleInput(char))}
          >
            {char}
          </button>
        ))}
        <button
          className="col-span-4 bg-red-600 text-white font-semibold hover:bg-red-700 rounded-md p-4"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Calculator;
