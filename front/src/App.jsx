import { useState } from "react";
import Chat from "./pages/Chat.jsx";
import Login from "./pages/Login.jsx";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  if (user) {
    return <Chat user={user} />;
  }

  return <Login setUser={setUser} />;
}

export default App;
