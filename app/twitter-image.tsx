import { ImageResponse } from "next/og";
import { OgCard, ogSize, ogContentType } from "@/lib/og";

export const alt = "Abdul Fadiga — UI/UX-Focused Full-Stack Developer";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="Full-Stack Developer"
        title="Building scalable, user-centered web products."
        subtitle="UI/UX-focused engineering, lead at SEED and GDG On Campus."
      />
    ),
    { ...size }
  );
}
