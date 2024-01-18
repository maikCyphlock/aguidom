import Navbar from "@/components/Navbar";
import Cta from "@/components/Cta";
import Experience from "@/components/Experience";
import Win_case from "@/components/Win_case";
export default function Home() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Cta />
      <Experience />
      <Win_case />
    </div>
  );
}
