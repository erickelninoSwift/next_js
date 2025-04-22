"use client ";

interface ErrorPageProps {
  error: Error;
  reset?: () => void;
}

export const ErrorPage = ({ error }: ErrorPageProps) => {
  return <div>{error.message}</div>;
};
