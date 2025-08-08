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

      <div className="mx-auto">
        <div className="grid grid-cols-1 place-items-center gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 8 }, (_, index) => (
            <div
              key={index}
              className="h-full min-h-70 w-full max-w-md animate-pulse rounded-md bg-gray-200"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

import { getSingleProduct } from "@/actions/productActions";
import ProductGrid from "@/components/productsGrid";
import ProductView from "@/components/productView";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { currencyFormat } from "@/lib/utils";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
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
      {/* Product Details */}

      <ProductView
        product={product}
        className="col container mx-auto border-b pb-5 sm:!flex-row"
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
