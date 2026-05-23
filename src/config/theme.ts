import { createTheme, type MantineColorsTuple } from "@mantine/core";
import { brand } from "./brand";

/**
 * Custom Mantine theme derived from brand configuration.
 * Uses the Dusty Pink and White palette from the design system.
 * All corners are sharp (0 radius) per the editorial aesthetic.
 */

// Generate a Mantine-compatible color tuple from the brand secondary (Dusty Pink).
// Mantine expects 10 shades from lightest to darkest.
const dustyPinkShades: MantineColorsTuple = [
  "#FDF8F5",
  "#F9F0EB",
  "#F3E2D9",
  "#EDD4C7",
  "#E7C6B5",
  "#DCAE96",
  "#C99A82",
  "#B6866E",
  "#A3725A",
  "#8F5E46",
];

export const theme = createTheme({
  primaryColor: "brand",
  colors: {
    brand: dustyPinkShades,
  },
  fontFamily: brand.fonts.body,
  headings: {
    fontFamily: brand.fonts.heading,
  },
  radius: {
    xs: "0",
    sm: "0",
    md: "0",
    lg: "0",
    xl: "0",
  },
  defaultRadius: 0,
  spacing: {
    xs: "8px",
    sm: "16px",
    md: "24px",
    lg: "48px",
    xl: "64px",
  },
  shadows: {
    xs: "none",
    sm: "none",
    md: "none",
    lg: "none",
    xl: "none",
  },
  other: {
    charcoal: brand.colors.charcoal,
    surfaceAccent: brand.colors.surfaceAccent,
  },
});
