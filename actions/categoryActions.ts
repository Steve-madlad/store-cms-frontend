"use server";

import type { Category } from "@/model/types";

const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export async function getCategories(): Promise<Category[]> {
  try {
    const res = await fetch(apiUrl);
    const data = await res.json();

    return data?.data;
  } catch (error) {
    console.error(error);
  }

  return [];
}
