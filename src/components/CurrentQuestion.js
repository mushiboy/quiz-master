// CurrentQuestion.js
import React from "react";

const CurrentQuestion = ({ question }) => {
  return (
    <div className="container mx-auto mt-8">
      <div className="bg-gray-200 p-4 rounded-md text-center">
        <p className="text-lg font-bold">{question.question}</p>
      </div>

      <div className="mt-4 space-y-4">
        {Object.entries(question.options).map(([key, value]) => (
          <div
            key={key}
            className="bg-blue-500 p-4 rounded-md text-white cursor-pointer hover:bg-blue-400"
          >
            <p className="text-lg font-bold">
              {key}: {value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentQuestion;
