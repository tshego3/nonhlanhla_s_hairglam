import { Container, Box, Anchor } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { brand } from "../config/brand";
import { footer, hoverColors } from "../config/styles";

/**
 * Footer section with contact information and social links.
 * Provides the contact anchor point for navigation.
 */
export function Footer() {
  const currentYear = new Date().getFullYear();
  const isMobile = useMediaQuery("(max-width: 48em)");

  return (
    <Box component="footer" id="contact" style={footer.section(!!isMobile)}>
      <Container size="xl">
        <Box style={footer.grid(!!isMobile)}>
          <div>
            <Box component="p" style={footer.heading}>
              Contact
            </Box>
            <Box component="p" style={footer.text}>
              {brand.phone}
            </Box>
            <Anchor
              href={`mailto:${brand.email}`}
              underline="never"
              style={footer.link}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = hoverColors.footerLink.hover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = hoverColors.footerLink.base;
              }}
            >
              {brand.email}
            </Anchor>
          </div>
          <div>
            <Box component="p" style={footer.heading}>
              Location
            </Box>
            <Box component="p" style={footer.text}>
              {brand.location}
            </Box>
            <Box component="p" style={footer.text}>
              {brand.hours}
            </Box>
          </div>
          <div>
            <Box component="p" style={footer.heading}>
              Social
            </Box>
            {brand.socialLinks.map((link) => (
              <Anchor
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                underline="never"
                display="block"
                mb={8}
                style={footer.link}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = hoverColors.footerLink.hover;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = hoverColors.footerLink.base;
                }}
              >
                {link.platform}
              </Anchor>
            ))}
          </div>
        </Box>
        <Box style={footer.divider} />
        <Box component="p" style={footer.copyright}>
          {currentYear} {brand.name}. All rights reserved.
        </Box>
      </Container>
    </Box>
  );
}
