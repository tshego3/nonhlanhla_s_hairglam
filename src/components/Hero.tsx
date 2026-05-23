import { Box } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { brand } from "../config/brand";
import { hero } from "../config/styles";

/**
 * Hero section with the brand value proposition.
 * Features a main portfolio image alongside the headline content.
 */
export function Hero() {
  const isMobile = useMediaQuery("(max-width: 48em)");

  return (
    <Box component="section" style={hero.section(!!isMobile)}>
      <Box style={hero.content(!!isMobile)}>
        <Box component="p" style={hero.tagline}>
          Beauty Studio
        </Box>
        <Box component="h1" style={hero.headline(!!isMobile)}>
          {brand.name}
        </Box>
        <Box component="p" style={hero.subheadline}>
          {brand.tagline}
        </Box>
        <Box style={hero.decorLine} />
      </Box>
      <Box style={hero.imageWrapper(!!isMobile)}>
        <img
          src="/gallery/previous_work_4.jpeg"
          alt="Featured hairstyling work"
          style={hero.image}
        />
      </Box>
    </Box>
  );
}
