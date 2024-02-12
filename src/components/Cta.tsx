import React from "react";
import Image from "next/image";

async function Cta() {
  return (
    <div className="min-h-screen grid place-items-center w-full items-start mt-6 md:mt-44 antialiased">
      <div className=" grid place-items-center  w-full ">
        <Image
          alt="bg"
          src="/bg.avif"
          blurDataURL={
            "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggNSc+CiAgICAgIDxmaWx0ZXIgaWQ9J2InIGNvbG9ySW50ZXJwb2xhdGlvbkZpbHRlcnM9J3NSR0InPgogICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249JzEnIC8+CiAgICAgIDwvZmlsdGVyPgoKICAgICAgPGltYWdlIHByZXNlcnZlQXNwZWN0UmF0aW89J25vbmUnIGZpbHRlcj0ndXJsKCNiKScgeD0nMCcgeT0nMCcgaGVpZ2h0PScxMDAlJyB3aWR0aD0nMTAwJScgCiAgICAgIGhyZWY9J2RhdGE6aW1hZ2UvYXZpZjtiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRQUFBUUFCQUFELzJ3Q0VBQWdJQ0FnSkNBa0tDZ2tORGd3T0RSTVJFQkFSRXh3VUZoUVdGQndyR3g4Ykd4OGJLeVl1SlNNbExpWkVOUzh2TlVST1FqNUNUbDlWVlY5M2NYZWNuTkVCQ0FnSUNBa0lDUW9LQ1EwT0RBNE5FeEVRRUJFVEhCUVdGQllVSENzYkh4c2JIeHNySmk0bEl5VXVKa1ExTHk4MVJFNUNQa0pPWDFWVlgzZHhkNXljMGYvQ0FCRUlBQXNBRUFNQklnQUNFUUVERVFIL3hBQW9BQUVCQUFBQUFBQUFBQUFBQUFBQUFBQUVCZ0VCQVFBQUFBQUFBQUFBQUFBQUFBQUFCQVgvMmdBTUF3RUFBaEFERUFBQUFJWUZDZ2x2LzhRQUlCQUFBd0FCQkFJREFBQUFBQUFBQUFBQUFRSURBQVVSRWlFRUlrRnhzZi9hQUFnQkFRQUJQd0RXUWFpRTE0K2pwVW9TZDJIMDJKNENJWGRMeVJheTdtU1ZJcUR5QkcvWFJ5VnFHMHBNM0pEOE43ZnVhakdVYXFKcnNDdStmLy9FQUJnUkFBSURBQUFBQUFBQUFBQUFBQUFBQUFBQkF5RWkvOW9BQ0FFQ0FRRS9BRkppa2YvRUFCc1JBQUlCQlFBQUFBQUFBQUFBQUFBQUFBRUNFUUFEQkJJaC85b0FDQUVEQVFFL0FEalRlMmQ1SjZLLy85az0nIC8+CiAgICA8L3N2Zz4KICA="
          }
          placeholder="blur"
          width={1920}
          height={1080}
          sizes="(max-width: 640px) 640px, 100vw"
          className="absolute inset-0 lg:-top-8 -z-10 brightness-50 "
        ></Image>

        {/* <div className="absolute ">
          <RunningStadium className="w-[250px] lg:w-[450px]" />
        </div> */}
        <div className="text-center text-4xl md:text-7xl lg:text-[180px] font-bold tracking-[-2.1] text-white relative ">
          Aguidom
        </div>
        <p className="md:w-1/2 text-pretty md:mt-12 md:font-bold text-lg font-thin md:text-xl  lg:text-5xl tracking-widest  font-serif    text-center">
          Club Deportivo de alto rendimiento
        </p>
      </div>
    </div>
  );
}

export default Cta;
