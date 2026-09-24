import { forwardRef, useEffect, useId, useRef, useState } from "react";
import { cn } from "@/lib/utils";

// Only Chromium can run an SVG filter inside backdrop-filter. Safari and
// Firefox accept the syntax but render nothing, so gate on the Chromium brand
// rather than CSS.supports(). Everyone else keeps the plain frosted .glass.
const supportsRefraction =
  typeof navigator !== "undefined" &&
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  !!(navigator as any).userAgentData?.brands?.some(
    (b: { brand: string }) => b.brand === "Chromium",
  );

interface GlassSurfaceProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Corner radius in px, or "full" for a pill (half the height). */
  radius?: number | "full";
  /** How far in from the edge the glass bends light, in px. */
  bezel?: number;
  /** Displacement strength; larger values bend the backdrop further. */
  strength?: number;
  /** Backdrop blur in px. Kept low so content stays visible through the glass. */
  blur?: number;
}

/**
 * Builds a displacement map for a rounded rect: flat in the middle, bending
 * inward toward each edge like the rim of a lens. Red encodes x offset,
 * green encodes y offset, 128 is "no shift".
 */
function buildDisplacementMap(
  width: number,
  height: number,
  radius: number,
  bezel: number,
) {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) return "";

  const image = ctx.createImageData(width, height);
  const hw = width / 2;
  const hh = height / 2;
  const r = Math.min(radius, hw, hh);

  // Signed distance to the rounded rect edge (negative inside)
  const sdf = (x: number, y: number) => {
    const qx = Math.abs(x - hw) - (hw - r);
    const qy = Math.abs(y - hh) - (hh - r);
    const outside = Math.hypot(Math.max(qx, 0), Math.max(qy, 0));
    return outside + Math.min(Math.max(qx, qy), 0) - r;
  };

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const px = x + 0.5;
      const py = y + 0.5;
      const depth = -sdf(px, py);
      let dx = 0;
      let dy = 0;

      if (depth > 0 && depth < bezel) {
        // Outward normal from the SDF gradient
        const nx = sdf(px + 1, py) - sdf(px - 1, py);
        const ny = sdf(px, py + 1) - sdf(px, py - 1);
        const len = Math.hypot(nx, ny) || 1;
        // Ease so the bend is strongest right at the rim
        const t = 1 - depth / bezel;
        const magnitude = t * t;
        dx = (-nx / len) * magnitude;
        dy = (-ny / len) * magnitude;
      }

      const i = (y * width + x) * 4;
      image.data[i] = 128 + dx * 127;
      image.data[i + 1] = 128 + dy * 127;
      image.data[i + 2] = 128;
      image.data[i + 3] = 255;
    }
  }

  ctx.putImageData(image, 0, 0);
  return canvas.toDataURL();
}

const GlassSurface = forwardRef<HTMLDivElement, GlassSurfaceProps>(
  (
    {
      radius = "full",
      bezel = 16,
      strength = 34,
      blur = 1.5,
      className,
      style,
      children,
      ...props
    },
    forwardedRef,
  ) => {
    const filterId = `liquid-glass-${useId().replace(/:/g, "")}`;
    const localRef = useRef<HTMLDivElement | null>(null);
    const [map, setMap] = useState<{ url: string; w: number; h: number } | null>(
      null,
    );

    useEffect(() => {
      const el = localRef.current;
      if (!supportsRefraction || !el) return;

      const update = () => {
        const w = Math.round(el.offsetWidth);
        const h = Math.round(el.offsetHeight);
        if (!w || !h) return;
        const r = radius === "full" ? h / 2 : radius;
        setMap((prev) =>
          prev && prev.w === w && prev.h === h
            ? prev
            : { url: buildDisplacementMap(w, h, r, bezel), w, h },
        );
      };

      update();
      const observer = new ResizeObserver(update);
      observer.observe(el);
      return () => observer.disconnect();
    }, [radius, bezel]);

    const refractStyle: React.CSSProperties | undefined = map
      ? {
          backdropFilter: `url(#${filterId}) saturate(180%)`,
          WebkitBackdropFilter: `url(#${filterId}) saturate(180%)`,
        }
      : undefined;

    return (
      <div
        ref={(node) => {
          localRef.current = node;
          if (typeof forwardedRef === "function") forwardedRef(node);
          else if (forwardedRef) forwardedRef.current = node;
        }}
        className={cn("glass", className)}
        style={{ ...style, ...refractStyle }}
        {...props}
      >
        {map && (
          <svg aria-hidden="true" width="0" height="0" className="absolute">
            <filter
              id={filterId}
              x="0"
              y="0"
              width={map.w}
              height={map.h}
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur in="SourceGraphic" stdDeviation={blur} result="blur" />
              <feImage
                href={map.url}
                x="0"
                y="0"
                width={map.w}
                height={map.h}
                result="map"
              />
              <feDisplacementMap
                in="blur"
                in2="map"
                scale={strength}
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          </svg>
        )}
        {children}
      </div>
    );
  },
);

GlassSurface.displayName = "GlassSurface";

export default GlassSurface;
