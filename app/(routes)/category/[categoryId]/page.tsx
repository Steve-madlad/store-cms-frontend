import { getSingleCategory } from "@/actions/categoryActions";
import { getColors } from "@/actions/colorActions";
import { getSizes } from "@/actions/sizeActions";
import Billboard from "@/components/billboard";
import Filters from "@/components/Filters";
import ProductGrid from "@/components/productsGrid";
import React from "react";

export default async function page({
  params,
  searchParams,
}: {
  params: Promise<{ categoryId: string }>;
  searchParams: Promise<{ sizeId?: string; colorId?: string }>;
}) {
  const { categoryId } = await params;
  const { sizeId, colorId } = await searchParams;

  const category = await getSingleCategory(categoryId);
  const sizes = await getSizes();
  const colors = await getColors();

  return (
    <div className="page page-padding container mx-auto space-y-15">
      <Billboard data={category?.billboard} />
      <Filters sizes={sizes} colors={colors} values={{ sizeId, colorId }} />
      <ProductGrid categoryId={categoryId} sizeId={sizeId} colorId={colorId} />
    </div>
  );
}
