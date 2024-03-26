import { HeroSection } from "@/components/HeroSection/HeroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aseguradora",
  description: "Pagina principal de aseguradora",
};

export default function Example() {

  return (
    <div className="bg-slate-50 h-screen">
      <HeroSection/>
    </div>
  );
}
