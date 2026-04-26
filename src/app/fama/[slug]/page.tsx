import type { Metadata } from "next";
import { athletes } from "@/consts/athletes";
import { notFound } from "next/navigation";
import AthleteProfile from "./AthleteProfile";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const athlete = athletes.find((a) => a.slug === slug);

  if (!athlete) return {};

  return {
    title: `${athlete.name} · Atleta Aguidom | ${athlete.category}`,
    description: `${athlete.bio} Formado en el Club Aguidom, Acarigua, Portuguesa, Venezuela.`,
    openGraph: {
      title: `${athlete.name} · ${athlete.category} | Club Aguidom Acarigua`,
      description: athlete.bio,
      images: [{ url: athlete.image, width: 800, height: 600, alt: athlete.name }],
      url: `https://aguidom.com/fama/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  return athletes.map((a) => ({ slug: a.slug }));
}

export default async function AthletePage({ params }: PageProps) {
  const { slug } = await params;
  const athlete = athletes.find((a) => a.slug === slug);
  if (!athlete) notFound();
  return <AthleteProfile slug={slug} />;
}
