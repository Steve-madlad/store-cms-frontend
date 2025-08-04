"use server";

import type { Product } from "@/model/types";

const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

export async function getProducts(query?: Query): Promise<Product[]> {
  try {
    const url = new URL(apiUrl);
    const params = new URLSearchParams();

    const queryParams = {
      categoryId: query?.categoryId,
      colorId: query?.colorId,
      sizeId: query?.sizeId,
      isFeatured: String(query?.isFeatured),
    };

    Object.entries(queryParams).forEach(([key, value]) => {
      if (value !== undefined && value !== "undefined") params.set(key, value);
    });

    url.search = params.toString();

    const res = await fetch(url);
    const data = await res.json();

    console.log("data", data.data);

    return data?.data;
  } catch (error) {
    console.error(error);
  }

  return [];
}
