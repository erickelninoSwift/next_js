"use server";
import { db } from "@/db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export const updateSnippet = async (id: string, code: string) => {
  console.log(`code : ${code} and id: ${id}`);
  // update the data
  await db.snippet.update({
    where: { id: parseInt(id) as number },
    data: { code },
  });
  revalidatePath(`/snippets/${id}`);
  redirect(`/snippets/${id}`);
};

export const deleteSnippetData = async (id: string) => {
  await db.snippet.delete({
    where: { id: parseInt(id) as number },
  });
  revalidatePath("/");
  redirect(`/`);
};

export async function createUser(
  formState: { message: string },
  formData: FormData
) {
  // need to be a server action
  // check if the ibout that the user have provided is valid
  try {
    const title = formData.get("title");
    const code = formData.get("code");
    // create new record in the databse
    if (typeof title !== "string" || !title || title.length < 3)
      return {
        message: "Title should not be empty and length should be at least 5",
      };
    if (typeof code !== "string" || !code || code.length < 10)
      return {
        message: "Please make sure code is in the right format and not empty",
      };

    await db.Snippet.create({
      data: {
        title,
        code,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return { message: err.message };
    } else {
      return {
        message: "Somathing went wrong",
      };
    }
  }
  revalidatePath("/");
  redirect("/");
}
