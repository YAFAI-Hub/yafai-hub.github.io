import { getCompiledWithPath } from "@/lib/markdown";
import { notFound } from "next/navigation";
import React from "react";
async function GuidePage() {
  const res = await getCompiledWithPath("/contents/guides/index.mdx");
  if (!res) notFound();
  return <div>{res?.content}</div>;
}

export default GuidePage;
