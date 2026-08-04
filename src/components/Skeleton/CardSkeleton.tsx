import Skeleton from "./Skeleton";

const CardSkeleton = () => {
  return (
    <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-6 space-y-4">
      {/* Icon */}
      <Skeleton variant="circular" className="w-14 h-14" />
      
      {/* Title */}
      <Skeleton className="h-6 w-3/4" />
      
      {/* Description lines */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/6" />
      </div>
    </div>
  );
};

export default CardSkeleton;
