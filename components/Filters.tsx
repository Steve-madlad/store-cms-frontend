"use client";

import type { Color, Size } from "@/model/types";
import { SlidersHorizontal } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function Filters({
  sizes,
  colors,
  values,
}: {
  sizes: Size[];
  colors: Color[];
  values: { sizeId?: string; colorId?: string };
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const onSizeChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sizeId", value);
    router.push(`?${params.toString()}`);
  };

  const onColorChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("colorId", value);
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="space-y-5">
      <div className="align-center gap-4">
        <h1 className="text-2xl font-semibold">Filters</h1>
        <SlidersHorizontal size={20} />
      </div>

      <div className="flex flex-col gap-4 sm:!flex-row sm:items-start">
        <Select defaultValue={values.sizeId} onValueChange={onSizeChange}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Sizes" />
          </SelectTrigger>
          <SelectContent>
            {sizes.map((size) => (
              <SelectItem key={size.id} value={size.id}>
                {size.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select defaultValue={values.colorId} onValueChange={onColorChange}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Color" />
          </SelectTrigger>
          <SelectContent>
            {colors.map((color) => (
              <SelectItem key={color.id} value={color.id}>
                {color.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
