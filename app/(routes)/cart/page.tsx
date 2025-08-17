"use client";

import CartPageSkeleton from "@/components/skeletons/CartPageSkeleton";
import { Button } from "@/components/ui/button";
import { ConfirmationModal } from "@/components/ui/custom/confirmationModal";
import useCart from "@/hooks/useCart";
import { useLocal } from "@/hooks/useLocal";
import { currencyFormat } from "@/lib/utils";
import axios from "axios";
import { Loader2, MoveRight, Trash } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function CartPage() {
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const { items, removeItem, removeAll } = useCart();
  const local = useLocal();
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    if (searchParams.get("success")) {
      router.replace(pathname);
      toast.success("Payment completed.");
      removeAll();
    }

    if (searchParams.get("canceled")) {
      router.replace(pathname);
      toast.error("Something went wrong.");
    }
  }, [searchParams, removeAll]);

  const onCheckout = async () => {
    setCheckoutLoading(true);
    try {
      const response = await axios.post(`${baseUrl}/checkout`, {
        productIds: items.map((item) => item.id),
      });

      window.location = response.data.data.url;
    } catch (error) {
      toast.error("Something went wrong, please try again later.");
      setCheckoutLoading(false);
    }
  };

  if (!local) {
    return <CartPageSkeleton />;
  }

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

              <div className="col mt-5 gap-3">
                <Button
                  onClick={onCheckout}
                  disabled={!items.length || checkoutLoading}
                  className="group cursor flex w-full gap-4 rounded-full"
                >
                  Checkout
                  {!checkoutLoading && (
                    <span className="group-hover:animate-[horizontal-bounce_1s_infinite]">
                      <MoveRight />
                    </span>
                  )}
                  {checkoutLoading && <Loader2 className="animate-spin" />}
                </Button>

                <ConfirmationModal
                  trigger="Clear Cart"
                  title="Clear Cart?"
                  description="Are you sure you want to clear your cart?"
                  handleConfirm={() => {
                    removeAll();
                    toast.success("Cart Emptied!");
                  }}
                  className="cursor text-primary-foreground !ring-destructive !border-destructive bg-destructive hover:text-destructive focus:text-destructive w-full rounded-full border hover:bg-white focus:bg-white focus:!ring-1"
                />
              </div>
            </div>
          </div>
        ) : (
          <p className="mt-40 text-center text-xl">Your cart is empty</p>
        )}
      </div>
    </div>
  );
}
