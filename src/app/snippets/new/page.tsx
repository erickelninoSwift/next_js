"use client";
import React from "react";
import { db } from "../../../db/index";
import { redirect } from "next/navigation";
import { useFormState } from "react-dom";
import * as actions from "@/actions";
export default function SnippetCreatePage() {
  const [formState, formAction] = useFormState(actions.createUser, {
    message: "",
  });

  return (
    <form action={formAction}>
      <h3 className="font-bold m-3">Create a Snippet</h3>
      <div className="flex flex-col gap-4 ">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input
            name="title"
            className="border rounded p-2 w-full"
            id="title"
          />
        </div>

        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <textarea
            name="code"
            className="border rounded p-2 w-full"
            id="code"
          />
        </div>
        {formState.message && <span>{formState.message}</span>}
        <button type="submit" className="rounded p-2 bg-blue-200">
          Create
        </button>
      </div>
    </form>
  );
}
