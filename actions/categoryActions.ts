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

export async function getSingleCategory(id: string): Promise<Category | null> {
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
