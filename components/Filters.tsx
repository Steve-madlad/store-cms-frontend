"use client";

import type { Color, Size } from "@/model/types";
import { SlidersHorizontal, Trash2, X } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import useLoading from "@/hooks/useLoading";

export default function Filters({
  sizes,
  colors,
}: {
  sizes: Size[];
  colors: Color[];
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const loading = useLoading();

  const sizeId = searchParams.get("sizeId") ?? undefined;
  const colorId = searchParams.get("colorId") ?? undefined;

  const validSizeId = sizes.some((size) => size.id === sizeId)
    ? sizeId
    : undefined;
  const validColorId = colors.some((color) => color.id === colorId)
    ? colorId
    : undefined;

  const [appliedFilters, setAppliedFilters] = useState<
    Record<string, string>[]
  >([]);

  useEffect(() => {
    const paramsArray = Array.from(searchParams.entries());
    const paramsObject = Object.fromEntries(paramsArray);

    setAppliedFilters(
      Object.keys(paramsObject).map((item) => {
        let label = item;
        if (item === "colorId") {
          label =
            colors.find((color) => color.id === paramsObject[item])?.name ??
            paramsObject[item];
        } else if (item === "sizeId") {
          label =
            sizes.find((size) => size.id === paramsObject[item])?.name ??
            paramsObject[item];
        }
        return {
          key: item,
          value: paramsObject[item],
          label,
        };
      }),
    );
  }, [searchParams, colors, sizes]);

  // Helper function to update URL with new params
  const updateSearchParams = useCallback(
    (key: string, value: string | null) => {
      const params = new URLSearchParams(window.location.search);
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }

      const newUrl = `${pathname}?${params.toString()}`;
      window.history.pushState({}, "", newUrl);
      router.refresh();
    },
    [pathname, router],
  );

  const onSizeChange = (value: string) => {
    updateSearchParams("sizeId", value);
  };

  const onColorChange = (value: string) => {
    updateSearchParams("colorId", value);
  };

  const removeFilter = (key: string) => {
    updateSearchParams(key, null);
  };

  const clearParams = useCallback(() => {
    const pathname = window.location.pathname;
    window.history.pushState({}, "", pathname);
    router.refresh();
  }, [pathname, router]);

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-semibold">Filters</h1>
        <div className="relative">
          <SlidersHorizontal size={20} />
          {searchParams.size > 0 && (
            <Badge className="absolute -top-3 -right-3 size-4 rounded-full px-1 font-mono text-[10px] tabular-nums">
              {searchParams.size}
            </Badge>
          )}
        </div>
      </div>

      {appliedFilters.length > 0 && (
        <div className="flex gap-3">
          {appliedFilters.map((filter) => (
            <Badge key={filter.key} className="rounded-full px-3">
              {filter.label}
              <Button
                className="size-auto rounded-full p-0"
                variant="ghost"
                size="icon"
                onClick={() => removeFilter(filter.key)}
              >
                <X />
              </Button>
            </Badge>
          ))}
        </div>
      )}

      <div className="flex flex-col gap-4 sm:!flex-row sm:items-start">
        <Select
          value={validSizeId || ""}
          onValueChange={onSizeChange}
          disabled={loading.isLoading}
        >
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

        <Select
          value={validColorId || ""}
          onValueChange={onColorChange}
          disabled={loading.isLoading}
        >
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

        {appliedFilters.length > 0 && (
          <Button
            disabled={loading.isLoading}
            variant="outline"
            onClick={clearParams}
          >
            <Trash2 /> Clear All
          </Button>
        )}
      </div>
    </div>
  );
}
