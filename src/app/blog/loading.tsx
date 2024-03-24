"use client";

import { ArticleBox } from "@/components/self-ui/Article";

export default function BlogLoading() {
  return (
    <>
      <ArticleBox skeleton />
      <ArticleBox skeleton />
    </>
  );
}
