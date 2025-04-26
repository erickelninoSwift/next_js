import { db } from "@/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import * as actions from "@/actions";
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
  // if (!snippet) return notFound();
  const handleDeleteSnippet = actions.deleteSnippetData.bind(null, id);
  if (!snippet) return <div>Snippet was not found </div>;
  return (
    <div>
      <div className="flex justify-between items-center mt-10">
        <h1 className="text-xl font-bold">{snippet.title}</h1>
        <div className="flex gap-3">
          <Link
            className=" flex items-center justify-center border rounded p-3 w-[120px] h-[40px] "
            href={`/snippets/${id}/edit`}
          >
            {" "}
            Edit
          </Link>
          <form
            action={handleDeleteSnippet}
            className=" flex items-center justify-center border rounded p-3 w-[120px] h-[40px] "
          >
            <button type="submit">Delete</button>
          </form>
        </div>
      </div>
      <pre className="border rounded w-full h-[300px] bg-gray-200 border-gray-200 p-2 mt-5">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}

export const generateStaticParams = async () => {
  const snippets = await db.snippet.findMany();

  return snippets.map(
    (currentSnippet: { id: number; title: string; code: string }) => {
      return {
        id: currentSnippet.id.toString(),
      };
    }
  );
};
