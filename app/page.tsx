import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Area from "@/components/Area";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Services />
      <Area />
      <Download />
      <Footer />
    </div>
  );
}
