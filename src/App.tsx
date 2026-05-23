import { Anchor } from "@mantine/core";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Gallery } from "./components/Gallery";
import { Footer } from "./components/Footer";
import { skipToContent } from "./config/styles";

/**
 * Root application component.
 * Composes all page sections into a single-page layout.
 */
export function App() {
  return (
    <>
      <Anchor href="#main-content" style={skipToContent}>
        Skip to content
      </Anchor>
      <Navigation />
      <main id="main-content">
        <Hero />
        <Services />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
