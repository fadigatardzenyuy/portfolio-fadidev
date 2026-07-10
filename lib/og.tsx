export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

export const ogFont = {
  bg: "#030303",
  fg: "#FAFAFA",
  accent: "#6366F1",
  muted: "rgba(250,250,250,0.55)",
};

export function OgCard({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: ogFont.bg,
        backgroundImage:
          "radial-gradient(circle at 78% 22%, rgba(99,102,241,0.35), rgba(3,3,3,0) 55%)",
        padding: "72px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <div
          style={{
            width: "14px",
            height: "14px",
            borderRadius: "9999px",
            backgroundColor: ogFont.accent,
          }}
        />
        <div
          style={{
            fontSize: "24px",
            fontWeight: 700,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: ogFont.muted,
          }}
        >
          Abdul Fadiga
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        {eyebrow && (
          <div
            style={{
              fontSize: "26px",
              fontWeight: 700,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: ogFont.accent,
            }}
          >
            {eyebrow}
          </div>
        )}
        <div
          style={{
            fontSize: "68px",
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: ogFont.fg,
            maxWidth: "1000px",
          }}
        >
          {title}
        </div>
        {subtitle && (
          <div
            style={{
              fontSize: "30px",
              fontWeight: 500,
              lineHeight: 1.4,
              color: ogFont.muted,
              maxWidth: "900px",
            }}
          >
            {subtitle}
          </div>
        )}
      </div>

      <div
        style={{
          display: "flex",
          fontSize: "22px",
          fontWeight: 700,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: ogFont.muted,
        }}
      >
        fadidev-studio.vercel.app
      </div>
    </div>
  );
}
