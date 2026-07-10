import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#6366F1",
          borderRadius: "8px",
          color: "#FAFAFA",
          fontSize: 18,
          fontWeight: 900,
        }}
      >
        AF
      </div>
    ),
    { ...size }
  );
}
