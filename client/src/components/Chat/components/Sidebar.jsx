import React from "react";

export default function Sidebar({ socket }) {
  const [users, setUsers] = React.useState([]);
  console.log(users);
  React.useEffect(() => {
    socket.on("responseNewUser", (data) => setUsers(data));
  }, [socket, users]);
  return (
    <div className="sidebar">
      <h3>Users:</h3>
      <ul className="list">
        {users.map((user) => (
          <li key={user.socketId}>{user.user}</li>
        ))}
      </ul>
    </div>
  );
}
