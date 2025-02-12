import Brief from "@/components/custom/brief";
import Hero from "@/components/custom/hero";
import Quote from "@/components/custom/quote";
import { RecentExperiences } from "@/components/custom/recentexperiences";
import { RecentProjects } from "@/components/custom/recentprojects";
import { Skills } from "@/components/custom/skills";

export default function Home() {
  return (
    <>
      <Hero />
      <Quote />
      <Brief />
      <Skills />
      <RecentProjects />
      <RecentExperiences />
    </>
  );
}
