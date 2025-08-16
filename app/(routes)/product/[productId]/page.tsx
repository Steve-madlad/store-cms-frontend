function ProductAndGridSkeleton() {
  return (
    <div className="container mx-auto">
      <div className="mx-auto h-[50vh]">
        <div className="animate-pulse">
          <div className="mb-4 h-8 w-3/4 rounded-md bg-gray-200"></div>
          <div className="mb-6 h-6 w-1/4 rounded-md bg-gray-200"></div>
          <div className="aspect-video h-50 rounded-lg bg-gray-200 shadow-md"></div>
        </div>
      </div>

      <ProductGridSkeleton />
    </div>
  );
}

import { getSingleProduct } from "@/actions/productActions";
import ProductGrid from "@/components/productsGrid";
import ProductView from "@/components/productView";
import ProductGridSkeleton from "@/components/skeletons/ProductGridSkeleton";
import { Suspense } from "react";

async function ProductContent({ productId }: { productId: string }) {
  const product = await getSingleProduct(productId);

  if (!product) {
    return (
      <div className="page col-center text-4xl">
        <p>404</p>
        <h1 className="text-3xl font-medium">Product not found :(</h1>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <ProductView
        product={product}
        className="col container mx-auto gap-6 border-b pb-5 sm:!flex-row sm:gap-0"
      />

      <div className="container mx-auto">
        <ProductGrid
          header="Similar Products"
          categoryId={product?.category.id}
        />
      </div>
    </div>
  );
}

export default async function Page({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;

  return (
    <div className="page page-padding">
      <Suspense fallback={<ProductAndGridSkeleton />}>
        <ProductContent productId={productId} />
      </Suspense>
    </div>
  );
}
