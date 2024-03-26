import { HeroSection } from "@/components/HeroSection/HeroSection";
import HeaderHome from "@/components/NavBar/HeaderHome";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aseguradora",
  description: "Pagina principal de aseguradora",
};

export default function HomePage() {

  return (
    <>
      <HeaderHome />
      <div className="bg-slate-50 h-screen">
        <HeroSection />
      </div>
    </>
  );
}
