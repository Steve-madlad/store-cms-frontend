import { getProducts } from "@/actions/productActions";
import { ProductQueryParams } from "@/model/types";
import { ProductCard } from "./productCard";

export default async function ProductGrid({
  isFeatured,
  colorId,
  sizeId,
  categoryId,
  header,
}: ProductQueryParams & { header?: string }) {
  const query: ProductQueryParams = {
    isFeatured,
    colorId,
    sizeId,
    categoryId,
  };
  const products = await getProducts(query);

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
