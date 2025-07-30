import AboutUs from "@/components/landing/AboutUs";
import Client from "@/components/landing/Client";
import Contact from "@/components/landing/Contact";
import Hero from "@/components/landing/Hero";
import HeroOld from "@/components/landing/Hero-old";


export default async function Home() {
  return (
    <main className="min-h-screen antialiased bg-white">
      <HeroOld />
       <Hero />
       <AboutUs />
       {/* <Client /> */}
       {/* <Contact/> */}

    </main>
  );
}