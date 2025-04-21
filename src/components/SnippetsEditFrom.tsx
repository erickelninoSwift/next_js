"use client";

import React, { useEffect, useState } from "react";
import type { Snippet } from "@/generated/prisma";
import { Editor } from "@monaco-editor/react";
import { EditorProps } from "@monaco-editor/react";
import Link from "next/link";

interface ISnippetEdit {
  snippet: Snippet;
}

const SnippetsEditForm = ({ snippet }: ISnippetEdit) => {
  const [snippetCode, setSnippetCode] = useState<string | null>(
    snippet && snippet.code ? snippet.code : null
  );

  const handleEditorChange = (value: string = "") => {
    setSnippetCode(value);
  };
  console.log(snippetCode);
  return (
    <div className="mt-10">
      <Editor
        height={"40vh"}
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default SnippetsEditForm;

// return (
//     <div>
//       <div className="flex justify-between items-center mt-10">
//         <h1 className="text-xl font-bold">Edit Page</h1>
//         <div className="flex gap-3">
//           <Link
//             className=" flex items-center justify-center border rounded p-3 w-[120px] h-[40px] "
//             href={"/"}
//           >
//             {" "}
//             save{" "}
//           </Link>
//           <Link
//             href={"/"}
//             className=" flex items-center justify-center border rounded p-3 w-[120px] h-[40px] "
//           >
//             cancel
//           </Link>
//         </div>
//       </div>
//       <pre className="border rounded w-full h-[300px] bg-gray-200 border-gray-200 p-2 mt-5">
//         <code>{mySnippet?.code}</code>
//       </pre>
//     </div>
//   );
// };
