import { db } from "@/db";
import { notFound } from "next/navigation";
interface SnippetShowPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetShowPage(props: SnippetShowPageProps) {
  const { id } = await props.params;
  const idNumber = parseInt(id) as number;
  const snippet = await db.snippet.findFirst({
    where: { id: idNumber },
  });
  if (!snippet) return notFound();
  return (
    <div>
      Show a snippets
      <p>{snippet.title}</p>
    </div>
  );
}
