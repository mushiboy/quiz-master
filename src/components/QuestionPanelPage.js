import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams from react-router-dom
import CurrentQuestion from "./CurrentQuestion";
import Navbar from "./NavBar";
import SockJS from "sockjs-client";
import Stomp from "stompjs";

const sendScore = async (answer) => {
  try {
    const response = await fetch("http://localhost:8080/app/addScore", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(answer),
      credentials: "include",
    });

    // Check if the status code is 200 (OK)
    if (response.status === 200) {
      const responseBody = await response.text();
      console.log("Response:", responseBody);
    } else {
      // Handle non-200 status codes
      console.error("Score update failed with status:", response.status);
      alert("Score update has failed.");
    }
  } catch (error) {
    console.error("Error during updating score:", error.message);
    alert("An unexpected error occurred during updating the score!.");
  }
};

const QuestionPanelPage = (props) => {
  let { playerId } = useParams();
  let { roomId } = useParams();

  const [answerToSend, setAnswerToSend] = useState({
    playerId: `${playerId}`,
    quizId: `${roomId}`,
    questionId: null,
    question: null,
    answer: null,
  });

  useEffect(() => {
    const socket = new SockJS("http://localhost:8080/game-socket");
    const stompClient = Stomp.over(socket);

    stompClient.connect({}, () => {
      stompClient.subscribe("/events/question", (response) => {
        console.log("Got a question that looks like this! ");
        const newQuestion = JSON.parse(response.body);

        setAnswerToSend((previousAnswer) => {
          // send object to backend
          sendScore(previousAnswer);

          // Create the updated answer object
          const updatedAnswer = {
            ...previousAnswer,
            question: newQuestion,
          };

          return updatedAnswer;
        });
      });
    });
  }, []);

  const sendSelectedOption = (selectedOption) => {
    setAnswerToSend((previousAnswer) => ({
      ...previousAnswer,
      answer: selectedOption,
    }));
  };

  return (
    <div>
      <Navbar currentPage="game-page" />
      <div className="container mx-auto mt-20 flex items-center justify-center">
        <CurrentQuestion
          question={answerToSend.question}
          sendOption={sendSelectedOption}
        />
      </div>
    </div>
  );
};

export default QuestionPanelPage;
