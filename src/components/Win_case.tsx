import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card } from "./ui/card";

async function Win_case() {
  const Items = [
    {
      imgUrl: "slider-1.webp",
      title: "Alberto ponte",
    },
    {
      imgUrl: "slider-2.webp",
      title: "Alberto ponte",
    },
    {
      imgUrl: "slider-3.webp",
      title: "Alberto ponte",
    },
    {
      imgUrl: "slider-4.webp",
      title: "Alberto ponte",
    },
    {
      imgUrl: "slider-5.webp",
      title: "Alberto ponte",
    },
    {
      imgUrl: "slider-6.jpeg",
      title: "Alberto ponte",
    },
  ];
  return (
    <section> <h2 className="text-center text-3xl md:text-6xl text-zinc-100 mb-32">Atletas que entrenan con <span className="text-sky-300 ">nosotros</span></h2>
      <Carousel className="mx-auto w-full max-w-72 md:max-w-xl lg:max-w-6xl ">


        <CarouselContent>
          {Items.map((element, index) => (
            <CarouselItem
              key={index}
              className=" basis-full  md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card className="bg-zinc-900 overflow-hidden ">
                  <Image
                    src={`/${element.imgUrl}`}
                    width={800}
                    height={800}
                    className="w-full  aspect-square object-cover"
                    alt=""
                  />
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}

export default Win_case;
