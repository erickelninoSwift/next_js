"use server";
import { db } from "@/db";

export const updateSnippet = async (id: number, code: string) => {
  console.log(`id: ${id} and code : ${code}`);
};
