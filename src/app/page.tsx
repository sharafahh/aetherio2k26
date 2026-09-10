import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MehndiOffer } from "@/components/MehndiOffer";
import { About } from "@/components/About";
import { CertificateNote } from "@/components/CertificateNote";
import { Events } from "@/components/Events";
import { Schedule } from "@/components/Schedule";
import { Rules } from "@/components/Rules";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <MehndiOffer />
      <Hero />
      <About />
      <CertificateNote />
      <Events />
      <Schedule />
      <Rules />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
