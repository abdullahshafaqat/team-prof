import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const clearInput = () => {
    setInput("");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <input
          type="text"
          value={input}
          readOnly
          className="w-full h-12 text-right px-3 text-2xl border border-gray-300 rounded-lg mb-4 bg-gray-100"
        />
        <div className="grid grid-cols-4 gap-2">
          {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map(
            (item) => (
              <button
                key={item}
                onClick={() => (item === "=" ? calculateResult() : handleClick(item))}
                className="bg-blue-500 text-white text-xl p-3 rounded-lg hover:bg-blue-700 transition"
              >
                {item}
              </button>
            )
          )}
          <button
            onClick={clearInput}
            className="col-span-4 bg-red-500 text-white text-xl p-3 rounded-lg hover:bg-red-700 transition"
          >
            C
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
