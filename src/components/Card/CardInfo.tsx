import { PropsWithChildren } from "react";

export interface CardInfoTypes extends PropsWithChildren<object> {
  className?: string;
}

export function CardInfo({ children, className = "" }: CardInfoTypes) {
  return (
    <div
      className={`bg-card border border-border rounded-xl p-6 transition-colors hover:border-primary/40 ${className}`}
    >
      <div className="text-card-foreground">{children}</div>
    </div>
  );
}
