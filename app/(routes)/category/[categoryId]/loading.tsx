import ProductGridSkeleton from "@/components/skeletons/ProductGridSkeleton";
import React from "react";

export default function loading() {
  return (
    <div className="container mx-auto px-6 pt-10">
      <ProductGridSkeleton showBillboard showFilters />
    </div>
  );
}
