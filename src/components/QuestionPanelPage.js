import React, { useState, useEffect } from "react";
import CurrentQuestion from "./CurrentQuestion";
import Navbar from "./NavBar";
import SockJS from "sockjs-client";
import Stomp from "stompjs";

const QuestionPanelPage = (playerId, roomId) => {
  const [question, setQuestion] = useState("");

  const sampleQues = {
    id: "1",
    question: "What is the capital of France?",
    quizId: "mugesh_562",
    options: {
      OptionA: "Paris",
      OptionB: "Berlin",
      OptionC: "London",
      OptionD: "Madrid",
    },
    correctAnswer: "OptionA",
  };

  useEffect(() => {
    const socket = new SockJS("http://localhost:8080/game-socket");
    const stompClient = Stomp.over(socket);

    stompClient.connect({}, () => {
      stompClient.subscribe("/events/question", (response) => {
        console.log("Got a question that looks like this! ");
        const newQuestion = JSON.parse(response.body);
        console.log("Sending Format ");
        console.log(newQuestion);
        setQuestion(newQuestion);
      });
    });

    // return () => {
    //   stompClient.disconnect();
    // };
  }, []);

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
