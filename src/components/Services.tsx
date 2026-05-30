import { Container, Box } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { services as serviceData } from "../assets/data";
import { services as serviceStyles } from "../config/styles";

/**
 * Services section rendering service cards from typed data.
 * Uses large display numbers for an editorial table-of-contents feel.
 */
export function Services() {
  const isMobile = useMediaQuery("(max-width: 48em)");

  return (
    <Box component="section" id="services" style={serviceStyles.section(!!isMobile)}>
      <Container size="xl">
        <Box component="h2" style={serviceStyles.title(!!isMobile)}>
          Services
        </Box>
        <div>
          {serviceData.map((service, index) => (
            <Box
              component="article"
              key={service.id}
              style={serviceStyles.card(!!isMobile, index === 0)}
            >
              <Box component="span" style={serviceStyles.number(!!isMobile)}>
                {String(service.id).padStart(2, "0")}
              </Box>
              <Box style={serviceStyles.contentWrapper}>
                <Box component="h3" style={serviceStyles.name}>
                  {service.name}
                </Box>
                <Box component="p" style={serviceStyles.description}>
                  {service.description}
                </Box>
                {/* <Box component="span" style={serviceStyles.duration}>
                  {service.duration}
                </Box> */}
              </Box>
            </Box>
          ))}
        </div>
      </Container>
    </Box>
  );
}
