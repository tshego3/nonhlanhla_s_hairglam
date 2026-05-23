import type React from "react";
import { brand } from "./brand";

const { colors, fonts } = brand;

/**
 * Centralized style definitions for all components.
 * No inline styles are permitted in component files.
 * All visual decisions live here alongside brand.ts.
 */

// -- Shared utility styles --

export const labelCaps: React.CSSProperties = {
  fontFamily: fonts.body,
  fontSize: "12px",
  fontWeight: 600,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
};

export const bodyText: React.CSSProperties = {
  fontFamily: fonts.body,
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: 1.6,
};

// -- Navigation --

export const nav = {
  header: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    backgroundColor: colors.primary,
    borderBottom: `1px solid ${colors.secondaryBorder}`,
  } as React.CSSProperties,

  link: {
    fontFamily: fonts.body,
    fontSize: "12px",
    fontWeight: 600,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: colors.charcoal,
    padding: "8px 16px",
    transition: "color 200ms ease",
  } as React.CSSProperties,

  mobileMenu: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "16px",
    paddingBottom: "16px",
    borderTop: `1px solid ${colors.secondaryBorder}`,
  } as React.CSSProperties,

  mobileLink: {
    fontFamily: fonts.body,
    fontSize: "14px",
    fontWeight: 500,
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    color: colors.charcoal,
    padding: "12px 24px",
    transition: "background-color 200ms ease",
  } as React.CSSProperties,
};

// -- Hero --

export const hero = {
  section: (isMobile: boolean): React.CSSProperties => ({
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
    alignItems: "center",
    minHeight: isMobile ? "auto" : "80vh",
    backgroundColor: colors.surfaceAccent,
    position: "relative",
    overflow: "hidden",
  }),

  content: (isMobile: boolean): React.CSSProperties => ({
    padding: isMobile ? "48px 20px" : "64px",
    order: isMobile ? 2 : 1,
  }),

  tagline: {
    ...labelCaps,
    color: colors.secondary,
    marginBottom: "24px",
  } as React.CSSProperties,

  headline: (isMobile: boolean): React.CSSProperties => ({
    fontFamily: fonts.heading,
    fontSize: isMobile ? "40px" : "64px",
    fontWeight: 300,
    lineHeight: isMobile ? 1.2 : 1.1,
    letterSpacing: isMobile ? "-0.01em" : "-0.02em",
    color: colors.charcoal,
    marginBottom: "32px",
  }),

  subheadline: {
    fontFamily: fonts.body,
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: 1.6,
    color: colors.textMuted,
    maxWidth: "480px",
  } as React.CSSProperties,

  decorLine: {
    width: "48px",
    height: "1px",
    backgroundColor: colors.secondary,
    marginTop: "48px",
  } as React.CSSProperties,

  imageWrapper: (isMobile: boolean): React.CSSProperties => ({
    position: "relative",
    height: "100%",
    minHeight: isMobile ? "50vh" : "80vh",
    overflow: "hidden",
    order: isMobile ? 1 : 2,
  }),

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  } as React.CSSProperties,
};

// -- Services --

export const services = {
  section: (isMobile: boolean): React.CSSProperties => ({
    padding: isMobile ? "64px 0" : "120px 0",
    backgroundColor: colors.background,
  }),

  title: (isMobile: boolean): React.CSSProperties => ({
    fontFamily: fonts.heading,
    fontSize: "32px",
    fontWeight: 400,
    lineHeight: 1.3,
    letterSpacing: "0.02em",
    color: colors.charcoal,
    marginBottom: isMobile ? "32px" : "64px",
  }),

  card: (isMobile: boolean, isFirst: boolean): React.CSSProperties => ({
    padding: isMobile ? "32px 0" : "48px 0",
    borderBottom: `1px solid ${colors.secondaryBorder}`,
    borderTop: isFirst ? `1px solid ${colors.secondaryBorder}` : undefined,
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    alignItems: "flex-start",
    gap: isMobile ? "16px" : "32px",
  }),

  number: (isMobile: boolean): React.CSSProperties => ({
    fontFamily: fonts.heading,
    fontSize: isMobile ? "40px" : "64px",
    fontWeight: 300,
    lineHeight: 1,
    color: colors.secondary,
    minWidth: isMobile ? "auto" : "80px",
  }),

  name: {
    fontFamily: fonts.heading,
    fontSize: "24px",
    fontWeight: 500,
    lineHeight: 1.4,
    color: colors.charcoal,
    marginBottom: "8px",
  } as React.CSSProperties,

  contentWrapper: {
    flex: 1,
  } as React.CSSProperties,

  description: {
    ...bodyText,
    color: colors.textMuted,
    marginBottom: "12px",
  } as React.CSSProperties,

  duration: {
    ...labelCaps,
    color: colors.secondary,
  } as React.CSSProperties,
};

// -- Gallery --

export const gallery = {
  section: (isMobile: boolean): React.CSSProperties => ({
    padding: isMobile ? "64px 0" : "120px 0",
    backgroundColor: colors.surfaceAccent,
  }),

  title: (isMobile: boolean): React.CSSProperties => ({
    fontFamily: fonts.heading,
    fontSize: "32px",
    fontWeight: 400,
    lineHeight: 1.3,
    letterSpacing: "0.02em",
    color: colors.charcoal,
    marginBottom: isMobile ? "32px" : "64px",
  }),

  grid: (isMobile: boolean): React.CSSProperties => ({
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "repeat(12, 1fr)",
    gap: isMobile ? "16px" : "24px",
  }),

  gridItem: {
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
  } as React.CSSProperties,

  gridItemWithSpan: (isMobile: boolean, span: string | undefined): React.CSSProperties => {
    const base: React.CSSProperties = {
      position: "relative",
      overflow: "hidden",
      cursor: "pointer",
    };
    if (isMobile) {
      return { ...base, gridColumn: "span 1", gridRow: "span 1" };
    }
    switch (span) {
      case "wide":
        return { ...base, gridColumn: "span 8" };
      case "tall":
        return { ...base, gridColumn: "span 4", gridRow: "span 2" };
      default:
        return { ...base, gridColumn: "span 4" };
    }
  },

  gridImage: (isMobile: boolean): React.CSSProperties => ({
    width: "100%",
    height: "100%",
    minHeight: isMobile ? "240px" : "300px",
    objectFit: "cover",
    display: "block",
    transition: "transform 400ms ease",
  }),

  lightbox: (isMobile: boolean): React.CSSProperties => ({
    position: "fixed",
    inset: 0,
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.lightboxOverlay,
    backdropFilter: "blur(20px)",
    padding: isMobile ? "24px" : "48px",
    cursor: "pointer",
  }),

  lightboxClose: {
    position: "absolute",
    top: "24px",
    right: "24px",
    fontFamily: fonts.body,
    fontSize: "12px",
    fontWeight: 600,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: colors.charcoal,
    background: "none",
    border: `1px solid ${colors.charcoal}`,
    padding: "8px 16px",
    cursor: "pointer",
  } as React.CSSProperties,

  lightboxImage: {
    maxWidth: "90vw",
    maxHeight: "85vh",
    objectFit: "contain",
  } as React.CSSProperties,
};

// -- Footer --

export const footer = {
  section: (isMobile: boolean): React.CSSProperties => ({
    padding: isMobile ? "48px 0 32px" : "80px 0 48px",
    backgroundColor: colors.charcoal,
    color: colors.primary,
  }),

  grid: (isMobile: boolean): React.CSSProperties => ({
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr",
    gap: isMobile ? "32px" : "48px",
    marginBottom: isMobile ? "48px" : "64px",
  }),

  heading: {
    ...labelCaps,
    color: colors.secondary,
    marginBottom: "16px",
  } as React.CSSProperties,

  text: {
    ...bodyText,
    color: colors.textLight,
  } as React.CSSProperties,

  link: {
    fontFamily: fonts.body,
    fontSize: "16px",
    fontWeight: 400,
    color: colors.textLight,
    transition: "color 200ms ease",
  } as React.CSSProperties,

  divider: {
    width: "100%",
    height: "1px",
    backgroundColor: colors.secondaryBorder,
    marginBottom: "24px",
  } as React.CSSProperties,

  copyright: {
    fontFamily: fonts.body,
    fontSize: "12px",
    fontWeight: 400,
    color: colors.textSubdued,
    textAlign: "center",
  } as React.CSSProperties,
};

// -- Hover color helpers (for event handlers) --

export const hoverColors = {
  navLink: { hover: colors.secondary, base: colors.charcoal },
  mobileLink: { hover: colors.surfaceAccent, base: "transparent" },
  footerLink: { hover: colors.secondary, base: colors.textLight },
};

// -- Skip-to-content link (accessible, visually hidden until focused) --

export const skipToContent: React.CSSProperties = {
  position: "absolute",
  left: "-9999px",
  top: "auto",
  width: "1px",
  height: "1px",
  overflow: "hidden",
  zIndex: 9999,
  padding: "12px 24px",
  backgroundColor: colors.charcoal,
  color: colors.primary,
  fontFamily: fonts.body,
  fontSize: "14px",
  fontWeight: 600,
};
