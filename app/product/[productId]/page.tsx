// // app/product/[productId]/page.tsx
// import { getSingleProduct } from "@/actions/productActions";
// import ProductGrid from "@/components/productsGrid";
// import Image from "next/image";
// import { Suspense } from "react";

// // Separate component that fetches data
// async function ProductContent({ productId }: { productId: string }) {
//   const product = await getSingleProduct(productId);

//   if (!product) {
//     return (
//       <div className="page col-center text-4xl">
//         <p>404</p>
//         <h1 className="text-3xl font-medium">Product not found :(</h1>
//       </div>
//     );
//   }

//   return (
//     <div className="page container mx-auto">
//       <h1>{product?.name}</h1>
//       <p>{product?.price}</p>
//       <div className="relative aspect-video h-50 rounded-lg shadow-md">
//         <Image
//           fill
//           src={product?.images[0].url || "/placeholder.svg"}
//           alt="product"
//         />
//       </div>
//     </div>
//   );
// }

// // Loading component

// function ProductGridSkeleton() {
//   return (
//   );
// }

// // Main page component
// export default async function Page({
//   params,
// }: {
//   params: Promise<{ productId: string }>;
// }) {
//   const { productId } = await params;

//   return (
//     <div className="page px-6 pt-5">
//       <Suspense fallback={<ProductSkeleton />}>
//         <ProductContent productId={productId} />
//       </Suspense>

//       <Suspense fallback={<ProductGridSkeleton />}>
//         <div className="container mx-auto">
//           <ProductGrid header="Similar Products" />
//         </div>
//       </Suspense>
//       {/* <ProductGridSkeleton /> */}
//     </div>
//   );
// }

function ProductAndGridSkeleton() {
  return (
    <div>
      <div className="page container mx-auto">
        <div className="animate-pulse">
          <div className="mb-4 h-8 w-3/4 rounded-md bg-gray-200"></div>
          <div className="mb-6 h-6 w-1/4 rounded-md bg-gray-200"></div>
          <div className="aspect-video h-50 rounded-lg bg-gray-200 shadow-md"></div>
        </div>
      </div>

      <div className="container mx-auto">
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

// app/product/[productId]/page.tsx
import { getSingleProduct } from "@/actions/productActions";
import ProductGrid from "@/components/productsGrid";
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
      <div className="container mx-auto h-[50vh]">
        <h1>{product?.name}</h1>
        <p>{product?.price}</p>
        <div className="relative aspect-video h-50 rounded-lg shadow-md">
          <Image
            fill
            src={product?.images[0].url || "/placeholder.svg"}
            alt="product"
          />
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
    <div className="page px-6 pt-5">
      <Suspense fallback={<ProductAndGridSkeleton />}>
        <ProductContent productId={productId} />
      </Suspense>
    </div>
  );
}
