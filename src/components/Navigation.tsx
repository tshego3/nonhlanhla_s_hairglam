import { useState } from "react";
import { Container, Group, Burger, Image, Box, Anchor } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { brand } from "../config/brand";
import { nav, hoverColors } from "../config/styles";
import { navLinks } from "../assets/data";

/**
 * Responsive navigation bar.
 * Displays horizontal links on desktop and a hamburger menu on mobile.
 */
export function Navigation() {
  const [opened, setOpened] = useState(false);
  const isMobile = useMediaQuery("(max-width: 48em)");

  return (
    <Box component="header" style={nav.header}>
      <Container size="xl" py="sm">
        <Group justify="space-between" align="center">
          <Image
            src={brand.logo}
            alt={`${brand.name} logo`}
            h={40}
            w="auto"
            fallbackSrc="https://placehold.co/120x40/1A1A1A/FFFFFF?text=HairGlam"
          />

          {!isMobile && (
            <Group gap="xs">
              {navLinks.map((link) => (
                <Anchor
                  key={link.href}
                  href={link.href}
                  underline="never"
                  style={nav.link}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = hoverColors.navLink.hover;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = hoverColors.navLink.base;
                  }}
                >
                  {link.label}
                </Anchor>
              ))}
            </Group>
          )}

          {isMobile && (
            <Burger
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              size="sm"
              aria-label="Toggle navigation"
            />
          )}
        </Group>

        {isMobile && opened && (
          <Box component="nav" style={nav.mobileMenu}>
            {navLinks.map((link) => (
              <Anchor
                key={link.href}
                href={link.href}
                underline="never"
                onClick={() => setOpened(false)}
                style={nav.mobileLink}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = hoverColors.mobileLink.hover;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = hoverColors.mobileLink.base;
                }}
              >
                {link.label}
              </Anchor>
            ))}
          </Box>
        )}
      </Container>
    </Box>
  );
}
