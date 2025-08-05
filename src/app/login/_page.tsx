import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { login } from "../actions";
import { LoginForm } from "@/components/login-form";
export default function LoginPage() {
  return <LoginForm />;
  return (
    <div className="mx-12">
      <form
        action={async (formdata) => {
          "use server";
          const username = formdata.get("username") as string;
          const password = formdata.get("password") as string;
          console.log(username, password);
          await login(username, password);
        }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Only for administrative use</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Input name="username" type="text" placeholder="Username" />
            <Input name="password" type="password" placeholder="Password" />
          </CardContent>
          <CardFooter>
            <Button>Log in</Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
