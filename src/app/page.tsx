import DeveloperSignature from "@/components/DeveloperSignature";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TripPlanner from "@/components/TripPlanner";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <TripPlanner />
      <Faq />
      <DeveloperSignature />
    </>
  );
}
