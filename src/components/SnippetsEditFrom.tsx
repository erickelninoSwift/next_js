"use client";

import React, { useEffect, useState } from "react";
import type { Snippet } from "@/generated/prisma";
import { Editor } from "@monaco-editor/react";
import { EditorProps } from "@monaco-editor/react";
import Link from "next/link";
import * as actions from "@/actions";
import { redirect } from "next/navigation";

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

  const handleClick = () => {};

  return (
    <div className="mt-10">
      <div className=" mb-5 flex justify-end">
        <button
          className="border rounded w-[120px] h-[40px] flex justify-center items-center"
          onClick={async () => {
            return await actions.updateSnippet(snippet.id, snippetCode || "");
          }}
        >
          Save
        </button>
      </div>
      <Editor
        height={"40vh"}
        theme="vs-dark"
        language="javascript"
        defaultValue={snippetCode!!}
        options={{ minimap: { enabled: false } }}
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default SnippetsEditForm;
