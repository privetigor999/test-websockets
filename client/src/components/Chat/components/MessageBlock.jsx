import React from "react";

export default function MessageBlock({ socket }) {
  const [message, setMessage] = React.useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (message.trim() && localStorage.getItem("user")) {
      socket.emit("message", {
        text: message,
        name: localStorage.getItem("user"),
        id: `${socket.id}-${Math.random()}`,
        socketId: socket.id,
      });
    }
    setMessage("");
  };

  const isTyping = () => {
    socket.emit("typing", `${localStorage.getItem("user")} is typing...`);
  };
  return (
    <div className="message-block">
      <form onSubmit={handleSend}>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          onKeyDown={isTyping}
        />
        <button>Сказать</button>
      </form>
    </div>
  );
}
