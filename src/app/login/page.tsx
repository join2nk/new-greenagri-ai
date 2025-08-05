import { LoginForm } from "@/components/login-form";
import { login } from "../actions";

export default function Page() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center p-6 md:p-10 bg-gradient-to-br from-blue-50 to-blue-100">
      <a
        href="/"
        className="absolute bottom-4 text-blue-600 font-semibold hover:underline"
      >
        Go back to Home Page
      </a>
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 md:p-8">
     
        <LoginForm
          action={async (formdata) => {
            "use server"; 
            console.log(formdata);
            const username = formdata.get("username") as string;
            const password = formdata.get("password") as string;
            console.log(username, password);
            await login(username, password);
          }}
        />
      </div>
    </div>
  );
}
