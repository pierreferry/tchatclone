import { useMutation } from "react-query";

function useSendMessageMutation() {
  return useMutation((message) =>
    fetch("/api/new-message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    })
  );
}

export default useSendMessageMutation;
