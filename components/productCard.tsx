"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { currencyFormat } from "@/lib/utils";
import { Product } from "@/model/types";
import { Expand, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import IconButton from "./IconButton";
import usePreviewModal from "@/hooks/usePreviewModal";
import useCart from "@/hooks/useCart";

export function ProductCard({ product }: { product: Product }) {
  const router = useRouter();
  const { onOpen } = usePreviewModal();
  const { addItem } = useCart();

  const showPreview = (e: React.MouseEvent) => {
    e.stopPropagation();
    onOpen(product);
  };

  const addToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem(product);
  };

  return (
    <Card
      className="group w-full max-w-md gap-3 py-4 duration-300 hover:shadow-md"
      onClick={() => {
        router.push(`/product/${product.id}`);
      }}
    >
      <CardHeader className="px-4">
        <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100">
          <Image
            alt="product image"
            fill
            src={product.images[0].url}
            className="object-cover duration-300 group-hover:scale-110"
          />

          <div className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 opacity-0 duration-300 group-hover:opacity-100">
            <div className="flex gap-x-4 text-gray-600">
              <IconButton
                className="scale-95 text-inherit hover:scale-115 hover:text-white"
                onClick={showPreview}
              >
                <Expand />
              </IconButton>

              <IconButton
                className="scale-95 text-inherit hover:scale-115 hover:text-white"
                onClick={addToCart}
              >
                <ShoppingCart />
              </IconButton>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="px-4">
        <p className="text-lg font-semibold">{product.name}</p>
        <p className="text-md text-muted-foreground mb-2">
          {product.category.name}
        </p>
        <p className="text-md font-bold">
          {currencyFormat.format(Number(product.price))}
        </p>
      </CardContent>
    </Card>
  );
}
