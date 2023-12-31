// QuizMasterLandingPage.js
import React, { useState, useEffect } from "react";
import Navbar from "./NavBar";
import QuizList from "./QuizList"; // Import the QuizList component
import Button from "./Button";

const QuizMasterLandingPage = () => {
  const [quizzes, setQuizzes] = useState([]);

  // Example: Fetch user's quizzes
  useEffect(() => {
    // Replace this with your actual data fetching logic
    const fetchQuizzes = async () => {
      // Example dummy data
      const dummyQuizzes = [
        { id: 1, roomId: "ABC123", title: "Quiz 1" },
        { id: 2, roomId: "DEF456", title: "Quiz 2" },
        // Add more quizzes as needed
      ];

      setQuizzes(dummyQuizzes);
    };

    fetchQuizzes();
  }, []);

  const handleAddNewQuiz = () => {
    console.log("Adding a new quiz...");
  };

  return (
    <div>
      <Navbar currentPage="quiz-master-landing" />
      <div className="container mx-auto mt-8">
        <h1 className="font-handwriting text-5xl">Welcome!</h1>
        <Button onClick={handleAddNewQuiz} customClass="mt-5">
          Add New Quiz
        </Button>

        <QuizList quizzes={quizzes} />
      </div>
    </div>
  );
};

export default QuizMasterLandingPage;
