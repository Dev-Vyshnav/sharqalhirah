// src/app/page.tsx

import ClientsSection from "@/components/ClientsSection";
import ContactSection from "@/components/ContactSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Projectsection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        <HeroSection />
        <ClientsSection />
        <ExpertiseSection />
        <Projectsection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
