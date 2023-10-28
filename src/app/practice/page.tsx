"use client";
import React, { useState } from "react";

function Practice() {
  const [randomPas, setRandomNum] = useState("");
  const generateNewPassword = () => {
    var randomstring = Math.random().toString(36).slice(-8);
    return randomstring;
  };

  return (
    <div className="center">
      <div className="flex flex-col gap-3 bg-blue-100 p-20 rounded-full shadow-md">
        <button
          onClick={() => {
            setRandomNum(generateNewPassword());
          }}
          className="bg-yellow-400 rounded-md p-5 shadow-md hover:shadow-lg w-32"
        >
          Generate
        </button>
        <div className="bg-red-300 rounded-md p-5 shadow-md">{randomPas}</div>
      </div>
    </div>
  );
}

export default Practice;
