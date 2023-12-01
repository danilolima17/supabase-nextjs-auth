import Link from "next/link";

export default function NotAuthanticated() {
  return (
    <div className="flex flex-col gap-y-2 justify-center items-center h-screen text-center">
     
      <div className="flex flex-row flex-wrap gap-2 justify-center items-center">
        <Link
          className="flex justify-center py-2 px-3 w-28 no-underline rounded-md bg-btn-background hover:bg-btn-background-hover"
        >
          Login
        </Link>
        <span className="font-thin">or</span>
        <Link
          href="/login"
          className="flex justify-center py-2 px-3 w-28 no-underline rounded-md bg-btn-background hover:bg-btn-background-hover"
        >
          Ir para a home
        </Link>
      </div>
    </div>
  );
}
