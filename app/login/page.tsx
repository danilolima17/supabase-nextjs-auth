import Messages from "./messages";

export default function Login() {
  return (
    <div className="flex flex-col flex-1 gap-2 justify-center px-8 w-full sm:max-w-md">
      <form
        className="flex flex-col flex-1 gap-2 justify-center w-full text-foreground"
        action="/auth/sign-in"
        method="post"
      >
        <label className="text-md" htmlFor="email">
          Email
        </label>
        <input
          className="py-2 px-4 mb-6 rounded-md border bg-inherit"
          name="email"
          placeholder="email@exemplo.com"
          required
        />
        <label className="text-md" htmlFor="password">
          Senha
        </label>
        <input
          className="py-2 px-4 mb-6 rounded-md border bg-inherit"
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <button className="py-2 px-4 mb-2 bg-blue-800 rounded-md text-white">
          Entrar
        </button>
        <button
          formAction="/auth/sign-up"
          className="py-2 px-4 mb-2 rounded-md border border-foreground/20 text-foreground"
        >
          Cadastre-se
        </button>
        <Messages />
      </form>
    </div>
  );
}
