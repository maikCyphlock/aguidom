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
  params: Promise<{ slug: string }>;
}
async function getPostFromParams(slug: string) {
  const doc = allDocs.find((doc) => doc.slugAsParams === slug);

  if (!doc) {
    notFound();
  }

  return doc;
}
export async function generateMetadata(props: pageProps, parent: ResolvingMetadata): Promise<Metadata> {
  const params = await props.params;
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
          url: doc.cover_url!,
          width: 800,
          height: 600,
        },
      ],
    },
  };
}
 async function page ( props: { params: any; }) {
  const params = await props.params;
  const doc = await getPostFromParams(params.slug);
  return (
    <div className="container mx-auto px-4 lg:px-0 mt-24 lg:flex lg:flex-row lg:gap-8 lg:items-start">
      <div className="w-full lg:w-1/2 lg:pr-12">
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={doc.cover_url}
            className="brightness-50 w-full h-96 object-cover"
            alt=""
          />
        </div>
   
      </div>
      <hr className="my-12" />
      <article className="w-full lg:w-1/2 prose dark:prose-invert lg:mt-0 mt-6 lg:pl-12">
        <Mdx code={doc.body.code}></Mdx>
      </article>
    </div>
  );
};

export default page;
