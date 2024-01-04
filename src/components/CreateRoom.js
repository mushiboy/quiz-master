import React, { useState, useEffect, useRef } from "react";
import Navbar from "./NavBar";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
// import ReactToPdf from "react-to-pdf";

const CreateRoom = () => {
  const [players, setPlayers] = useState([]);
  const [numPlayers, setNumPlayers] = useState(players.length);

  const ref = useRef();

  useEffect(() => {
    const socket = new SockJS("http://localhost:8080/game-socket");
    const stompClient = Stomp.over(socket);

    stompClient.connect({}, () => {
      stompClient.subscribe("/events/joinedPlayers", (response) => {
        console.log(response);
        updatePlayerList(JSON.parse(response.body).content);
      });
    });

    return () => {
      stompClient.disconnect();
    };
  }, []);

  const updatePlayerList = (newPlayer) => {
    setPlayers((prevPlayers) => {
      const existingPlayerIndex = prevPlayers.findIndex(
        (player) => player.playerName === newPlayer.playerName
      );

      if (existingPlayerIndex !== -1) {
        // Player already exists, update their info
        prevPlayers[existingPlayerIndex] = newPlayer;
      } else {
        // Player is new, add them to the list
        prevPlayers.push(newPlayer);
      }

      setNumPlayers(prevPlayers.length);
      return [...prevPlayers];
    });
  };

  const columns = [
    { key: "playerName", label: "Player Name" },
    { key: "score", label: "Score" },
  ];

  const options = {
    orientation: "landscape",
  };

  const handlePrintClick = async () => {
    const { toPdf } = await import("react-to-pdf");
    const pdfGenerator = toPdf();

    // This function will return a promise
    pdfGenerator.onBeforeGetContent(() => {
      // Customize the PDF content if needed
    });

    pdfGenerator.toPdf();

    // Handle the promise if needed
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
