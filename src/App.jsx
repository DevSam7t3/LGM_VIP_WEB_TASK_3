import { useState } from "react";
import Form from "./components/Form";
import UserCard from "./components/UserCard";

function App() {
  const [user, setUser] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    company: "",
    profile: "",
  });

  return (
    <div className="max-w-5xl mx-auto p-4">
      <Form setUser={setUser} user={user} />
      <div className="w-full h-[1px] mt-8 mb-8 bg-zinc-800" />
      <UserCard user={user} />
    </div>
  );
}

export default App;
