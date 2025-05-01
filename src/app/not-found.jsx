import Link from "next/link";
import React from "react";

export default function nofound() {
  return (
    <div>
      <h2>this page isn't invalid</h2>
      <Link href={"/"}> Back To Home</Link>
    </div>
  );
}