import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Services } from "@/components/portfolio/Services";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Muhammad Moawiz Sipra — Developer · AI Engineer · Data Scientist" },
      {
        name: "description",
        content:
          "Portfolio of Muhammad Moawiz Sipra — Web App Developer, AI Automation Engineer and Data Science student building intelligent full-stack systems.",
      },
      { property: "og:title", content: "Muhammad Moawiz Sipra — Portfolio" },
      {
        property: "og:description",
        content:
          "Building intelligent systems with AI, Data Science & Full-Stack Development.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
