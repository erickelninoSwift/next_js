"use client";

import React, { useEffect, useState } from "react";
import type { Snippet } from "@/generated/prisma";
import { Editor } from "@monaco-editor/react";
import { EditorProps } from "@monaco-editor/react";
import Link from "next/link";
import * as actions from "@/actions";

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
  //   useEffect(() => {
  //     actions
  //       .updateSnippet(snippet.id, snippetCode || "")
  //       .then(() => console.log("hello world"));
  //   }, [snippet]);

  return (
    <div className="mt-10">
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
