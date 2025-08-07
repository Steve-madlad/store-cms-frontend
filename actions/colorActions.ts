"use server";

import type { Color, ProductQueryParams } from "@/model/types";

const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

export async function getColors(query?: ProductQueryParams): Promise<Color[]> {
  try {
    const res = await fetch(apiUrl);
    const data = await res.json();

    return data?.data;
  } catch (error) {
    console.error(error);
  }

  return [];
}
