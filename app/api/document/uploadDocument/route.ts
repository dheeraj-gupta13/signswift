// We impot our prisma client
import prisma from "../../../../lib/prisma";
// Prisma will help handle and catch errors
import { Prisma } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextApiResponse) {
  const { userId, ShareLink } = await req.json();

  console.log(userId, ShareLink);
  if (req.method === "POST") {
    // create user
    console.log("post");
    console.log("document creation process");

    const user = await prisma.document.create({
      data: { userId: userId, ShareLink: ShareLink },
    });
    return NextResponse.json({
      message: "Document Created",
      user: user,
      status: 201,
    });
  } else {
    return NextResponse.json({
      message: "Method Not Allowed",

      status: 405,
    });
  }
}
// We hash the user entered password using crypto.js

// function to create user in our database
async function createUserHandler(req: NextApiRequest, res: NextApiResponse) {
  let errors = [];
}
