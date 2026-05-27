import React from "react";

type GridProps = {
  children: React.ReactNode;
  container?: boolean;
  item?: boolean;
  xs?: number;
  sm?: number;
  spacing?: number;
  alignItems?: "center" | "start" | "end" | "stretch";
  className?: string;
};

export default function Grid({
  children,
  container,
  item,
  xs,
  sm,
  spacing = 0,
  alignItems,
  className = "",
}: GridProps) {
  const mobileSpan = Math.max(1, Math.min(12, Math.round(xs || 12)));
  const desktopSpan = Math.max(1, Math.min(12, Math.round(sm || xs || 12)));
  const style = container
    ? ({
        display: "grid",
        gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
        gap: `${spacing * 8}px`,
        alignItems,
      } as React.CSSProperties)
    : ({
        gridColumn: `span ${mobileSpan} / span ${mobileSpan}`,
        "--grid-sm-span": desktopSpan,
      } as React.CSSProperties);

  return (
    <div className={`${item ? "mock-grid-item" : ""} ${className}`} style={style}>
      {children}
    </div>
  );
}
