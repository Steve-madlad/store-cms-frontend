import { getProducts } from "@/actions/productActions";
import { ProductQueryParams } from "@/model/types";
import { ProductCard } from "./productCard";

export default async function ProductGrid({
  isFeatured,
  colorId,
  sizeId,
  categoryId,
  header,
}: ProductQueryParams & { header?: string }) {
  const query: ProductQueryParams = {
    isFeatured,
    colorId,
    sizeId,
    categoryId,
  };
  const products = await getProducts(query);

  console.log("query", query);

  // const products: Product[] = [
  //   {
  //     id: "7805fee4-21bf-4ac5-b174-51b329413dc",
  //     // storeId: "455bb7f7-13b9-42ba-a90c-4d44b032f6d6",
  //     // categoryId: "3c1b8005-f502-48f9-b881-d26185eacdd8",
  //     name: "VaporX Pro Kit",
  //     price: "49.99",
  //     isFeatured: true,
  //     // isArchived: false,
  //     // colorId: "1b9f6175-c1e3-4945-87cf-1d34c0d73e27",
  //     // sizeId: "d289c4c2-a8fc-4e35-a399-a405378fc713",
  //     // createdAt: "2025-08-04T16:05:10.675Z",
  //     // updatedAt: "2025-08-04T16:05:10.675Z",
  //     images: [
  //       {
  //         id: "1",
  //         url: "https://res.cloudinary.com/dwvuy59hs/image/upload/v1754323463/bei1tabvzbz0sebzrtpm.png",
  //       },
  //       {
  //         id: "2",
  //         url: "https://res.cloudinary.com/dwvuy59hs/image/upload/v1754323379/u3tjwf1za4jnqjgpg01i.png",
  //       },
  //     ],
  //     category: {
  //       id: "3c1b8005-f502-48f9-b881-d26185eacdd8",
  //       // storeId: "455bb7f7-13b9-42ba-a90c-4d44b032f6d6",
  //       billboard: {
  //         id: "cc50b716-90de-4dba-b7f5-1a92b40c69fc",
  //         label: "Pod Systems",
  //         imageUrl:
  //           "https://res.cloudinary.com/dwvuy59hs/image/upload/v1754323463/bei1tabvzbz0sebzrtpm.png",
  //       },
  //       name: "Pod Systems",
  //       // createdAt: "2025-07-31T21:45:14.937Z",
  //       // updatedAt: "2025-07-31T21:45:14.937Z",
  //     },
  //     color: {
  //       id: "1b9f6175-c1e3-4945-87cf-1d34c0d73e27",
  //       // storeId: "455bb7f7-13b9-42ba-a90c-4d44b032f6d6",
  //       name: "Royal Blue",
  //       value: "#3661DF",
  //       // createdAt: "2025-08-04T16:00:40.782Z",
  //       // updatedAt: "2025-08-04T16:00:40.782Z",
  //     },
  //     size: {
  //       id: "d289c4c2-a8fc-4e35-a399-a405378fc713",
  //       // storeId: "455bb7f7-13b9-42ba-a90c-4d44b032f6d6",
  //       name: "Medium",
  //       value: "M",
  //       // createdAt: "2025-07-30T21:10:36.279Z",
  //       // updatedAt: "2025-08-04T16:08:27.577Z",
  //     },
  //   },
  //   {
  //     id: "7805fee4-21bf-4ac5-b174-1b32b9413dc",
  //     // storeId: "455bb7f7-13b9-42ba-a90c-4d44b032f6d6",
  //     // categoryId: "3c1b8005-f502-48f9-b881-d26185eacdd8",
  //     name: "VaporX Pro Kit",
  //     price: "49.99",
  //     isFeatured: true,
  //     // isArchived: false,
  //     // colorId: "1b9f6175-c1e3-4945-87cf-1d34c0d73e27",
  //     // sizeId: "d289c4c2-a8fc-4e35-a399-a405378fc713",
  //     // createdAt: "2025-08-04T16:05:10.675Z",
  //     // updatedAt: "2025-08-04T16:05:10.675Z",
  //     images: [
  //       {
  //         id: "1",
  //         url: "https://res.cloudinary.com/dwvuy59hs/image/upload/v1754323463/bei1tabvzbz0sebzrtpm.png",
  //       },
  //       {
  //         id: "2",
  //         url: "https://res.cloudinary.com/dwvuy59hs/image/upload/v1754323379/u3tjwf1za4jnqjgpg01i.png",
  //       },
  //     ],
  //     category: {
  //       id: "3c1b8005-f502-48f9-b881-d26185eacdd8",
  //       // storeId: "455bb7f7-13b9-42ba-a90c-4d44b032f6d6",
  //       billboard: {
  //         id: "cc50b716-90de-4dba-b7f5-1a92b40c69fc",
  //         label: "Pod Systems",
  //         imageUrl:
  //           "https://res.cloudinary.com/dwvuy59hs/image/upload/v1754323463/bei1tabvzbz0sebzrtpm.png",
  //       },
  //       name: "Pod Systems",
  //       // createdAt: "2025-07-31T21:45:14.937Z",
  //       // updatedAt: "2025-07-31T21:45:14.937Z",
  //     },
  //     color: {
  //       id: "1b9f6175-c1e3-4945-87cf-1d34c0d73e27",
  //       // storeId: "455bb7f7-13b9-42ba-a90c-4d44b032f6d6",
  //       name: "Royal Blue",
  //       value: "#3661DF",
  //       // createdAt: "2025-08-04T16:00:40.782Z",
  //       // updatedAt: "2025-08-04T16:00:40.782Z",
  //     },
  //     size: {
  //       id: "d289c4c2-a8fc-4e35-a399-a405378fc713",
  //       // storeId: "455bb7f7-13b9-42ba-a90c-4d44b032f6d6",
  //       name: "Medium",
  //       value: "M",
  //       // createdAt: "2025-07-30T21:10:36.279Z",
  //       // updatedAt: "2025-08-04T16:08:27.577Z",
  //     },
  //   },
  //   {
  //     id: "75fee4-21bf-4ac5-b174-51b32b9413dc",
  //     // storeId: "455bb7f7-13b9-42ba-a90c-4d44b032f6d6",
  //     // categoryId: "3c1b8005-f502-48f9-b881-d26185eacdd8",
  //     name: "VaporX Pro Kit",
  //     price: "49.99",
  //     isFeatured: true,
  //     // isArchived: false,
  //     // colorId: "1b9f6175-c1e3-4945-87cf-1d34c0d73e27",
  //     // sizeId: "d289c4c2-a8fc-4e35-a399-a405378fc713",
  //     // createdAt: "2025-08-04T16:05:10.675Z",
  //     // updatedAt: "2025-08-04T16:05:10.675Z",
  //     images: [
  //       {
  //         id: "1",
  //         url: "https://res.cloudinary.com/dwvuy59hs/image/upload/v1754323463/bei1tabvzbz0sebzrtpm.png",
  //       },
  //       {
  //         id: "2",
  //         url: "https://res.cloudinary.com/dwvuy59hs/image/upload/v1754323379/u3tjwf1za4jnqjgpg01i.png",
  //       },
  //     ],
  //     category: {
  //       id: "3c1b8005-f502-48f9-b881-d26185eacdd8",
  //       // storeId: "455bb7f7-13b9-42ba-a90c-4d44b032f6d6",
  //       billboard: {
  //         id: "cc50b716-90de-4dba-b7f5-1a92b40c69fc",
  //         label: "Pod Systems",
  //         imageUrl:
  //           "https://res.cloudinary.com/dwvuy59hs/image/upload/v1754323463/bei1tabvzbz0sebzrtpm.png",
  //       },
  //       name: "Pod Systems",
  //       // createdAt: "2025-07-31T21:45:14.937Z",
  //       // updatedAt: "2025-07-31T21:45:14.937Z",
  //     },
  //     color: {
  //       id: "1b9f6175-c1e3-4945-87cf-1d34c0d73e27",
  //       // storeId: "455bb7f7-13b9-42ba-a90c-4d44b032f6d6",
  //       name: "Royal Blue",
  //       value: "#3661DF",
  //       // createdAt: "2025-08-04T16:00:40.782Z",
  //       // updatedAt: "2025-08-04T16:00:40.782Z",
  //     },
  //     size: {
  //       id: "d289c4c2-a8fc-4e35-a399-a405378fc713",
  //       // storeId: "455bb7f7-13b9-42ba-a90c-4d44b032f6d6",
  //       name: "Medium",
  //       value: "M",
  //       // createdAt: "2025-07-30T21:10:36.279Z",
  //       // updatedAt: "2025-08-04T16:08:27.577Z",
  //     },
  //   },
  //   {
  //     id: "7805fee4-21bf-4ac5-b174-51b32b9413c",
  //     // storeId: "455bb7f7-13b9-42ba-a90c-4d44b032f6d6",
  //     // categoryId: "3c1b8005-f502-48f9-b881-d26185eacdd8",
  //     name: "VaporX Pro Kit",
  //     price: "49.99",
  //     isFeatured: true,
  //     // isArchived: false,
  //     // colorId: "1b9f6175-c1e3-4945-87cf-1d34c0d73e27",
  //     // sizeId: "d289c4c2-a8fc-4e35-a399-a405378fc713",
  //     // createdAt: "2025-08-04T16:05:10.675Z",
  //     // updatedAt: "2025-08-04T16:05:10.675Z",
  //     images: [
  //       {
  //         id: "1",
  //         url: "https://res.cloudinary.com/dwvuy59hs/image/upload/v1754323463/bei1tabvzbz0sebzrtpm.png",
  //       },
  //       {
  //         id: "2",
  //         url: "https://res.cloudinary.com/dwvuy59hs/image/upload/v1754323379/u3tjwf1za4jnqjgpg01i.png",
  //       },
  //     ],
  //     category: {
  //       id: "3c1b8005-f502-48f9-b881-d26185eacdd8",
  //       // storeId: "455bb7f7-13b9-42ba-a90c-4d44b032f6d6",
  //       billboard: {
  //         id: "cc50b716-90de-4dba-b7f5-1a92b40c69fc",
  //         label: "Pod Systems",
  //         imageUrl:
  //           "https://res.cloudinary.com/dwvuy59hs/image/upload/v1754323463/bei1tabvzbz0sebzrtpm.png",
  //       },
  //       name: "Pod Systems",
  //       // createdAt: "2025-07-31T21:45:14.937Z",
  //       // updatedAt: "2025-07-31T21:45:14.937Z",
  //     },
  //     color: {
  //       id: "1b9f6175-c1e3-4945-87cf-1d34c0d73e27",
  //       // storeId: "455bb7f7-13b9-42ba-a90c-4d44b032f6d6",
  //       name: "Royal Blue",
  //       value: "#3661DF",
  //       // createdAt: "2025-08-04T16:00:40.782Z",
  //       // updatedAt: "2025-08-04T16:00:40.782Z",
  //     },
  //     size: {
  //       id: "d289c4c2-a8fc-4e35-a399-a405378fc713",
  //       // storeId: "455bb7f7-13b9-42ba-a90c-4d44b032f6d6",
  //       name: "Medium",
  //       value: "M",
  //       // createdAt: "2025-07-30T21:10:36.279Z",
  //       // updatedAt: "2025-08-04T16:08:27.577Z",
  //     },
  //   },
  //   {
  //     id: "7805fee4-21bf4ac5-b174-51b32b9413dc",
  //     // storeId: "455bb7f7-13b9-42ba-a90c-4d44b032f6d6",
  //     // categoryId: "3c1b8005-f502-48f9-b881-d26185eacdd8",
  //     name: "VaporX Pro Kit",
  //     price: "49.99",
  //     isFeatured: true,
  //     // isArchived: false,
  //     // colorId: "1b9f6175-c1e3-4945-87cf-1d34c0d73e27",
  //     // sizeId: "d289c4c2-a8fc-4e35-a399-a405378fc713",
  //     // createdAt: "2025-08-04T16:05:10.675Z",
  //     // updatedAt: "2025-08-04T16:05:10.675Z",
  //     images: [
  //       {
  //         id: "1",
  //         url: "https://res.cloudinary.com/dwvuy59hs/image/upload/v1754323463/bei1tabvzbz0sebzrtpm.png",
  //       },
  //       {
  //         id: "2",
  //         url: "https://res.cloudinary.com/dwvuy59hs/image/upload/v1754323379/u3tjwf1za4jnqjgpg01i.png",
  //       },
  //     ],
  //     category: {
  //       id: "3c1b8005-f502-48f9-b881-d26185eacdd8",
  //       // storeId: "455bb7f7-13b9-42ba-a90c-4d44b032f6d6",
  //       billboard: {
  //         id: "cc50b716-90de-4dba-b7f5-1a92b40c69fc",
  //         label: "Pod Systems",
  //         imageUrl:
  //           "https://res.cloudinary.com/dwvuy59hs/image/upload/v1754323463/bei1tabvzbz0sebzrtpm.png",
  //       },
  //       name: "Pod Systems",
  //       // createdAt: "2025-07-31T21:45:14.937Z",
  //       // updatedAt: "2025-07-31T21:45:14.937Z",
  //     },
  //     color: {
  //       id: "1b9f6175-c1e3-4945-87cf-1d34c0d73e27",
  //       // storeId: "455bb7f7-13b9-42ba-a90c-4d44b032f6d6",
  //       name: "Royal Blue",
  //       value: "#3661DF",
  //       // createdAt: "2025-08-04T16:00:40.782Z",
  //       // updatedAt: "2025-08-04T16:00:40.782Z",
  //     },
  //     size: {
  //       id: "d289c4c2-a8fc-4e35-a399-a405378fc713",
  //       // storeId: "455bb7f7-13b9-42ba-a90c-4d44b032f6d6",
  //       name: "Medium",
  //       value: "M",
  //       // createdAt: "2025-07-30T21:10:36.279Z",
  //       // updatedAt: "2025-08-04T16:08:27.577Z",
  //     },
  //   },
  //   {
  //     id: "7805fe4-21bf-4ac5-b174-51b32b9413dc",
  //     // storeId: "455bb7f7-13b9-42ba-a90c-4d44b032f6d6",
  //     // categoryId: "3c1b8005-f502-48f9-b881-d26185eacdd8",
  //     name: "VaporX Pro Kit",
  //     price: "49.99",
  //     isFeatured: true,
  //     // isArchived: false,
  //     // colorId: "1b9f6175-c1e3-4945-87cf-1d34c0d73e27",
  //     // sizeId: "d289c4c2-a8fc-4e35-a399-a405378fc713",
  //     // createdAt: "2025-08-04T16:05:10.675Z",
  //     // updatedAt: "2025-08-04T16:05:10.675Z",
  //     images: [
  //       {
  //         id: "1",
  //         url: "https://res.cloudinary.com/dwvuy59hs/image/upload/v1754323463/bei1tabvzbz0sebzrtpm.png",
  //       },
  //       {
  //         id: "2",
  //         url: "https://res.cloudinary.com/dwvuy59hs/image/upload/v1754323379/u3tjwf1za4jnqjgpg01i.png",
  //       },
  //     ],
  //     category: {
  //       id: "3c1b8005-f502-48f9-b881-d26185eacdd8",
  //       // storeId: "455bb7f7-13b9-42ba-a90c-4d44b032f6d6",
  //       billboard: {
  //         id: "cc50b716-90de-4dba-b7f5-1a92b40c69fc",
  //         label: "Pod Systems",
  //         imageUrl:
  //           "https://res.cloudinary.com/dwvuy59hs/image/upload/v1754323463/bei1tabvzbz0sebzrtpm.png",
  //       },
  //       name: "Pod Systems",
  //       // createdAt: "2025-07-31T21:45:14.937Z",
  //       // updatedAt: "2025-07-31T21:45:14.937Z",
  //     },
  //     color: {
  //       id: "1b9f6175-c1e3-4945-87cf-1d34c0d73e27",
  //       // storeId: "455bb7f7-13b9-42ba-a90c-4d44b032f6d6",
  //       name: "Royal Blue",
  //       value: "#3661DF",
  //       // createdAt: "2025-08-04T16:00:40.782Z",
  //       // updatedAt: "2025-08-04T16:00:40.782Z",
  //     },
  //     size: {
  //       id: "d289c4c2-a8fc-4e35-a399-a405378fc713",
  //       // storeId: "455bb7f7-13b9-42ba-a90c-4d44b032f6d6",
  //       name: "Medium",
  //       value: "M",
  //       // createdAt: "2025-07-30T21:10:36.279Z",
  //       // updatedAt: "2025-08-04T16:08:27.577Z",
  //     },
  //   },
  //   {
  //     id: "7805fee4-21bf-4ac5-b174-51b32b9413dc",
  //     // storeId: "455bb7f7-13b9-42ba-a90c-4d44b032f6d6",
  //     // categoryId: "3c1b8005-f502-48f9-b881-d26185eacdd8",
  //     name: "VaporX Pro Kit",
  //     price: "49.99",
  //     isFeatured: true,
  //     // isArchived: false,
  //     // colorId: "1b9f6175-c1e3-4945-87cf-1d34c0d73e27",
  //     // sizeId: "d289c4c2-a8fc-4e35-a399-a405378fc713",
  //     // createdAt: "2025-08-04T16:05:10.675Z",
  //     // updatedAt: "2025-08-04T16:05:10.675Z",
  //     images: [
  //       {
  //         id: "1",
  //         url: "https://res.cloudinary.com/dwvuy59hs/image/upload/v1754323463/bei1tabvzbz0sebzrtpm.png",
  //       },
  //       {
  //         id: "2",
  //         url: "https://res.cloudinary.com/dwvuy59hs/image/upload/v1754323379/u3tjwf1za4jnqjgpg01i.png",
  //       },
  //     ],
  //     category: {
  //       id: "3c1b8005-f502-48f9-b881-d26185eacdd8",
  //       // storeId: "455bb7f7-13b9-42ba-a90c-4d44b032f6d6",
  //       billboard: {
  //         id: "cc50b716-90de-4dba-b7f5-1a92b40c69fc",
  //         label: "Pod Systems",
  //         imageUrl:
  //           "https://res.cloudinary.com/dwvuy59hs/image/upload/v1754323463/bei1tabvzbz0sebzrtpm.png",
  //       },
  //       name: "Pod Systems",
  //       // createdAt: "2025-07-31T21:45:14.937Z",
  //       // updatedAt: "2025-07-31T21:45:14.937Z",
  //     },
  //     color: {
  //       id: "1b9f6175-c1e3-4945-87cf-1d34c0d73e27",
  //       // storeId: "455bb7f7-13b9-42ba-a90c-4d44b032f6d6",
  //       name: "Royal Blue",
  //       value: "#3661DF",
  //       // createdAt: "2025-08-04T16:00:40.782Z",
  //       // updatedAt: "2025-08-04T16:00:40.782Z",
  //     },
  //     size: {
  //       id: "d289c4c2-a8fc-4e35-a399-a405378fc713",
  //       // storeId: "455bb7f7-13b9-42ba-a90c-4d44b032f6d6",
  //       name: "Medium",
  //       value: "M",
  //       // createdAt: "2025-07-30T21:10:36.279Z",
  //       // updatedAt: "2025-08-04T16:08:27.577Z",
  //     },
  //   },
  // ];

  return (
    <section>
      {header && <h1 className="text-2xl font-semibold">{header}</h1>}
      <div className="mt-5 grid grid-cols-1 place-items-center gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {!products.length && (
        <div className="text-center text-2xl font-semibold">
          No products found :(
        </div>
      )}
    </section>
  );
}
