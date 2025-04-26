import { db } from "@/db";
import Link from "next/link";

// export const dynamic = "force-dynamic";

export default async function Home() {
  const snippets = await db.snippet.findMany();
  const renderedSnippets = snippets.map((data) => {
    return (
      <div key={data.id + "#200"}>
        <Link
          href={`/snippets/${data.id}`}
          key={data.id}
          className="flex justify-between bg-red-200 h-[45px] w-full items-center p-2 border rounded"
        >
          <div> {data.title}</div>
          <div>View</div>
        </Link>
      </div>
    );
  });
  return (
    <div>
      <div className="mt-5">
        <h1 className="text-xl font-bold bg-gray-200 p-5">Home</h1>
      </div>
      <div className="w-full flex justify-end">
        <Link
          href={"/snippets/new"}
          className="w-[150px] bg-gray-50 flex justify-center items-center p-2 h-[35px] mt-5 mb-4 border rounded-md "
        >
          New Snippet
        </Link>
      </div>
      <div className="flex flex-col gap-3 mt-2">{renderedSnippets}</div>
    </div>
  );
}
