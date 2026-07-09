import "@/styles/components/ui/skeleton.css";

interface SkeletonProps {
  className?: string;
  delayMs?: number;
}

export function Skeleton({ className, delayMs = 0 }: SkeletonProps) {
  return (
    <div
      className={`skeleton ${className ?? ""}`}
      style={{ "--shimmer-delay": `${delayMs}ms` } as React.CSSProperties}
      aria-hidden="true"
    />
  );
}
