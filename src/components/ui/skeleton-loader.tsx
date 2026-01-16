import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

export const Skeleton = ({ className }: SkeletonProps) => {
  return (
    <div className={cn("skeleton rounded-lg", className)} />
  );
};

export const CardSkeleton = () => {
  return (
    <div className="glass-card p-6 space-y-4">
      <Skeleton className="h-12 w-12 rounded-xl" />
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
    </div>
  );
};

export const HeroSkeleton = () => {
  return (
    <div className="space-y-8 animate-pulse">
      <Skeleton className="h-16 w-3/4 mx-auto" />
      <Skeleton className="h-6 w-1/2 mx-auto" />
      <div className="flex gap-4 justify-center">
        <Skeleton className="h-12 w-36 rounded-full" />
        <Skeleton className="h-12 w-36 rounded-full" />
      </div>
    </div>
  );
};

export const TableSkeleton = ({ rows = 5 }: { rows?: number }) => {
  return (
    <div className="space-y-3">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="flex gap-4">
          <Skeleton className="h-12 w-12 rounded-lg" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-1/3" />
            <Skeleton className="h-3 w-1/2" />
          </div>
          <Skeleton className="h-8 w-24 rounded-lg" />
        </div>
      ))}
    </div>
  );
};
