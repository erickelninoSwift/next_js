import { db } from "@/db";
import SnippetsEditForm from "@/components/SnippetsEditFrom";
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
  return <SnippetsEditForm snippet={findSnippet} />;
}
