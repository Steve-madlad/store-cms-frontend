import React from "react";

export default function ProductGridSkeleton({
  showBillboard = false,
  showFilters = false,
}: {
  showBillboard?: boolean;
  showFilters?: boolean;
}) {
  return (
    <div className="mx-auto space-y-10">
      {showBillboard && (
        <div className="h-75 animate-pulse rounded-md bg-gray-200"></div>
      )}
      {showFilters && (
        <div className="space-y-5">
          <div className="h-7.5 w-50 animate-pulse rounded-md bg-gray-200"></div>
          <div className="flex gap-4">
            <div className="h-10 w-75 animate-pulse rounded-md bg-gray-200"></div>
            <div className="h-10 w-75 animate-pulse rounded-md bg-gray-200"></div>
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 place-items-center gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 8 }, (_, index) => (
          <div
            key={index}
            className="h-full min-h-70 w-full max-w-md animate-pulse rounded-md bg-gray-200"
          />
        ))}
      </div>
    </div>
  );
}
