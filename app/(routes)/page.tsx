import Billboard from "@/components/billboard";
import ProductGrid from "@/components/productsGrid";

export const revalidate = 86400;

export default function Home() {
  return (
    <div className="page">
      <div className="container mx-auto">
        <div className="page-padding space-y-15">
          <Billboard />
          <ProductGrid header="Featured Products 🔥" />
        </div>
      </div>
    </div>
  );
}
