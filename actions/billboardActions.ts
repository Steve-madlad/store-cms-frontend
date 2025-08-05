"use server";

import type { Billboard } from "@/model/types";

const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

export async function getBillboard(id: string): Promise<Billboard | null> {
  try {
    const res = await fetch(`${apiUrl}/${id}`);
    const data = await res.json();

    return data?.data;
  } catch (error) {
    console.error(error);
  }

  return null;
}
