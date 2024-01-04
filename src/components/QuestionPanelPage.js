import React, { useState, useEffect } from "react";
import CurrentQuestion from "./CurrentQuestion";
import Navbar from "./NavBar";
import SockJS from "sockjs-client";
import Stomp from "stompjs";

const QuestionPanelPage = (playerId, roomId) => {
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

  const handleSelectOption = (selectedOption) => {
    // Handle the selected option logic here
    console.log("Selected Option:", selectedOption);
  };

  return (
    <div>
      <Navbar currentPage="game-page" />
      <div className="container mx-auto mt-20 flex items-center justify-center">
        {question ? (
          <CurrentQuestion
            question={question}
            onSelectOption={handleSelectOption}
          />
        ) : (
          <div>
            <p>Waiting for incoming questions...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionPanelPage;
