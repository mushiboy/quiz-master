import React, { useState } from "react";
import Button from "./Button";
import TextField from "./TextField";

function Question() {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);

  const handleAddOption = () => {
    if (options.length < 4) {
      setOptions([...options, ""]);
    }
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleDeleteOption = (index) => {
    const newOptions = [...options];
    newOptions.splice(index, 1);
    setOptions(newOptions);
  };

  const handleAddQuiz = () => {
    console.log("Adding quiz with:", question, options);
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-100">
      <div className="w-96 p-8 rounded-lg shadow-md bg-white">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Add Quiz</h1>
        <TextField
          label="Question"
          type="text"
          placeholder="Enter your question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        {options.map((option, index) => (
          <div key={index} className="flex items-center space-x-2 mt-3">
            <TextField
              label={`Option ${index + 1}`}
              type="text"
              placeholder={`Enter option ${index + 1}`}
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
            />
            {options.length > 2 && (
              <Button
                onClick={() => handleDeleteOption(index)}
                customClass="text-red-500"
              >
                Delete
              </Button>
            )}
          </div>
        ))}
        {options.length < 4 && (
          <Button
            onClick={handleAddOption}
            customClass="mt-3 bg-blue-500 text-white"
          >
            Add Option
          </Button>
        )}
        <Button
          onClick={handleAddQuiz}
          customClass="mt-4 bg-green-500 text-white"
        >
          Add Quiz
        </Button>
      </div>
    </div>
  );
}

export default Question;
