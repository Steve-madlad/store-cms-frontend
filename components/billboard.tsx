import { getBillboard } from "@/actions/billboardActions";
import type { Billboard } from "@/model/types";
import Image from "next/image";

export default async function Billboard({
  data,
  hideLabel,
}: {
  data?: Billboard;
  hideLabel?: boolean;
}) {
  const billboard =
    data ?? (await getBillboard("16a52cc3-a3f1-4004-b63b-b6fedbf0d19d"));

  return (
    <div className="overflow-hidden rounded-xl">
      <div className="relative h-75 overflow-hidden rounded-xl shadow-md">
        {billboard?.imageUrl && (
          <Image
            alt="billboard"
            src={billboard?.imageUrl}
            fill
            priority
            className="aspect-square object-cover md:aspect-[2.4/1]"
          />
        )}

        {hideLabel !== true && (
          <p className="absolute top-1/2 left-1/2 max-w-xs -translate-x-1/2 -translate-y-1/2 text-center text-3xl font-semibold text-white text-shadow-lg sm:max-w-xl sm:text-4xl lg:text-5xl">
            {billboard?.label}
          </p>
        )}
      </div>
    </div>
  );
}
