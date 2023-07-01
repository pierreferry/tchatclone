import { useState } from "react";
import Chat from "./pages/Chat.jsx";
import Login from "./pages/Login.jsx";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="flex h-screen items-center justify-center bg-slate-800">
      {user ? <Chat user={user} /> : <Login setUser={setUser} />}
    </div>
  );
}

export default App;
