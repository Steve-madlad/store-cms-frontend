import type { Billboard } from "@/model/types";
import Image from "next/image";

interface BillboardProps {
  data: Billboard | null;
}

export default function Billboard({ data }: BillboardProps) {
  return (
    <div className="overflow-hidden rounded-xl py-4 sm:py-8">
      <div className="relative h-75 overflow-hidden rounded-xl shadow-md">
        {data?.imageUrl && (
          <Image
            alt="billboard"
            src={data?.imageUrl}
            fill
            priority
            className="aspect-square object-cover md:aspect-[2.4/1]"
          />
        )}

        <p className="absolute top-1/2 left-1/2 max-w-xs -translate-x-1/2 -translate-y-1/2 text-center text-3xl font-semibold sm:max-w-xl sm:text-4xl lg:text-5xl">
          {data?.label}
        </p>
      </div>
    </div>
  );
}
