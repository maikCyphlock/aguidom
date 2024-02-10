import React from "react";
import { FC } from "react";
import { allDocs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import Mdx from "./Mdx";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

interface pageProps {
  params: { slug: string };
}
async function getPostFromParams(slug: string) {
  const doc = allDocs.find((doc) => doc.slugAsParams === slug);

  if (!doc) {
    notFound();
  }

  return doc;
}
export async function generateMetadata(
  { params }: pageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const doc = await getPostFromParams(params.slug);

  return {
    title: doc.title,
    description: doc.description,
    openGraph: {
      title: doc.title,
      description: doc.description,
      images: [
        {
          url: doc.cover_url,
          width: 800,
          height: 600,
        },
      ],
    },
  };
}
const page: FC<pageProps> = async ({ params }) => {
  const doc = await getPostFromParams(params.slug);
  return (
    <div className=" flex flex-col gap-8">
      <div className="grid relative overflow-hidden place-items-center p-32 ">
        <img
          src={doc.cover_url}
          className="w-full  brightness-50 absolute inset-auto -z-10  object-cover"
          alt=""
        />
        <h1 className="text-4xl font-bold">{doc.title}</h1>
        <small className=" text-2xl  font-thin ">{doc.description}</small>
      </div>

      <article className="container mx-auto prose dark:prose-invert ">
        <Mdx code={doc.body.code}></Mdx>
      </article>
    </div>
  );
};

export default page;
