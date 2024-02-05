import React from "react";
import { FC } from "react";
import { allDocs } from "contentlayer/generated";
import { notFound } from "next/navigation";

interface pageProps {
  params: { slug: string };
}

const page: FC<pageProps> = async () => {
  const doc = allDocs;
  return (
    <section className="min-h-screen  flex flex-col gap-8 pb-32">
      <h1 className="text-4xl text-center">Noticias</h1>
      <div className=" grid  grid-cols-1 lg:grid-cols-3 gap-8 lg:px-8 px-2">
        {doc.map((doc) => (
          <a
            className="grid relative rounded-lg overflow-hidden place-items-center  border bg-zinc-900 p-20"
            href={`/blog/${doc.slugAsParams}`}
            key={doc.slug}
          >
            {doc.cover_url && (
              <img
                src={doc.cover_url}
                className="w-full brightness-50 absolute inset-0 z-0 h-screen object-cover"
                alt=""
              />
            )}
            <h1 className="text-4xl font-bold z-10">{doc.title}</h1>
            <small className=" text-2xl  font-thin z-10">
              {doc.description}
            </small>
          </a>
        ))}
      </div>
    </section>
  );
};

export default page;
