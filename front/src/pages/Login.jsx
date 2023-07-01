import { useForm } from "react-hook-form";

function Login({ setUser }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      className="flex w-96 flex-col rounded-lg bg-slate-700 p-10 shadow-lg"
      onSubmit={handleSubmit((formData) => setUser(formData.username))}
    >
      <label htmlFor="username">Username</label>
      <input
        id="username"
        {...register("username", { required: true })}
        className="mb-1 rounded-md border border-gray-300 p-2 text-slate-950"
      />
      <span className="text-sm text-red-500">
        {errors.username && "Please select a username before joining the chat."}
      </span>

      <button className="my-2 rounded-md bg-violet-500 p-2" type="submit">
        Enter chat
      </button>
    </form>
  );
}

export default Login;
