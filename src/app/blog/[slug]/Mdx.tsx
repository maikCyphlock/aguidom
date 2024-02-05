"use client";
import React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";

interface MdxProps {
  code: string;
}
function Mdx({ code }: MdxProps) {
  const Components = useMDXComponent(code);
  return (
    <div>
      <Components />
    </div>
  );
}

export default Mdx;
