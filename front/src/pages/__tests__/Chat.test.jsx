import { describe, it, beforeEach, expect, vi } from "vitest";
import Chat from "../Chat.jsx";
import { render, screen } from "@testing-library/react";
import useMessagesQuery from "@/queries/useMessagesQuery.js";
import useSendMessageMutation from "@/queries/useSendMessageMutation.js";
import userEvent from "@testing-library/user-event";

vi.mock("@/queries/useMessagesQuery.js", () => ({ default: vi.fn() }));
vi.mock("@/queries/useSendMessageMutation.js", () => ({ default: vi.fn() }));

describe("Chat", () => {
  beforeEach(() => {
    useMessagesQuery.mockReturnValue({ data: [], isLoading: false });
    useSendMessageMutation.mockReturnValue({ mutate: () => null });
  });

  it("should render the chat page", () => {
    render(<Chat />);
  });

  it("should display the messages", () => {
    const messages = [
      { id: 1, username: "Jean-Jacques", text: "Hello" },
      { id: 2, username: "Marie", text: "Hi, how are you ?" },
    ];
    useMessagesQuery.mockReturnValue({ data: messages, isLoading: false });
    render(<Chat />);

    screen.getByText(
      (_, element) => element.textContent === "Jean-Jacques: Hello"
    );
    screen.getByText(
      (_, element) => element.textContent === "Marie: Hi, how are you ?"
    );
  });

  it("should call sendMessage when the form is submitted", async () => {
    const props = { user: "Pierre" };
    const sendMessage = vi.fn();
    useSendMessageMutation.mockReturnValue({ mutate: sendMessage });
    render(<Chat {...props} />);

    const message = "Hello";
    await userEvent.type(
      screen.getByPlaceholderText("Send a message"),
      message
    );
    await userEvent.click(screen.getByText("Chat"));

    expect(sendMessage).toHaveBeenCalledWith({
      username: props.user,
      text: message,
    });
  });

  it("should display a loader when the messages are loading", () => {
    useMessagesQuery.mockReturnValue({ data: [], isLoading: true });
    render(<Chat />);

    screen.getByText("Loading...");
  });
});
