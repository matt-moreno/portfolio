import { PropsWithChildren } from "react";
import "./Card.css";

export interface CardInfoTypes extends PropsWithChildren<object> {
  className?: string;
}

export function CardInfo({ children, className }: CardInfoTypes) {
  return <div className={`card-info ${className}`}>{children}</div>;
}
