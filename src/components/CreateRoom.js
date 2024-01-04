import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./NavBar";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import ReactToPdf from "react-to-pdf";
import Button from "./Button";

const CreateRoom = () => {
  const [players, setPlayers] = useState([]);
  const [numPlayers, setNumPlayers] = useState(players.length);
  const { quizID } = useParams();

  const ref = useRef();

  useEffect(() => {
    const socket = new SockJS("http://localhost:8080/game-socket");
    const stompClient = Stomp.over(socket);

    stompClient.connect({}, () => {
      stompClient.subscribe("/events/joinedPlayers", (response) => {
        if (response.body) {
          updatePlayerList(response.body);
        }
      });

      stompClient.subscribe("/events/scores", (response) => {
        if (response.body) {
          updateScores(response.body);
        }
      });
    });
  }, []);

  const updatePlayerList = (newPlayer) => {
    const parsedNewPlayer = JSON.parse(newPlayer);
    console.log(parsedNewPlayer);
    console.log(parsedNewPlayer.roomId);

    // Check if the quizID from useParams matches the quizID from the incoming socket message
    if (parsedNewPlayer.roomId === quizID) {
      console.log("Quiz ID:", parsedNewPlayer.quizID);
      setPlayers((prevPlayers) => {
        const existingPlayerIndex = prevPlayers.findIndex(
          (player) => player.playerName === parsedNewPlayer.playerName
        );

        if (existingPlayerIndex !== -1) {
          // Player already exists, update their info if quizID is the same
          if (
            prevPlayers[existingPlayerIndex].quizID === parsedNewPlayer.roomId
          ) {
            prevPlayers[existingPlayerIndex] = {
              playerName: parsedNewPlayer.playerName,
              score: parsedNewPlayer.score,
              quizID: parsedNewPlayer.quizID,
            };
          }
        } else {
          // Player is new, add them to the list
          prevPlayers.push({
            playerName: parsedNewPlayer.playerName,
            score: parsedNewPlayer.score,
            quizID: parsedNewPlayer.quizID,
          });
        }

        setNumPlayers(prevPlayers.length);
        return [...prevPlayers];
      });
    }
  };

  const updateScores = (responseBody) => {
    const updatedScores = JSON.parse(responseBody);

    updatedScores.sort((a, b) => b.score - a.score);

    setPlayers(updatedScores);
  };

  const onStartQuiz = () => {
    // Send API call to start the quiz
    fetch("http://localhost:8080/app/startgame?quizId=" + quizID, {
      method: "POST",
    })
      .then((response) => response.text())
      .then((data) => {
        alert(data);
      })
      .catch((error) => {
        console.error("Error starting the quiz:", error);
      });
  };

  const columns = [
    { key: "playerName", label: "Player Name" },
    { key: "score", label: "Score" },
  ];

  const handlePrintClick = async () => {
    const { toPdf } = await import("react-to-pdf");
    const pdfGenerator = toPdf();

    pdfGenerator.onBeforeGetContent(() => {});

    pdfGenerator.toPdf();
  };

  return (
    <div className="text-center">
      <Navbar />

      <div>
        <h1 className="text-5xl font-handwriting mb-4">
          Number of Players Joined: {numPlayers}
        </h1>

        <table
          ref={ref}
          className="border-collapse border border-gray-800 mx-auto mb-8"
        >
          <thead>
            <tr>
              {columns.map((col) => (
                <th
                  key={col.key}
                  className="border border-gray-800 p-2 font-bold"
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {players.map((player) => (
              <tr key={player.playerName}>
                {columns.map((col) => (
                  <td key={col.key} className="border border-gray-800 p-2">
                    {player[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <Button onClick={onStartQuiz} customClass="mt-2 bg-orange hover:bg-b2">
          Start Quiz
        </Button>

        {/* <button
          onClick={handlePrintClick}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Print as PDF
        </button> */}
      </div>
    </div>
  );
};

export default CreateRoom;
