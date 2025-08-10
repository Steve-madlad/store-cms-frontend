"use server";

import type { Size, ProductQueryParams } from "@/model/types";

const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

export async function getSizes(query?: ProductQueryParams): Promise<Size[]> {
  try {
    const res = await fetch(apiUrl);
    const data = await res.json();

    return data?.data;
  } catch (error) {
    console.error(error);
  }

  return [];
}
