import React, { useState, useEffect } from "react";
import CurrentQuestion from "./CurrentQuestion";
import Navbar from "./NavBar";
import SockJS from "sockjs-client";
import Stomp from "stompjs";

const QuestionPanelPage = () => {
  const [question, setQuestion] = useState("");
  useEffect(() => {
    const socket = new SockJS("http://localhost:8080/game-socket");
    const stompClient = Stomp.over(socket);

    stompClient.connect({}, () => {
      stompClient.subscribe("/events/question", (response) => {
        console.log(response);
        setQuestion(JSON.parse(response.body).content);
      });
    });

    return () => {
      stompClient.disconnect();
    };
  }, []);

  const sampleQuestion = {
    id: "1",
    question: "What is the capital of Canada?",
    quizId: "quiz123",
    options: {
      A: "Toronto",
      B: "Ottawa",
      C: "Vancouver",
      D: "Montreal",
    },
    correctAnswer: "B",
  };

  const handleSelectOption = (selectedOption) => {
    // Handle the selected option logic here
    console.log("Selected Option:", selectedOption);
  };

  return (
    <div>
      <Navbar currentPage="game-page" />
      <div className="container mx-auto mt-20 flex items-center justify-center">
        <CurrentQuestion
          question={question}
          onSelectOption={handleSelectOption}
        />
      </div>
    </div>
  );
};

export default QuestionPanelPage;
