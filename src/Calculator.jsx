import React ,  {useState} from "react";
const Calculator = () => {
const [input, setInput] = useState("");
const calculateResult = () =>{
  try{
    setInput(Function('"use strict"; return (' + input +')')().toString());
  }
  catch{
    setInput("Error");
  }
  };

  const handleClick = (value) => {
    if(value === "="){
      calculateResult();
    }
    else if(value === "C"){
       setInput("");
    }
    else{
       setInput((prev) => prev + value);
    }
    };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
    <div className="bg-white p-6 rounded-lg shadow-lg w-80">
  
      <input
        type="text"
        value={input}
        readOnly
        className="w-full h-14 text-right px-3 text-2xl border rounded-lg mb-4 bg-cyan-950 text-white"
      />


      <div className="grid grid-cols-4 gap-2">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0",".", "=", "+"].map(
          (item) => (
            <button
              key={item}
              onClick={() => handleClick(item)}
              className="bg-amber-400 text-white text-xl p-3 rounded-lg hover:bg-red-700 transition"
            >
              {item}
            </button>
          )
        )}
       
        <button
          onClick={() => handleClick("C")}
          className="col-span-4 bg-orange-600 text-white text-xl p-3 rounded-lg hover:bg-red-700 transition"
        >
          C
        </button>
      </div>
    </div>
  </div>

  );
};
export default Calculator;