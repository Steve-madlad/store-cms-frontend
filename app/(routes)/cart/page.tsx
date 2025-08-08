"use client";

import { Button } from "@/components/ui/button";
import useCart from "@/hooks/useCart";
import { currencyFormat } from "@/lib/utils";
import { MoveRight, Trash } from "lucide-react";
import Image from "next/image";

export default function CartPage() {
  const { items, removeItem, removeAll } = useCart();

  return (
    <div className="page">
      <div className="page-padding container mx-auto">
        <h1 className="mb-4 text-2xl font-semibold">Shopping Cart</h1>
        {items.length > 0 ? (
          <div className="flex flex-col gap-6 lg:flex-row">
            <div className="flex-1">
              {items.map((item) => (
                <div key={item.id} className="mt-5 flex gap-6 border-b pb-6">
                  <div className="relative aspect-square w-50 overflow-hidden rounded-md">
                    <Image
                      className="bg-gray-100 object-cover object-center"
                      fill
                      src={item.images[0].url}
                      alt={item.name}
                    />
                  </div>

                  <div className="col">
                    <p className="mb-1 text-xl font-semibold">{item.name}</p>
                    <p className="mb-3 text-lg font-semibold">
                      {currencyFormat.format(Number(item.price))}
                    </p>
                    <p className="mb-2">{item.size.name}</p>
                    <p className="align-center gap-3">
                      {item.color.name}{" "}
                      <span
                        className="border-primary size-6 rounded-full border"
                        style={{ backgroundColor: item.color.value }}
                      ></span>
                    </p>

                    <Button
                      className="border-destructive cursor text-destructive hover:text-destructive hover:bg-destructive/5 mt-auto rounded-full !px-5"
                      variant={"outline"}
                      onClick={() => removeItem(item.id)}
                    >
                      Remove Item <Trash />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="summary col w-full space-y-4 rounded-md bg-gray-100 p-5 lg:w-lg">
              <div className="border-b pb-4 text-lg font-semibold">
                Order Summary
              </div>

              <div className="flex-between">
                <p>Grand Total</p>
                <b>
                  {currencyFormat.format(
                    items.reduce((acc, item) => {
                      return acc + Number(item.price);
                    }, 0),
                  )}
                </b>
              </div>

              <Button className="group cursor flex gap-4 rounded-full">
                Checkout
                <span className="group-hover:animate-[horizontal-bounce_1s_infinite]">
                  <MoveRight />
                </span>
              </Button>
            </div>
          </div>
        ) : (
          <p className="mt-40 text-center text-xl">Your cart is empty</p>
        )}
      </div>
    </div>
  );
}
