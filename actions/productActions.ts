"use server";

import type { Product, ProductQueryParams } from "@/model/types";

const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/products`;

export async function getProducts(
  query?: ProductQueryParams,
): Promise<Product[]> {
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

    return data?.data;
  } catch (error) {
    console.error(error);
  }

  return [];
}

export async function getSingleProduct(id: string): Promise<Product | null> {
  try {
    const res = await fetch(`${apiUrl}/${id}`);
    if (!res.ok && res.status === 500) {
      throw new Error("Something went wrong, please try again later.");
    }

    const data = await res.json();

    return data?.data;
  } catch (error) {
    console.error(error);
  }

  return null;
}
