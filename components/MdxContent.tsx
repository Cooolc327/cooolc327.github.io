"use client";

import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";
import { mdxComponents } from "./mdx-components";

interface Props {
  source: MDXRemoteSerializeResult;
}

export function MdxContent({ source }: Props) {
  return <MDXRemote {...source} components={mdxComponents} />;
}
