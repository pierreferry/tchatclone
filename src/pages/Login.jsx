import { useForm } from "react-hook-form";
import "./Login.css";

function Login({ setUser }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      className="Login"
      onSubmit={handleSubmit((formData) => setUser(formData.username))}
    >
      <label htmlFor="username">Username</label>
      <input id="username" {...register("username", { required: true })} />
      {errors.username && (
        <span>Please select a username before joining the chat.</span>
      )}

      <button type="submit">Enter chat</button>
    </form>
  );
}

export default Login;
