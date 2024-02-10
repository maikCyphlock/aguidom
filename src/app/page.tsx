import Cta from "@/components/Cta";
import Experience from "@/components/Experience";
import Win_case from "@/components/Win_case";
import Plans from "@/components/Plans";
import Pricing from "@/components/Pricing";
import Sponsor from "@/components/Sponsor";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Cta />
      <Sponsor />
      <div className="lg:px-20">
        <Experience />
        <Win_case />
        <Plans />
        <Pricing />
      </div>
    </div>
  );
}
