import { getBillboards } from "@/actions/billboardActions";
import Billboard from "@/components/billboard";
import Products from "@/components/products";

export default async function Home() {
  const billboards = await getBillboards(
    "16a52cc3-a3f1-4004-b63b-b6fedbf0d19d",
  );

  return (
    <div className="page">
      <div className="container mx-auto">
        <div className="space-y-10 px-6 pb-10">
          <Billboard data={billboards} />
          <Products />
        </div>
      </div>
    </div>
  );
}
