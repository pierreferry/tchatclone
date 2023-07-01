import { useForm } from "react-hook-form";
import useMessagesQuery from "@/queries/useMessagesQuery.js";
import useSendMessageMutation from "@/queries/useSendMessageMutation.js";

function Chat({ user }) {
  const { data: messages, isLoading } = useMessagesQuery();

  const { mutate: sendMessage } = useSendMessageMutation();

  const { register, handleSubmit, setValue } = useForm();

  return (
    <div className="w96 flex h-4/5 flex-col rounded-lg bg-slate-700 p-10 shadow-lg">
      <h4 className="flex-none pb-2 text-lg text-slate-400">
        Welcome to the chat room!
      </h4>
      <div className="flex flex-auto flex-col-reverse overflow-y-scroll">
        <div>
          {/* This div is used to align the messages at the bottom.
          https://stackoverflow.com/a/36776769/5275921 */}
          {isLoading && <div>Loading...</div>}
          {messages?.map((message) => (
            <div key={message.id}>
              <span>{message.username}: </span>
              <span>{message.text}</span>
            </div>
          ))}
        </div>
      </div>
      <form
        className="mt-4 flex"
        onSubmit={handleSubmit((data) => {
          sendMessage({ username: user, text: data.message });
          setValue("message", "");
        })}
      >
        <input
          type="text"
          className="mr-2 flex-none rounded-md p-2 text-slate-950"
          placeholder="Send a message"
          {...register("message")}
        />
        <button type="submit" className="rounded-md bg-violet-500 p-2">
          Chat
        </button>
      </form>
    </div>
  );
}

export default Chat;
