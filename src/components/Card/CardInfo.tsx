import { PropsWithChildren } from "react";

export interface CardInfoTypes extends PropsWithChildren<object> {
  className?: string;
}

export function CardInfo({ children, className = "" }: CardInfoTypes) {
  return (
    <div
      className={`bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}
    >
      <div className="text-slate-900 dark:text-slate-100">{children}</div>
    </div>
  );
}
