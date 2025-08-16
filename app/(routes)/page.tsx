import Billboard from "@/components/billboard";
import ProductGrid from "@/components/productsGrid";
import ProductGridSkeleton from "@/components/skeletons/ProductGridSkeleton";
import { Suspense } from "react";

export const revalidate = 86400;

export default function Home() {
  return (
    <div className="page">
      <div className="container mx-auto">
        <div className="page-padding space-y-15">
          <Suspense fallback={<ProductGridSkeleton showBillboard />}>
            <Billboard />
            <ProductGrid header="Featured Products 🔥" />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
