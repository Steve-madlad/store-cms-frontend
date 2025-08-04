"use client";

import { getProducts } from "@/actions/productActions";
import { currencyFormat } from "@/lib/utils";
import { Product } from "@/model/types";
import Image from "next/image";
import IconButton from "./IconButton";
import { Expand, ShoppingCart } from "lucide-react";

export default function Products() {
  const query = {
    isFeatured: true,
  };
  // const products = await getProducts(query);
  const products: Product[] = [
    {
      id: "7805fee4-21bf-4ac5-b174-51b329413dc",
      // storeId: "455bb7f7-13b9-42ba-a90c-4d44b032f6d6",
      // categoryId: "3c1b8005-f502-48f9-b881-d26185eacdd8",
      name: "VaporX Pro Kit",
      price: "49.99",
      isFeatured: true,
      // isArchived: false,
      // colorId: "1b9f6175-c1e3-4945-87cf-1d34c0d73e27",
      // sizeId: "d289c4c2-a8fc-4e35-a399-a405378fc713",
      // createdAt: "2025-08-04T16:05:10.675Z",
      // updatedAt: "2025-08-04T16:05:10.675Z",
      images: [
        {
          id: "1",
          url: "https://res.cloudinary.com/dwvuy59hs/image/upload/v1754323463/bei1tabvzbz0sebzrtpm.png",
        },
        {
          id: "2",
          url: "https://res.cloudinary.com/dwvuy59hs/image/upload/v1754323379/u3tjwf1za4jnqjgpg01i.png",
        },
      ],
      category: {
        id: "3c1b8005-f502-48f9-b881-d26185eacdd8",
        // storeId: "455bb7f7-13b9-42ba-a90c-4d44b032f6d6",
        billboard: {
          id: "cc50b716-90de-4dba-b7f5-1a92b40c69fc",
          label: "Pod Systems",
          imageUrl:
            "https://res.cloudinary.com/dwvuy59hs/image/upload/v1754323463/bei1tabvzbz0sebzrtpm.png",
        },
        name: "Pod Systems",
        // createdAt: "2025-07-31T21:45:14.937Z",
        // updatedAt: "2025-07-31T21:45:14.937Z",
      },
      color: {
        id: "1b9f6175-c1e3-4945-87cf-1d34c0d73e27",
        // storeId: "455bb7f7-13b9-42ba-a90c-4d44b032f6d6",
        name: "Royal Blue",
        value: "#3661DF",
        // createdAt: "2025-08-04T16:00:40.782Z",
        // updatedAt: "2025-08-04T16:00:40.782Z",
      },
      size: {
        id: "d289c4c2-a8fc-4e35-a399-a405378fc713",
        // storeId: "455bb7f7-13b9-42ba-a90c-4d44b032f6d6",
        name: "Medium",
        value: "M",
        // createdAt: "2025-07-30T21:10:36.279Z",
        // updatedAt: "2025-08-04T16:08:27.577Z",
      },
    },
    {
      id: "7805fee4-21bf-4ac5-b174-1b32b9413dc",
      // storeId: "455bb7f7-13b9-42ba-a90c-4d44b032f6d6",
      // categoryId: "3c1b8005-f502-48f9-b881-d26185eacdd8",
      name: "VaporX Pro Kit",
      price: "49.99",
      isFeatured: true,
      // isArchived: false,
      // colorId: "1b9f6175-c1e3-4945-87cf-1d34c0d73e27",
      // sizeId: "d289c4c2-a8fc-4e35-a399-a405378fc713",
      // createdAt: "2025-08-04T16:05:10.675Z",
      // updatedAt: "2025-08-04T16:05:10.675Z",
      images: [
        {
          id: "1",
          url: "https://res.cloudinary.com/dwvuy59hs/image/upload/v1754323463/bei1tabvzbz0sebzrtpm.png",
        },
        {
          id: "2",
          url: "https://res.cloudinary.com/dwvuy59hs/image/upload/v1754323379/u3tjwf1za4jnqjgpg01i.png",
        },
      ],
      category: {
        id: "3c1b8005-f502-48f9-b881-d26185eacdd8",
        // storeId: "455bb7f7-13b9-42ba-a90c-4d44b032f6d6",
        billboard: {
          id: "cc50b716-90de-4dba-b7f5-1a92b40c69fc",
          label: "Pod Systems",
          imageUrl:
            "https://res.cloudinary.com/dwvuy59hs/image/upload/v1754323463/bei1tabvzbz0sebzrtpm.png",
        },
        name: "Pod Systems",
        // createdAt: "2025-07-31T21:45:14.937Z",
        // updatedAt: "2025-07-31T21:45:14.937Z",
      },
      color: {
        id: "1b9f6175-c1e3-4945-87cf-1d34c0d73e27",
        // storeId: "455bb7f7-13b9-42ba-a90c-4d44b032f6d6",
        name: "Royal Blue",
        value: "#3661DF",
        // createdAt: "2025-08-04T16:00:40.782Z",
        // updatedAt: "2025-08-04T16:00:40.782Z",
      },
      size: {
        id: "d289c4c2-a8fc-4e35-a399-a405378fc713",
        // storeId: "455bb7f7-13b9-42ba-a90c-4d44b032f6d6",
        name: "Medium",
        value: "M",
        // createdAt: "2025-07-30T21:10:36.279Z",
        // updatedAt: "2025-08-04T16:08:27.577Z",
      },
    },
    {
      id: "75fee4-21bf-4ac5-b174-51b32b9413dc",
      // storeId: "455bb7f7-13b9-42ba-a90c-4d44b032f6d6",
      // categoryId: "3c1b8005-f502-48f9-b881-d26185eacdd8",
      name: "VaporX Pro Kit",
      price: "49.99",
      isFeatured: true,
      // isArchived: false,
      // colorId: "1b9f6175-c1e3-4945-87cf-1d34c0d73e27",
      // sizeId: "d289c4c2-a8fc-4e35-a399-a405378fc713",
      // createdAt: "2025-08-04T16:05:10.675Z",
      // updatedAt: "2025-08-04T16:05:10.675Z",
      images: [
        {
          id: "1",
          url: "https://res.cloudinary.com/dwvuy59hs/image/upload/v1754323463/bei1tabvzbz0sebzrtpm.png",
        },
        {
          id: "2",
          url: "https://res.cloudinary.com/dwvuy59hs/image/upload/v1754323379/u3tjwf1za4jnqjgpg01i.png",
        },
      ],
      category: {
        id: "3c1b8005-f502-48f9-b881-d26185eacdd8",
        // storeId: "455bb7f7-13b9-42ba-a90c-4d44b032f6d6",
        billboard: {
          id: "cc50b716-90de-4dba-b7f5-1a92b40c69fc",
          label: "Pod Systems",
          imageUrl:
            "https://res.cloudinary.com/dwvuy59hs/image/upload/v1754323463/bei1tabvzbz0sebzrtpm.png",
        },
        name: "Pod Systems",
        // createdAt: "2025-07-31T21:45:14.937Z",
        // updatedAt: "2025-07-31T21:45:14.937Z",
      },
      color: {
        id: "1b9f6175-c1e3-4945-87cf-1d34c0d73e27",
        // storeId: "455bb7f7-13b9-42ba-a90c-4d44b032f6d6",
        name: "Royal Blue",
        value: "#3661DF",
        // createdAt: "2025-08-04T16:00:40.782Z",
        // updatedAt: "2025-08-04T16:00:40.782Z",
      },
      size: {
        id: "d289c4c2-a8fc-4e35-a399-a405378fc713",
        // storeId: "455bb7f7-13b9-42ba-a90c-4d44b032f6d6",
        name: "Medium",
        value: "M",
        // createdAt: "2025-07-30T21:10:36.279Z",
        // updatedAt: "2025-08-04T16:08:27.577Z",
      },
    },
    {
      id: "7805fee4-21bf-4ac5-b174-51b32b9413c",
      // storeId: "455bb7f7-13b9-42ba-a90c-4d44b032f6d6",
      // categoryId: "3c1b8005-f502-48f9-b881-d26185eacdd8",
      name: "VaporX Pro Kit",
      price: "49.99",
      isFeatured: true,
      // isArchived: false,
      // colorId: "1b9f6175-c1e3-4945-87cf-1d34c0d73e27",
      // sizeId: "d289c4c2-a8fc-4e35-a399-a405378fc713",
      // createdAt: "2025-08-04T16:05:10.675Z",
      // updatedAt: "2025-08-04T16:05:10.675Z",
      images: [
        {
          id: "1",
          url: "https://res.cloudinary.com/dwvuy59hs/image/upload/v1754323463/bei1tabvzbz0sebzrtpm.png",
        },
        {
          id: "2",
          url: "https://res.cloudinary.com/dwvuy59hs/image/upload/v1754323379/u3tjwf1za4jnqjgpg01i.png",
        },
      ],
      category: {
        id: "3c1b8005-f502-48f9-b881-d26185eacdd8",
        // storeId: "455bb7f7-13b9-42ba-a90c-4d44b032f6d6",
        billboard: {
          id: "cc50b716-90de-4dba-b7f5-1a92b40c69fc",
          label: "Pod Systems",
          imageUrl:
            "https://res.cloudinary.com/dwvuy59hs/image/upload/v1754323463/bei1tabvzbz0sebzrtpm.png",
        },
        name: "Pod Systems",
        // createdAt: "2025-07-31T21:45:14.937Z",
        // updatedAt: "2025-07-31T21:45:14.937Z",
      },
      color: {
        id: "1b9f6175-c1e3-4945-87cf-1d34c0d73e27",
        // storeId: "455bb7f7-13b9-42ba-a90c-4d44b032f6d6",
        name: "Royal Blue",
        value: "#3661DF",
        // createdAt: "2025-08-04T16:00:40.782Z",
        // updatedAt: "2025-08-04T16:00:40.782Z",
      },
      size: {
        id: "d289c4c2-a8fc-4e35-a399-a405378fc713",
        // storeId: "455bb7f7-13b9-42ba-a90c-4d44b032f6d6",
        name: "Medium",
        value: "M",
        // createdAt: "2025-07-30T21:10:36.279Z",
        // updatedAt: "2025-08-04T16:08:27.577Z",
      },
    },
    {
      id: "7805fee4-21bf4ac5-b174-51b32b9413dc",
      // storeId: "455bb7f7-13b9-42ba-a90c-4d44b032f6d6",
      // categoryId: "3c1b8005-f502-48f9-b881-d26185eacdd8",
      name: "VaporX Pro Kit",
      price: "49.99",
      isFeatured: true,
      // isArchived: false,
      // colorId: "1b9f6175-c1e3-4945-87cf-1d34c0d73e27",
      // sizeId: "d289c4c2-a8fc-4e35-a399-a405378fc713",
      // createdAt: "2025-08-04T16:05:10.675Z",
      // updatedAt: "2025-08-04T16:05:10.675Z",
      images: [
        {
          id: "1",
          url: "https://res.cloudinary.com/dwvuy59hs/image/upload/v1754323463/bei1tabvzbz0sebzrtpm.png",
        },
        {
          id: "2",
          url: "https://res.cloudinary.com/dwvuy59hs/image/upload/v1754323379/u3tjwf1za4jnqjgpg01i.png",
        },
      ],
      category: {
        id: "3c1b8005-f502-48f9-b881-d26185eacdd8",
        // storeId: "455bb7f7-13b9-42ba-a90c-4d44b032f6d6",
        billboard: {
          id: "cc50b716-90de-4dba-b7f5-1a92b40c69fc",
          label: "Pod Systems",
          imageUrl:
            "https://res.cloudinary.com/dwvuy59hs/image/upload/v1754323463/bei1tabvzbz0sebzrtpm.png",
        },
        name: "Pod Systems",
        // createdAt: "2025-07-31T21:45:14.937Z",
        // updatedAt: "2025-07-31T21:45:14.937Z",
      },
      color: {
        id: "1b9f6175-c1e3-4945-87cf-1d34c0d73e27",
        // storeId: "455bb7f7-13b9-42ba-a90c-4d44b032f6d6",
        name: "Royal Blue",
        value: "#3661DF",
        // createdAt: "2025-08-04T16:00:40.782Z",
        // updatedAt: "2025-08-04T16:00:40.782Z",
      },
      size: {
        id: "d289c4c2-a8fc-4e35-a399-a405378fc713",
        // storeId: "455bb7f7-13b9-42ba-a90c-4d44b032f6d6",
        name: "Medium",
        value: "M",
        // createdAt: "2025-07-30T21:10:36.279Z",
        // updatedAt: "2025-08-04T16:08:27.577Z",
      },
    },
    {
      id: "7805fe4-21bf-4ac5-b174-51b32b9413dc",
      // storeId: "455bb7f7-13b9-42ba-a90c-4d44b032f6d6",
      // categoryId: "3c1b8005-f502-48f9-b881-d26185eacdd8",
      name: "VaporX Pro Kit",
      price: "49.99",
      isFeatured: true,
      // isArchived: false,
      // colorId: "1b9f6175-c1e3-4945-87cf-1d34c0d73e27",
      // sizeId: "d289c4c2-a8fc-4e35-a399-a405378fc713",
      // createdAt: "2025-08-04T16:05:10.675Z",
      // updatedAt: "2025-08-04T16:05:10.675Z",
      images: [
        {
          id: "1",
          url: "https://res.cloudinary.com/dwvuy59hs/image/upload/v1754323463/bei1tabvzbz0sebzrtpm.png",
        },
        {
          id: "2",
          url: "https://res.cloudinary.com/dwvuy59hs/image/upload/v1754323379/u3tjwf1za4jnqjgpg01i.png",
        },
      ],
      category: {
        id: "3c1b8005-f502-48f9-b881-d26185eacdd8",
        // storeId: "455bb7f7-13b9-42ba-a90c-4d44b032f6d6",
        billboard: {
          id: "cc50b716-90de-4dba-b7f5-1a92b40c69fc",
          label: "Pod Systems",
          imageUrl:
            "https://res.cloudinary.com/dwvuy59hs/image/upload/v1754323463/bei1tabvzbz0sebzrtpm.png",
        },
        name: "Pod Systems",
        // createdAt: "2025-07-31T21:45:14.937Z",
        // updatedAt: "2025-07-31T21:45:14.937Z",
      },
      color: {
        id: "1b9f6175-c1e3-4945-87cf-1d34c0d73e27",
        // storeId: "455bb7f7-13b9-42ba-a90c-4d44b032f6d6",
        name: "Royal Blue",
        value: "#3661DF",
        // createdAt: "2025-08-04T16:00:40.782Z",
        // updatedAt: "2025-08-04T16:00:40.782Z",
      },
      size: {
        id: "d289c4c2-a8fc-4e35-a399-a405378fc713",
        // storeId: "455bb7f7-13b9-42ba-a90c-4d44b032f6d6",
        name: "Medium",
        value: "M",
        // createdAt: "2025-07-30T21:10:36.279Z",
        // updatedAt: "2025-08-04T16:08:27.577Z",
      },
    },
    {
      id: "7805fee4-21bf-4ac5-b174-51b32b9413dc",
      // storeId: "455bb7f7-13b9-42ba-a90c-4d44b032f6d6",
      // categoryId: "3c1b8005-f502-48f9-b881-d26185eacdd8",
      name: "VaporX Pro Kit",
      price: "49.99",
      isFeatured: true,
      // isArchived: false,
      // colorId: "1b9f6175-c1e3-4945-87cf-1d34c0d73e27",
      // sizeId: "d289c4c2-a8fc-4e35-a399-a405378fc713",
      // createdAt: "2025-08-04T16:05:10.675Z",
      // updatedAt: "2025-08-04T16:05:10.675Z",
      images: [
        {
          id: "1",
          url: "https://res.cloudinary.com/dwvuy59hs/image/upload/v1754323463/bei1tabvzbz0sebzrtpm.png",
        },
        {
          id: "2",
          url: "https://res.cloudinary.com/dwvuy59hs/image/upload/v1754323379/u3tjwf1za4jnqjgpg01i.png",
        },
      ],
      category: {
        id: "3c1b8005-f502-48f9-b881-d26185eacdd8",
        // storeId: "455bb7f7-13b9-42ba-a90c-4d44b032f6d6",
        billboard: {
          id: "cc50b716-90de-4dba-b7f5-1a92b40c69fc",
          label: "Pod Systems",
          imageUrl:
            "https://res.cloudinary.com/dwvuy59hs/image/upload/v1754323463/bei1tabvzbz0sebzrtpm.png",
        },
        name: "Pod Systems",
        // createdAt: "2025-07-31T21:45:14.937Z",
        // updatedAt: "2025-07-31T21:45:14.937Z",
      },
      color: {
        id: "1b9f6175-c1e3-4945-87cf-1d34c0d73e27",
        // storeId: "455bb7f7-13b9-42ba-a90c-4d44b032f6d6",
        name: "Royal Blue",
        value: "#3661DF",
        // createdAt: "2025-08-04T16:00:40.782Z",
        // updatedAt: "2025-08-04T16:00:40.782Z",
      },
      size: {
        id: "d289c4c2-a8fc-4e35-a399-a405378fc713",
        // storeId: "455bb7f7-13b9-42ba-a90c-4d44b032f6d6",
        name: "Medium",
        value: "M",
        // createdAt: "2025-07-30T21:10:36.279Z",
        // updatedAt: "2025-08-04T16:08:27.577Z",
      },
    },
  ];

  return (
    <section>
      <h1 className="text-2xl font-semibold">Featured Products 🔥</h1>
      <div className="mt-5 grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="group cursor space-y-4 rounded-xl border p-3"
          >
            <div className="relative aspect-square rounded-xl bg-gray-100 p-4">
              <Image
                alt="product image"
                fill
                src={product.images[0].url}
                className="object-cover"
              />

              <div className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 opacity-0 duration-300 group-hover:opacity-100">
                <div className="flex gap-x-4 text-gray-600">
                  <IconButton
                    className="scale-95 text-inherit hover:scale-115 hover:text-white"
                    onClick={() => {}}
                  >
                    <Expand />
                  </IconButton>

                  <IconButton
                    className="scale-95 text-inherit hover:scale-115 hover:text-white"
                    onClick={() => {}}
                  >
                    <ShoppingCart />
                  </IconButton>
                </div>
              </div>
            </div>

            <div className="">
              <p className="text-lg font-semibold">{product.name}</p>
              <p className="text-md text-muted-foreground mb-2">
                {product.category.name}
              </p>
              <p className="text-md font-bold">
                {currencyFormat.format(Number(product.price))}
              </p>
              {/* <p>{product.size.name}</p>
              <span
                style={{ backgroundColor: product.color.value }}
                className="border-primary block size-8 rounded-full border"
              ></span> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
