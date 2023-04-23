import React from "react";
import { useNavigate } from "react-router-dom";

export default function Body({ messages, status }) {
  const navigate = useNavigate();
  const handleLeave = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <>
      <header className="leave">
        <button onClick={handleLeave}>Покинуть чат</button>
      </header>

      <div className="container">
        {messages.map((message) =>
          message.name === localStorage.getItem("user") ? (
            <div key={message.id} className="chats__sender">
              <p>Вы</p>
              <div className="message__sender">
                <p>{message.text}</p>
              </div>
            </div>
          ) : (
            <div key={message.id} className="chats__recipiend">
              <p>{message.name}</p>
              <div className="message__recipiend">
                <p>{message.text}</p>
              </div>
            </div>
          )
        )}
      </div>
      {}
      <div className="status">
        <p>{status}</p>
      </div>
    </>
  );
}
