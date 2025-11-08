import React from "react";
import Image from "next/image";
import { Card } from "./ui/card";

async function WinCase() {
  const Items = [
    {
      imgUrl: "jesus-v.jpg",
      title: "jesus valenzuela",
    },
    {
      imgUrl: "slider-2.webp",
      title: "",
    },
    {
      imgUrl: "emiliano.webp",
      title: "",
    },
    {
      imgUrl: "slider-4.webp",
      title: "",
    },
    {
      imgUrl: "isabella.webp",
      title: "",
    },
    {
      imgUrl: "club-aguidom.webp",
      title: "",
    },
  ];

  return (
    <section className="container mx-auto px-4">
      <h2 className="text-center text-4xl md:text-7xl font-extrabold  mb-16 md:mb-32">
        Atletas que entrenan con{" "}
        <span className="text-white underline decoration-orange-400 decoration-4 underline-offset-4">
          nosotros
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {Items.map((element, index) => (
          <Card
            key={index}
            className={`bg-zinc-900 overflow-hidden transition-transform hover:scale-[1.02] ${index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
          >
            <Image
              src={`/${element.imgUrl}`}
              width={800}
              height={800}
              className="w-full h-full object-cover"
              alt={element.title}
            />
          </Card>
        ))}
      </div>
    </section>
  );
}

export default WinCase;
