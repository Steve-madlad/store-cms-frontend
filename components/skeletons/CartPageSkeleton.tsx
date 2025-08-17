"use client";

export default function CartPageSkeleton() {
  return (
    <div className="page">
      <div className="page-padding container mx-auto">
        <div className="mb-10 h-6.5 w-50 animate-pulse rounded-full bg-gray-200"></div>

        <div className="flex flex-col justify-between gap-10 lg:flex-row">
          <div>
            <div className="space-y-10">
              {Array.from({ length: 3 }, (_, index) => (
                <div className="flex gap-4" key={index}>
                  <div className="size-50 animate-pulse rounded-md bg-gray-200"></div>
                  <div className="col justify-between">
                    <div className="space-y-3">
                      <span className="block h-6.5 w-50 animate-pulse rounded-full bg-gray-200"></span>
                      <span className="block h-6.5 w-30 animate-pulse rounded-full bg-gray-200"></span>
                      <span className="block h-6.5 w-20 animate-pulse rounded-full bg-gray-200"></span>
                      <span className="block h-6.5 w-20 animate-pulse rounded-full bg-gray-200"></span>
                    </div>
                    <span className="block h-6.5 w-20 animate-pulse rounded-full bg-gray-200"></span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="aspect-video w-full grow animate-pulse rounded-md bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
}
