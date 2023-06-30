import { useForm } from "react-hook-form";
import { useState } from "react";

const mockMessages = [
  { id: 1, username: "John", text: "Hello!" },
  { id: 2, username: "Jane", text: "Hi!" },
  { id: 3, username: "John", text: "How are you?" },
];

function Chat({ user }) {
  const [messages, setMessages] = useState(mockMessages);
  const { register, handleSubmit, setValue } = useForm();

  return (
    <div className="Chat">
      <h4>Welcome to the chat room!</h4>
      {messages.map((message) => (
        <div key={message.id} className="Chat-message">
          <span className="Chat-message-username">{message.username}: </span>
          <span>{message.text}</span>
        </div>
      ))}
      <form
        className="Chat-form"
        onSubmit={handleSubmit((data) => {
          console.log(data);
          setMessages((oldMessages) => [
            ...oldMessages,
            { id: oldMessages.length + 1, username: user, text: data.message },
          ]);
          setValue("message", "");
        })}
      >
        <input type="text" {...register("message")} />
        <button type="submit">Chat</button>
      </form>
    </div>
  );
}

export default Chat;
