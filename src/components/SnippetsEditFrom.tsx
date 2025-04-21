"use client";

import React, { useEffect, useState } from "react";
import type { Snippet } from "@/generated/prisma";
import { Editor } from "@monaco-editor/react";
import { EditorProps } from "@monaco-editor/react";
import Link from "next/link";
import * as actions from "@/actions";
import { redirect } from "next/navigation";
import { startTransition } from "react";

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
  const createSnippetAction = actions.updateSnippet.bind(
    null,
    snippet.id.toString(),
    snippetCode ?? ""
  );

  return (
    <div className="mt-10">
      <div className=" mb-5 flex justify-end">
        <form action={createSnippetAction}>
          <button
            type="submit"
            className="border rounded w-[120px] h-[40px] flex justify-center items-center"
          >
            Save
          </button>
        </form>
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
