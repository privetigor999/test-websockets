import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home({ socket }) {
  const navigate = useNavigate();
  const [user, setUser] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", user);
    socket.emit("newUser", {
      user,
      socketId: socket.id,
    });
    navigate("/chat");
  };

  return (
    <div>
      <h1>Home</h1>
      <form onSubmit={handleSubmit}>
        <h2>Вход в чат</h2>
        <label>
          <input
            value={user}
            onChange={(e) => setUser(e.target.value)}
            type="text"
            placeholder="Введите имя.."
          />
        </label>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
}
