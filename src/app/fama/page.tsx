import { HallOfFame } from "@/components/HallOfFame";
import { Footer } from "@/components/Footer";

export default function FamaPage() {
    return (
        <div className="mx-auto scroll-smooth">
            <main className="pt-20">
                <HallOfFame />
            </main>
            <Footer />
        </div>
    );
}
