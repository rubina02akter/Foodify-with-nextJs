"use client";
import { signIn } from "next-auth/react";

export default function Component() {
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn("github", { callbackUrl: "/" })}>
        Sign in
      </button>
    </>
  );
}