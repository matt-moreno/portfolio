import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

type AnimatedNumberProps = {
  value: number;
  suffix?: string;
  decimals?: number;
};

export default function AnimatedNumber({
  value,
  suffix = "",
  decimals = 0,
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const reduce = useReducedMotion();

  const format = (n: number) =>
    `${n.toLocaleString(undefined, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })}${suffix}`;

  useEffect(() => {
    const node = ref.current;
    if (!node || !isInView) return;

    if (reduce) {
      node.textContent = format(value);
      return;
    }

    const controls = animate(0, value, {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        node.textContent = format(latest);
      },
    });

    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView, value, suffix, decimals, reduce]);

  return <span ref={ref}>{reduce ? format(value) : format(0)}</span>;
}
