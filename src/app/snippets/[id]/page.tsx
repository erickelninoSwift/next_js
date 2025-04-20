import { db } from "@/db";
import { notFound } from "next/navigation";
import Link from "next/link";
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
          <button className=" flex items-center justify-center border rounded p-3 w-[120px] h-[40px] ">
            Delete
          </button>
        </div>
      </div>
      <pre className="border rounded w-full h-[300px] bg-gray-200 border-gray-200 p-2 mt-5">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}
