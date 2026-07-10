import { ImageResponse } from "next/og";

export async function GET() {
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
          color: "#FAFAFA",
          fontSize: 90,
          fontWeight: 900,
        }}
      >
        AF
      </div>
    ),
    { width: 192, height: 192 }
  );
}
