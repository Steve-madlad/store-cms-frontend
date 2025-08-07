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
      <div className="col container mx-auto border-b pb-5 sm:!flex-row">
        <Tabs defaultValue={product?.images[0].id} className="flex-1">
          {product?.images.map((image) => (
            <TabsContent
              key={image.id}
              className="relative mb-4 aspect-square w-full rounded-md border bg-gray-100 shadow-xs"
              value={image.id}
            >
              <Image
                src={image.url}
                alt="product"
                fill
                className="object-contain"
              />
            </TabsContent>
          ))}
          <TabsList className="flex h-fit gap-2 bg-transparent">
            {product?.images.map((image) => (
              <TabsTrigger
                key={image.id}
                value={image.id}
                className="bg-muted cursor group cursor focus-visible:ring-muted data-[state=active]:ring-primary relative aspect-square h-12.5 overflow-hidden !rounded-sm border-0 !p-0 ring-transparent !outline-0 transition data-[state=active]:ring-1"
              >
                <Image
                  src={image.url}
                  alt="product"
                  fill
                  quality={20}
                  className="scale-105 object-contain transition-transform group-hover:scale-110"
                />
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="flex-1 sm:px-6">
          <div className="space-y-1 border-b pb-2">
            <h1 className="text-2xl font-semibold">{product?.name}</h1>
            <p className="text-lg font-semibold">
              {currencyFormat.format(Number(product?.price))}
            </p>
          </div>

          <div className="my-3 mb-6 space-y-2">
            <p className="flex gap-4">
              <b>Size:</b> {product.size.name}
            </p>
            <div className="align-center gap-3">
              <b>Color:</b>
              <span
                title={product.color.value}
                style={{ backgroundColor: product.color.value }}
                className="border-primary block size-7 rounded-full border"
              ></span>
            </div>
          </div>

          <Button className="cursor rounded-full !px-5">
            Add to Cart <ShoppingCart />
          </Button>
        </div>
      </div>

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
    <div className="page px-6 pt-10">
      <Suspense fallback={<ProductAndGridSkeleton />}>
        <ProductContent productId={productId} />
      </Suspense>
    </div>
  );
}
