import Billboard from "@/components/billboard";
import ProductGrid from "@/components/productsGrid";

export default function Home() {
  return (
    <div className="page">
      <div className="container mx-auto">
        <div className="space-y-10 px-6">
          <Billboard />
          <ProductGrid header="Featured Products 🔥" />
        </div>
      </div>
    </div>
  );
}
