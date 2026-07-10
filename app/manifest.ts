import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Abdul Fadiga | UI/UX-Focused Full-Stack Developer",
    short_name: "Abdul Fadiga",
    description:
      "Abdul Fadiga is a UI/UX-focused full-stack developer and product engineer building scalable, user-centered web products.",
    start_url: "/",
    display: "standalone",
    background_color: "#030303",
    theme_color: "#6366F1",
    icons: [
      { src: "/icon-192", sizes: "192x192", type: "image/png" },
      { src: "/icon-512", sizes: "512x512", type: "image/png" },
    ],
  };
}
