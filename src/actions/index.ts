"use server";
import { db } from "@/db";
import { redirect } from "next/navigation";
export const updateSnippet = async (id: string, code: string) => {
  console.log(`code : ${code} and id: ${id}`);
  // update the data
  await db.snippet.update({
    where: { id: parseInt(id) as number },
    data: { code },
  });
  redirect(`/snippets/${id}`);
};

export const deleteSnippetData = async (id: string) => {
  await db.snippet.delete({
    where: { id: parseInt(id) as number },
  });
  redirect(`/`);
};
