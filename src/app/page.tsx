import { Gallery } from "@/components/landing/Gallery";
import { Hero } from "@/components/landing/Hero";
import { MobileHeader } from "@/components/landing/mobile/MobileHeader";
import { MobileIntro } from "@/components/landing/mobile/MobileIntro";
import { Navbar } from "@/components/landing/Navbar";
import { SAMPLE_GALLERY_ITEMS } from "@/data/gallery-sample";
import { MobileBottomCta } from "@/components/landing/mobile/MobileBottomCta";
import { About } from "@/components/landing/About";
import { Places } from "@/components/landing/Places";
import { Testimonials } from "@/components/landing/Testimonials";
import { ClientComments } from "@/components/landing/ClientComments";
import { MobileTestimonials } from "@/components/landing/mobile/MobileTestimonials";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";

export default function HomePage() {
  return (
    <>
      <MobileHeader className="md:hidden" />
      <Navbar className="hidden md:flex" />

      <MobileIntro className="md:hidden" />
      <Hero className="hidden md:block" />
      <About className="hidden md:block" />

      <main className="pb-28 md:pb-0">
        <Gallery items={SAMPLE_GALLERY_ITEMS} className="px-4 py-16 md:px-8" />
      </main>
      <MobileTestimonials className="md:hidden" />

      <Places className="hidden md:block" />
      <Testimonials className="hidden md:block" />
      <ClientComments className="hidden md:block" />
      <Contact />
      <Footer />
    </>
  );
}
