import { useState, useCallback } from "react";
import { Container, Box } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { galleryImages } from "../assets/data";
import { gallery } from "../config/styles";
import type { GalleryImage } from "../types";

/**
 * Gallery section with a grid layout and lightbox overlay.
 * Images use editorial cropping with asymmetric spans.
 * Clicking an image opens it in a full-screen lightbox.
 */
export function Gallery() {
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);
  const isMobile = useMediaQuery("(max-width: 48em)");

  const openLightbox = useCallback((image: GalleryImage) => {
    setActiveImage(image);
  }, []);

  const closeLightbox = useCallback(() => {
    setActiveImage(null);
  }, []);

  return (
    <Box component="section" id="portfolio" style={gallery.section(!!isMobile)}>
      <Container size="xl">
        <Box component="h2" style={gallery.title(!!isMobile)}>
          Previous Work
        </Box>
        <Box style={gallery.grid(!!isMobile)}>
          {galleryImages.map((image) => (
            <Box
              key={image.id}
              style={gallery.gridItemWithSpan(!!isMobile, image.span)}
              onClick={() => openLightbox(image)}
              role="button"
              tabIndex={0}
              aria-label={`View ${image.alt}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openLightbox(image);
                }
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                style={gallery.gridImage(!!isMobile)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              />
            </Box>
          ))}
        </Box>
      </Container>

      {activeImage && (
        <Box
          style={gallery.lightbox(!!isMobile)}
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <Box
            component="button"
            onClick={closeLightbox}
            aria-label="Close lightbox"
            style={gallery.lightboxClose}
          >
            Close
          </Box>
          <img
            src={activeImage.src}
            alt={activeImage.alt}
            style={gallery.lightboxImage}
            onClick={(e) => e.stopPropagation()}
          />
        </Box>
      )}
    </Box>
  );
}
