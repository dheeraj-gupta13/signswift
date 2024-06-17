import Image from "next/image";

import { getServerSession, Session } from "next-auth";
import * as React from "react";
import { redirect, useRouter } from "next/navigation";
import { handler } from "./api/auth/[...nextauth]/route";
import { config } from "../lib/auth";

// import { useSession } from "next-auth/react";
import axios from "axios";
export default async function Home() {
  const session: Session | null = await getServerSession(config);
  console.log("dev", session);
  // const router = useRouter();
  if (!session) {
    redirect("/login");
  } else {
    console.log("session => ", session);
    const response = await axios.post("/api/users/registerUser", session.user);
    console.log(response.data.user.customerId);
    redirect(`/user/${response.data.user.customerId}`);
  }

  return <></>;
}
