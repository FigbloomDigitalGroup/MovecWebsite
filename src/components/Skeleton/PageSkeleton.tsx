import Skeleton from "./Skeleton";
import CardSkeleton from "./CardSkeleton";

const PageSkeleton = () => {
  return (
    <div className="bg-white dark:bg-black min-h-screen py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-14 space-y-4">
          <Skeleton className="h-4 w-32 mx-auto" />
          <Skeleton className="h-12 w-96 mx-auto" />
          <Skeleton className="h-6 w-[500px] mx-auto" />
          <Skeleton className="h-1 w-24 mx-auto my-6" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <CardSkeleton key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageSkeleton;
