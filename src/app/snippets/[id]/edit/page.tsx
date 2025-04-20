import { db } from "@/db";
import Link from "next/link";
interface IEditProps {
  params: {
    id: string;
  };
}
export default async function EditSnippetPage({ params }: IEditProps) {
  const { id } = params;
  const convertId = parseInt(id) as number;
  const findSnippet = await db.snippet.findFirst({
    where: { id: convertId },
  });

  if (!findSnippet) return <div>Snippet was not found </div>;
  return (
    <div>
      <div className="flex justify-between items-center mt-10">
        <h1 className="text-xl font-bold">Edit Page</h1>
        <div className="flex gap-3">
          <Link
            className=" flex items-center justify-center border rounded p-3 w-[120px] h-[40px] "
            href={"/"}
          >
            {" "}
            save{" "}
          </Link>
          <Link
            href={"/"}
            className=" flex items-center justify-center border rounded p-3 w-[120px] h-[40px] "
          >
            cancel
          </Link>
        </div>
      </div>
      <pre className="border rounded w-full h-[300px] bg-gray-200 border-gray-200 p-2 mt-5">
        <code>{findSnippet.code}</code>
      </pre>
    </div>
  );
}
