import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Stats } from "@/components/portfolio/Stats";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Achievements } from "@/components/portfolio/Achievements";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";
import { Footer, ScrollTop } from "@/components/portfolio/Footer";
import { Loader } from "@/components/portfolio/Loader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mitali Jadhav — AI/ML Engineer & Full-Stack Developer" },
      {
        name: "description",
        content:
          "Mitali Jadhav — CSE student building AI, ML and full-stack products. Explore projects, skills, achievements and get in touch.",
      },
      { property: "og:title", content: "Mitali Jadhav — Portfolio" },
      {
        property: "og:description",
        content: "AI/ML Enthusiast & Full-Stack Developer. View projects, skills and contact.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="dark min-h-screen">
      <Loader />
      <Toaster theme="dark" position="top-center" />
      <Nav />
      <main>
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </div>
  );
}
