import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "../Login.jsx";

describe("Login", () => {
  it("should render the login form", () => {
    const initialProps = { setUser: vi.fn() };

    render(<Login {...initialProps} />);
  });

  it("should call setUser when the form is submitted", async () => {
    const initialProps = { setUser: vi.fn() };

    render(<Login {...initialProps} />);

    const userName = "Jean-Jacques";
    await userEvent.type(screen.getByLabelText("Username"), userName);
    await userEvent.click(screen.getByText("Enter chat"));

    expect(initialProps.setUser).toHaveBeenCalledWith(userName);
  });

  it("should display an error message when the form is submitted without a username", async () => {
    const initialProps = { setUser: vi.fn() };

    render(<Login {...initialProps} />);

    await userEvent.click(screen.getByText("Enter chat"));

    screen.getByText("Please select a username before joining the chat.");
  });
});
