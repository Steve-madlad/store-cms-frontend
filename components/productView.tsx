"use client";

import useCart from "@/hooks/useCart";
import { currencyFormat } from "@/lib/utils";
import type { Product } from "@/model/types";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export default function ProductView({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  const { addItem } = useCart();

  const addToCart = () => {
    addItem(product);
  };

  return (
    <div className={className}>
      <Tabs defaultValue={product?.images[0].id} className="max-w-120 flex-1">
        {product?.images.map((image) => (
          <TabsContent
            key={image.id}
            className="relative mb-4 aspect-square overflow-hidden rounded-md border bg-gray-100 shadow-xs"
            value={image.id}
          >
            <Image
              src={image.url}
              alt="background blur"
              fill
              className="scale-110 object-cover blur-2xl brightness-75"
              quality={20}
            />

            <Image
              src={image.url}
              alt="product"
              fill
              className="relative object-contain"
              priority
            />
          </TabsContent>
        ))}

        <TabsList className="flex h-fit gap-2 bg-transparent">
          {product?.images.map((image) => (
            <TabsTrigger
              key={image.id}
              value={image.id}
              className="bg-muted cbursor group cursor focus-visible:ring-muted data-[state=active]:ring-primary relative aspect-square h-12.5 overflow-hidden !rounded-sm border-0 !p-0 ring-transparent !outline-0 transition data-[state=active]:ring-1"
            >
              <Image
                src={image.url}
                alt="product"
                fill
                quality={20}
                className="scale-105 object-cover transition-transform group-hover:scale-110"
              />
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="flex-1/12 sm:px-6 lg:flex-1">
        <div className={"space-y-1 border-b pb-2"}>
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

        <Button onClick={addToCart} className="cursor rounded-full !px-5">
          Add to Cart <ShoppingCart />
        </Button>
      </div>
    </div>
  );
}
