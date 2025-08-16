"use client";

import { getProducts } from "@/actions/productActions";
import { Product, ProductQueryParams } from "@/model/types";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ProductCard } from "./productCard";
import ProductGridSkeleton from "./skeletons/ProductGridSkeleton";

export default function ProductGrid({
  categoryId,
  header,
}: ProductQueryParams & { header?: string }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true); // Add explicit loading state

  const searchParams = useSearchParams();
  const sizeId = searchParams.get("sizeId") ?? undefined;
  const colorId = searchParams.get("colorId") ?? undefined;

  const query: ProductQueryParams = {
    colorId,
    sizeId,
    categoryId,
  };

  useEffect(() => {
    let isMounted = true;

    const fetchProducts = async () => {
      setIsLoading(true); // Set loading to true when params change
      const products = await getProducts(query);

      if (isMounted) {
        setProducts(products);
        setIsLoading(false); // Set loading to false after fetch completes
      }
    };

    fetchProducts().catch(() => {
      if (isMounted) {
        setProducts([]);
        setIsLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [colorId, sizeId, categoryId]);

  if (isLoading) {
    return <ProductGridSkeleton />;
  }

  return (
    <section>
      {header && <h1 className="text-2xl font-semibold">{header}</h1>}
      <div className="mt-5 grid grid-cols-1 place-items-center gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {!products.length && (
        <div className="text-center text-2xl font-semibold">
          No products found :(
        </div>
      )}
    </section>
  );
}
