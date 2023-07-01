import { useForm } from "react-hook-form";
import useMessagesQuery from "@/queries/useMessagesQuery.js";
import useSendMessageMutation from "@/queries/useSendMessageMutation.js";

function Chat({ user }) {
  const { data: messages, isLoading } = useMessagesQuery();

  const { mutate: sendMessage } = useSendMessageMutation();

  const { register, handleSubmit, setValue } = useForm();

  return (
    <div className="Chat">
      <h4>Welcome to the chat room!</h4>
      {isLoading && <div>Loading...</div>}
      {messages?.map((message) => (
        <div key={message.id} className="Chat-message">
          <span className="Chat-message-username">{message.username}: </span>
          <span>{message.text}</span>
        </div>
      ))}
      <form
        className="Chat-form"
        onSubmit={handleSubmit((data) => {
          sendMessage({ username: user, text: data.message });
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
