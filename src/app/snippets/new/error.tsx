"use client";
interface ErrorPageProps {
  error: Error;
  reset?: () => void;
}

export default function ErrorPage({ error }: ErrorPageProps) {
  "use client";
  return <div>{error.message}</div>;
}
